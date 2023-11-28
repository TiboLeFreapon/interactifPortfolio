import Button from "react-bootstrap/esm/Button";
const C_COMPETENCE = require("../../Données/cosntanteCompetence");

function ModalExplication(props) {
  return props.afficher ? (
    <div className="voile">
      <div className="modal ">
        <h1 className="titre-modal">Memorium</h1>
        <div className="explication">
          <span>
            Pour accéder à mes expériences, passe d'abord cette étape.
          </span>
          <span>Mémorise les cartes ! </span>
          <span>
            Une fois que les cartes se retournent, retrouve les paires en
            cliquant sur les cartes 2 par 2.
          </span>
        </div>
        <div className="info-jeux">
          <span>
            Temps d'analyse: {C_COMPETENCE.tempsCacherAnalyse / 1000} secondes
          </span>
          <span>Nombre de vie: {C_COMPETENCE.nbrDeVie}</span>
        </div>

        <Button className="bouton-pret" onClick={props.cacherModal}>
          Prêt
        </Button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default ModalExplication;
