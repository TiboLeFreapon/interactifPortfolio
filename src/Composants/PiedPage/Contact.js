import React from "react";

import { EnvelopeAtFill, Linkedin, TelephoneFill } from "react-bootstrap-icons";
import Entete from "../Generiques/Entete";

const Contact = (props) => {
  return (
    <>
      <Entete />
      <div className="contenu-contact">
        <span className="contact">
          <Linkedin color="white" /> Thibault SCHMITT
        </span>
        <span className="contact">
          <EnvelopeAtFill color="white" /> thibault.schmitt5@gmail.com
        </span>
        <span className="contact">
          <TelephoneFill color="white" /> CA: +1 438 (228-6870)
        </span>

        <span className="contact">
          <TelephoneFill color="white" /> FR: +33 6 80 35 83 06
        </span>
      </div>
    </>
  );
};

export default Contact;
