import React from "react";

import "./chargement.css";

/**
 * Composant
 * @returns {JSX.Element}
 * @constructor
 */
export const Chargement = ({logo}) => (
  <div className={'container-logo'}>
    <img src={logo} className="logo animation-rotate" alt="logo" />
  </div>
)
