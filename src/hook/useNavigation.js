import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * Composant
 * @returns {JSX.Element}
 * @constructor
 */
export const useNavigation = () => {
  // ====== PARAMETRAGE ====== //

  const navigate = useNavigate()

  // ====== METHODES ====== //

  const reloadPage = () => {
    window.location.reload()
  }

  const navigateLastPage = () => {
    navigate(-1)
  }

  // ====== AFFICHAGE ====== //

  return {
    reloadPage,
    navigateLastPage,
  }
}
