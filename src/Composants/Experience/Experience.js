import Missions from "./Missions";
import Technologies from "./Technologies";

const C_COMPETENCE = require("../../Données/cosntanteCompetence");

function Experience(props) {
  const experienceEnCours = C_COMPETENCE.listeExperience[props.indexExperience];
  const missions = [];
  console.log("mission taille");
  console.log(experienceEnCours);
  for (let i = 0; i < experienceEnCours.missions.length; i++) {
    missions.push(
      <Missions indexMissions={i} indexExperience={props.indexExperience} />
    );
  }
  return (
    <div className="experience">
      <div className="entete">
        <a href={experienceEnCours.lien} target="blank">
          <span className="societe">{experienceEnCours.societe}</span>
        </a>
        <div className="date">
          <span>de {experienceEnCours.dateDebut}</span>
          <span> à {experienceEnCours.dateFin}</span> <br />
          <span>{experienceEnCours.contrat}</span>
        </div>
      </div>
      {missions}
      <Technologies indexExperience={props.indexExperience} />
    </div>
  );
}

export default Experience;
