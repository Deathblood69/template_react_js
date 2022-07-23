import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Chargement } from "../composants/Chargement/Chargement";
import "../images/logo.svg";

/**
 * Composant
 * @returns {JSX.Element}
 * @constructor
 */
export const Providers = ({children}) => (
  <Suspense fallback={<Chargement />}>
    <BrowserRouter>{children}</BrowserRouter>
  </Suspense>
)
