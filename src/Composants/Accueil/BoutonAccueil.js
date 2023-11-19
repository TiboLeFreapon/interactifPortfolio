function BoutonAccueil(props) {
  return (
    <div className="contient-bouton-accueil">
      <button className="bouton-accueil" id={props.sousApp}>
        {props.sousApp}
      </button>
    </div>
  );
}

export default BoutonAccueil;
