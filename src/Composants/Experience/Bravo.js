function Bravo(props) {
  return (
    <div className="bravo">
      <span className="bien-jouer"> Bien joué !</span>
      <button className="bouton-bravo" onClick={props.afficheExperience}>
        {props.chaine}
      </button>
    </div>
  );
}

export default Bravo;
