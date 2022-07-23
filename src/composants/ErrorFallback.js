import React from "react";
import erreur from "../images/delete.svg";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

/**
 * Composant
 * @returns {JSX.Element}
 * @constructor
 */
export function ErrorFallback() {
  const {t} = useTranslation()
  const navigate = useNavigate()
  return (
    <div className="App">
      <header className="App-header">
        <img src={erreur} className="logo" alt="logo" />
        <p>{t('page.echec')}</p>
        <button
          style={{maxWidth: '50%'}}
          className={'bouton'}
          onClick={() => navigate('/')}
        >
          Try again
        </button>
      </header>
    </div>
  )
}
