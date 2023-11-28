import RetourAccueil from "../Composants/Generiques/RetourAccueil";
import Parcour from "../Composants/Parcours/Parcour";
import { parcoursDonne } from "../Données/constanteParcour";

function Parcours(props) {
  const parcours = parcoursDonne.parcours || [];
  let contenuParcour = [];
  for (let i = 0; i < parcours.length; i++) {
    contenuParcour.push(<Parcour indexParcour={i} />);
  }
  return (
    <div className="parcours">
      <RetourAccueil />
      <div className="contenu-parcours">{contenuParcour}</div>;
    </div>
  );
}

export default Parcours;
