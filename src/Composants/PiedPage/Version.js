import React from "react";
import { constanteVersion } from "../../Données/constanteVersion";
import { X, Check } from "react-bootstrap-icons";

import Entete from "../Generiques/Entete";

const Version = (props) => {
  const { listeFonctionnalitay } = constanteVersion;
  let contenu = [];
  for (let index = 0; index < listeFonctionnalitay.length; index++) {
    contenu.push(
      <div className="version-fonctionnalite">
        {listeFonctionnalitay[index].developper ? (
          <Check className="icone-version" color="green" />
        ) : (
          <X className="icone-version" color="red" />
        )}
        <span className="fonctionalite">
          {listeFonctionnalitay[index].fonctionnalite}
        </span>
      </div>
    );
  }

  return (
    <>
      <Entete />
      <div className="contenu-version">
        <div>
          <p>Ce site web est en cours de développement...</p>
          <h2>Liste des fonctionnalités à développer pour la V1: </h2>
        </div>
        <div className="versions">{contenu}</div>
      </div>
    </>
  );
};

Version.propTypes = {};

export default Version;
