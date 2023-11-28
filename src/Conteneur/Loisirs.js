import RetourAccueil from "../Composants/Generiques/RetourAccueil";
import Loisir from "../Composants/Loisirs/Loisir";
import { loisirDonnees } from "../Données/constanteLoisirs";

function Loisirs(props) {
  const loisirs = loisirDonnees.loisirs || [];
  let contenuLoisir = [];
  for (let i = 0; i < loisirs.length; i++) {
    contenuLoisir.push(<Loisir indexLoisir={i} />);
  }
  return (
    <div className="loisirs">
      <RetourAccueil />
      <div className="contenu-loisir">{contenuLoisir}</div>;
    </div>
  );
}

export default Loisirs;
