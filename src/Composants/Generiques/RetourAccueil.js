import { Link } from "react-router-dom";

function RetourAccueil(props) {
  return (
    <nav>
      <Link to="/">
        <button>Retour accueil</button>
      </Link>
    </nav>
  );
}

export default RetourAccueil;
