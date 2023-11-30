import { Link } from "react-router-dom";
import BoutonAccueil from "../Composants/Accueil/BoutonAccueil";
import Entete from "../Composants/Generiques/Entete";
import PiedPage from "../Composants/Generiques/PiedPage";

function Accueil() {
  return (
    <div className="accueil" style={{ height: window.screen.height }}>
      <Entete accueil={true} />
      <nav id="navigation-accueil">
        <Link to="/experience">
          <BoutonAccueil sousApp="Expériences" />
        </Link>
        <Link to="/parcours">
          <BoutonAccueil sousApp="Parcours" />
        </Link>
        <Link to="/loisirs">
          <BoutonAccueil sousApp="Loisirs" />
        </Link>
      </nav>
      <PiedPage />
    </div>
  );
}

export default Accueil;
