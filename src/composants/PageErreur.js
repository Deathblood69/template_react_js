import React from "react";
import erreur from "../images/delete.svg";
import { useTranslation } from "react-i18next";

/**
 * Composant
 * @returns {JSX.Element}
 * @constructor
 */
export function PageErreur({
  resetErrorBoundary,
  icone,
  message,
  messageBouton,
}) {
  const {t} = useTranslation()
  return (
    <div className="center-page">
      <header className="center-page">
        <img src={icone ?? erreur} className="logo" alt="logo" />
        <p>{t(message ?? 'page.echec')}</p>
        <button style={{maxWidth: '50%'}} onClick={resetErrorBoundary}>
          {t(messageBouton ?? 'page.reload')}
        </button>
      </header>
    </div>
  )
}
