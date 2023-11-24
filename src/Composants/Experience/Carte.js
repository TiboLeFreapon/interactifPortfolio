import React, { useState, useCallback, useEffect } from "react";

const C_COMPETENCE = require("../../Données/cosntanteCompetence");

function Carte(props) {
  const [affichay, setAffichay] = useState(false);
  const [activeBouton, setActiveBouton] = useState(false);
  /*const [activeBouton, setActiveBouton] = useState(false);*/

  useEffect(() => {
    if (!props.modalEstAffiche) {
      setActiveBouton(true);
      setAffichay(true);
    }
  }, [props.tableauMelangay, props.modalEstAffiche]);

  useEffect(() => {
    if (!props.modalEstAffiche) {
      setTimeout(() => {
        setActiveBouton(false);
        setAffichay(false);
      }, C_COMPETENCE.tempsCacherAnalyse);
    }
  }, [props.tableauMelangay, props.modalEstAffiche]);

  const surCliqueCarte = () => {
    props.fonctionChangement(props.id);
  };

  let contenuAffichay;

  if (affichay) {
    contenuAffichay = props.competences;
  } else {
    if (props.afficher) {
      contenuAffichay = props.competences;
    } else {
      contenuAffichay = "";
    }
  }

  return (
    <button
      disabled={
        activeBouton || props.trouvay || props.plusDeVie || props.desactiver
      }
      className={props.trouvay ? "carte verte" : "carte"}
      onClick={surCliqueCarte}
    >
      {contenuAffichay}
    </button>
  );
}

export default Carte;
