import { loisirDonnees } from "../../Données/constanteLoisirs";

function Loisir(props) {
  const loisir = loisirDonnees.loisirs[props.indexLoisir];
  const { name, explication } = loisir;
  return (
    <div className="loisir">
      <h3>{name}</h3>
      <span>{explication}</span>
    </div>
  );
}

export default Loisir;
