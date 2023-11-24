import { useEffect, useState } from "react";
import { HeartFill, Heart, ArrowClockwise } from "react-bootstrap-icons";
const C_COMPETENCE = require("../../Données/cosntanteCompetence");

function Vie(props) {
  const [desactiver, setDesactiver] = useState(props.afficherBarTemps);

  useEffect(() => {
    setDesactiver(props.afficherBarTemps);
  }, [props.afficherBarTemps]);

  const elementVie = [];
  for (let i = 0; i < C_COMPETENCE.nbrDeVie; i++) {
    if (i < props.nbrVies) {
      elementVie.push(<HeartFill color="red" className="vie" />);
    } else {
      elementVie.push(<Heart className="vie" />);
    }
  }

  let classNameRejouer = "recommencer-carte";
  if (desactiver) {
    classNameRejouer += " desactiver";
  }
  if (props.nbrVies === 0) {
    classNameRejouer += " animation-agrandir";
  }
  return (
    <div className="contenu-vie">
      {props.nbrVies !== 0 && elementVie}
      <ArrowClockwise
        className={classNameRejouer}
        onClick={desactiver ? () => {} : props.rejouer}
      />
    </div>
  );
}

export default Vie;
