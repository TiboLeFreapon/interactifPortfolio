import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import RetourAccueil from "./RetourAccueil";
import { useState } from "react";

const C_GEN = require("../../Données/constanteGeneral");

function Entete(props) {
  const [indexLangue, setIdexLangue] = useState(0);
  return (
    <div className="entete">
      {props.accueil ? (
        ""
      ) : (
        <div className="retour">
          <RetourAccueil />
        </div>
      )}

      <div className="contenu-bouton-traduction" style={{ display: "none" }}>
        {C_GEN.langues.map((langue, idx) => (
          <Button
            key={idx}
            id={langue}
            className={
              idx !== indexLangue
                ? "bouton-traduction inactif"
                : "bouton-traduction"
            }
            disabled={idx === 1}
            checked={indexLangue === idx}
            onClick={() => setIdexLangue(idx)}
          >
            {langue}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Entete;
