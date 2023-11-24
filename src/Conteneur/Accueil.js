import { Link } from "react-router-dom";
import BoutonAccueil from "../Composants/Accueil/BoutonAccueil";
import Entete from "../Composants/Generiques/Entete";

function Accueil() {
  return (
    <div className="accueil">
      <Entete />
      <nav id="navigation-accueil">
        <Link to="/parcours">
          <BoutonAccueil sousApp="Parcours" />
        </Link>

        <Link to="/experience">
          <BoutonAccueil sousApp="Experience" />
        </Link>

        <Link to="/loisirs">
          <BoutonAccueil sousApp="Loisirs" />
        </Link>
      </nav>
    </div>
  );
}

export default Accueil;
