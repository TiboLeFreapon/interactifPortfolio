import { Link } from "react-router-dom";
import BoutonAccueil from "../Composants/Accueil/BoutonAccueil";

function Accueil() {
  return (
    <div className="accueil">
      <nav>
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
