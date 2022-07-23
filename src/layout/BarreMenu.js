import React from "react";
import "../css/navbar.css";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../constantes/constantes-routes";
import { useTranslation } from "react-i18next";
import { findLabelByPath } from "../constantes/constantes-composants";

/**
 * Composant
 * @returns {JSX.Element}
 * @constructor
 */
export const BarreMenu = () => (
  <React.Fragment>
    <header className="topnav" id="myTopnav">
      <LabelItem route={ROUTES.accueil} />
      <LabelItem route={ROUTES.yup} isRight={true} />
      <LabelItem route={ROUTES.formulaires} />
      <LabelItem route={ROUTES.query} />
      <LabelItem route={ROUTES.websocket} />
    </header>
  </React.Fragment>
)

const LabelItem = ({route, isRight = false}) => {
  // ====== PARAMETRAGE ====== //

  const {t} = useTranslation()

  const location = useLocation()

  // ====== VARIABLES ====== //

  const isActif = () => {
    let actif = route === location.pathname
    if (!actif && route !== ROUTES.accueil) {
      actif = location.pathname.includes(route)
    }
    return actif
  }

  const actif = isActif() ? 'active' : ''

  const float = isRight ? 'right' : 'left'

  // ====== AFFICHAGE ====== //

  return (
    <Link to={route} className={`${actif} ${float}`}>
      {t(`pages.${findLabelByPath(route)}`)}
    </Link>
  )
}
