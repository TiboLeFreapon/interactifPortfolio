import { parcoursDonne } from "../../Données/constanteParcour";

function Parcour(props) {
  const parcour = parcoursDonne.parcours[props.indexParcour];
  const { name, specialité, date, particularité, ecole } = parcour;
  return (
    <div className="parcour">
      <h3>{name}</h3>
      {specialité ? <h4>spécialité : {specialité}</h4> : ""}
      <span>{date}</span>
      <span>{ecole}</span>
      <span>{particularité}</span>
    </div>
  );
}

export default Parcour;
