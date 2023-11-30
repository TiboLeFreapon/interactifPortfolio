import { Link } from "react-router-dom";
import { List } from "react-bootstrap-icons";
import Contact from "../PiedPage/Contact";
import Version from "../PiedPage/Version";
import Button from "react-bootstrap/esm/Button";

function PiedPage(props) {
  return (
    <nav className="pied-page">
      <Link to="/contact">
        <Button className="button-pied-page"> Contact </Button>
      </Link>
      <Link to="/version">
        <Button className="button-pied-page"> Version 0.3 </Button>
      </Link>
    </nav>
  );
}

export default PiedPage;
