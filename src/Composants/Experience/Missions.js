import { useState } from "react";
import { CaretDownFill } from "react-bootstrap-icons";

const C_COMPETENCE = require("../../Données/cosntanteCompetence");

function Taches(props) {
  const tacheEnCours = props.taches;
  const tacheAffiche = [];
  for (let i = 0; i < tacheEnCours.length; i++) {
    tacheAffiche.push(
      <>
        <span className="taches">{tacheEnCours[i]}</span>
      </>
    );
  }

  console.log(tacheAffiche);
  return (
    <div
      className={
        props.afficherDetail ? "taches-contenu" : "taches-contenu display-none"
      }
    >
      {tacheAffiche}
    </div>
  );
}

function Missions(props) {
  const [afficherDetail, setAfficherDetail] = useState(false);
  const missionEnCours =
    C_COMPETENCE.listeExperience[props.indexExperience].missions[
      props.indexMissions
    ];
  const toggleAffichage = () => {
    setAfficherDetail(!afficherDetail);
  };
  return (
    <div className="missions" onClick={toggleAffichage}>
      <button className={"button-mission"}>
        {missionEnCours.name}{" "}
        <CaretDownFill
          className={
            afficherDetail ? "retourne-caret caret-mission" : "caret-mission"
          }
        />
      </button>
      <div className={"resume"}>
        <span>{missionEnCours.resume}</span>
      </div>
      <Taches afficherDetail={afficherDetail} taches={missionEnCours.taches} />
    </div>
  );
}

export default Missions;
