const C_COMPETENCE = require("../../Données/cosntanteCompetence");

function Technologies(props) {
  const renduTechno = [];
  const listeTechno =
    C_COMPETENCE.listeExperience[props.indexExperience].technologie;
  for (let i = 0; i < listeTechno.length; i++) {
    renduTechno.push(<span className="techno">{listeTechno[i]}</span>);
  }
  return (
    <div className="technologies">
      <button className={"button-mission"}>Technologies utilsées</button> <br />
      <div className="techno-utilise">{renduTechno}</div>
    </div>
  );
}

export default Technologies;
