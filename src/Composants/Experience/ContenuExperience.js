import Experience from "./Experience";
import { useEffect } from "react";

const C_COMPETENCE = require("../../Données/cosntanteCompetence");

function ContenuExperience(props) {
  let contenuExperience = [];
  for (let i = 0; i < C_COMPETENCE.listeExperience.length; i++) {
    contenuExperience.push(
      <Experience indexExperience={i} key={"experience-" + i} />
    );
  }

  useEffect(() => {}, []);
  return <div className="contenu-experience">{contenuExperience}</div>;
}

export default ContenuExperience;
