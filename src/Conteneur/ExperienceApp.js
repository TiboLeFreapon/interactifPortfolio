import Bravo from "../Composants/Experience/Bravo";
import Carte from "../Composants/Experience/Carte";
import RetourAccueil from "../Composants/Generiques/RetourAccueil";
import { useEffect, useState } from "react";
import Vie from "../Composants/Experience/Vie";
import Defaite from "../Composants/Experience/Defaite";
import ContenuExperience from "../Composants/Experience/ContenuExperience";
import BarreTemps from "../Composants/Experience/BarreTemps";
import ModalExplication from "../Composants/Generiques/ModalExplication";
import Entete from "../Composants/Generiques/Entete";

const C_COMPETENCE = require("../Données/cosntanteCompetence");

function arrayShuffle(a) {
  var l = a.length,
    t,
    r;
  while (0 !== l) {
    r = Math.floor(Math.random() * l);
    l -= 1;
    t = a[l];
    a[l] = a[r];
    a[r] = t;
  }
  return a;
}

function ExperienceApp(props) {
  const tableauMelangay = arrayShuffle(
    C_COMPETENCE.competences.concat(C_COMPETENCE.competences)
  );
  const [indexCarteRetournay, setIndexCarteRetournay] = useState({
    premierCarte: undefined,
    deuxiemeCarte: undefined,
  });
  const [idCarteTouvay, setIdCarteTouvay] = useState({});
  /*Pour le boutton replay*/
  const [tableau, setTableau] = useState(tableauMelangay);
  const [nbrVies, setNbrVies] = useState(C_COMPETENCE.nbrDeVie);
  const [afficherBarTemps, setAfficherBarTemps] = useState(false);
  const [afficherExperience, setAfficherExperience] = useState(false);
  const [afficherModal, setAfficherModal] = useState(true);

  const cacherModal = () => {
    setAfficherModal(false);
    setAfficherBarTemps(true);
  };

  const recupChangement = (index) => {
    if (indexCarteRetournay.premierCarte === undefined) {
      setIndexCarteRetournay((indexCarteRetournay) => ({
        ...indexCarteRetournay,
        premierCarte: index,
      }));
    } else {
      setIndexCarteRetournay((indexCarteRetournay) => ({
        ...indexCarteRetournay,
        deuxiemeCarte: index,
      }));
    }
  };

  const reinitialiseCarteAffichay = () => {
    setIndexCarteRetournay(() => ({
      premierCarte: undefined,
      deuxiemeCarte: undefined,
    }));
  };

  const perdu = () => {
    /*enlever une <vie>*/
    setTimeout(() => {
      reinitialiseCarteAffichay();
      setNbrVies((nbrVies) => nbrVies - 1);
    }, C_COMPETENCE.tempsCacherDefaite);
  };

  const gagner = () => {
    setIdCarteTouvay((idCarteTouvay) => ({
      ...idCarteTouvay,
      [indexCarteRetournay.premierCarte]: true,
      [indexCarteRetournay.deuxiemeCarte]: true,
    }));
    console.log(idCarteTouvay);
    reinitialiseCarteAffichay();
  };

  const rejouer = () => {
    const tableauMelangay = arrayShuffle(
      C_COMPETENCE.competences.concat(C_COMPETENCE.competences)
    );
    setTableau(tableauMelangay);
    setNbrVies(C_COMPETENCE.nbrDeVie);
    setIndexCarteRetournay({
      premierCarte: undefined,
      deuxiemeCarte: undefined,
    });
    setIdCarteTouvay({});
    setAfficherBarTemps(true);
  };

  const afficheExperience = () => {
    setAfficherExperience(true);
  };

  const contenuCarte = [];
  for (let i = 0; i < 12; i++) {
    const desactiver =
      (indexCarteRetournay.premierCarte !== undefined &&
        indexCarteRetournay.deuxiemeCarte !== undefined) ||
      i === indexCarteRetournay.premierCarte;
    contenuCarte.push(
      <Carte
        desactiver={desactiver}
        id={i}
        modalEstAffiche={afficherModal}
        afficher={
          idCarteTouvay[i] === true ||
          i === indexCarteRetournay.premierCarte ||
          i === indexCarteRetournay.deuxiemeCarte
        }
        key={"carte-" + i}
        rouge={
          indexCarteRetournay.premierCarte !== undefined &&
          indexCarteRetournay.deuxiemeCarte !== undefined
        }
        plusDeVie={nbrVies === 0}
        trouvay={idCarteTouvay[i] === true}
        competences={tableau[i]}
        tableauMelangay={tableau}
        fonctionChangement={recupChangement}
      />
    );
  }
  useEffect(() => {
    if (
      indexCarteRetournay.premierCarte !== undefined &&
      indexCarteRetournay.deuxiemeCarte !== undefined
    ) {
      if (
        tableau[indexCarteRetournay.premierCarte] !==
        tableau[indexCarteRetournay.deuxiemeCarte]
      ) {
        perdu();
      } else {
        gagner();
      }
    }
  });

  useEffect(() => {
    if (afficherBarTemps === true) {
      setTimeout(() => {
        setAfficherBarTemps(false);
      }, C_COMPETENCE.tempsCacherAnalyse);
    }
  }, [afficherBarTemps]);

  let contenu;
  if (afficherExperience && Object.keys(idCarteTouvay).length === 12) {
    contenu = (
      <>
        <Entete />
        <ContenuExperience />
      </>
    );
  } else {
    contenu = (
      <div className="experience-jeux">
        <>
          <ModalExplication
            afficher={afficherModal}
            cacherModal={cacherModal}
          />
          <RetourAccueil />
          <div className="barre-temps">
            {afficherBarTemps && <BarreTemps tableau={tableau} />}
          </div>

          <div className="contenu-carte">{contenuCarte}</div>
          <Vie
            nbrVies={nbrVies}
            rejouer={rejouer}
            afficherBarTemps={afficherBarTemps}
          />
          {Object.keys(idCarteTouvay).length === 12 && (
            <Bravo
              chaine="Accéder aux expériences"
              afficheExperience={afficheExperience}
            />
          )}
          {nbrVies === 0 && <Defaite />}
        </>
      </div>
    );
  }

  return <>{contenu}</>;
}

export default ExperienceApp;
