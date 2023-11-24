import { Link } from "react-router-dom";
import { List } from "react-bootstrap-icons";

function RetourAccueil(props) {
  return (
    <nav>
      <Link to="/" className="bouton-retour-accueil">
        <List width="60px" height="60px" color="white" />
      </Link>
    </nav>
  );
}

export default RetourAccueil;
