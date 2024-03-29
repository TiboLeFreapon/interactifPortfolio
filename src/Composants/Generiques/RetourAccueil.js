import { Link } from "react-router-dom";
import { List, ArrowBarLeft } from "react-bootstrap-icons";

function RetourAccueil(props) {
  return (
    <nav>
      <Link to="/" className="bouton-retour-accueil">
        <ArrowBarLeft width="60px" height="60px" color="white" />
      </Link>
    </nav>
  );
}

export default RetourAccueil;
