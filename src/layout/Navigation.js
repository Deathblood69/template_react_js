import React from "react";
import { Route, Routes } from "react-router-dom";
import { PageErreur } from "../composants/PageErreur";
import logo_404 from "../images/404.png";
import { getRoutes } from "../constantes/constantes-composants";

/**
 * Composant
 * @returns {JSX.Element}
 * @constructor
 */
export const Navigation = ({navigateLastPage}) => (
  <Routes>
    {getRoutes().map(r => (
      <Route key={r.path} path={r.path} element={r.composant}>
        {r.enfants?.map(e => (
          <Route key={r.path} path={e.path} element={e.composant} />
        ))}
      </Route>
    ))}
    <Route
      path="*"
      element={
        <PageErreur
          icone={logo_404}
          message={'page.absent'}
          messageBouton={'page.last'}
          resetErrorBoundary={navigateLastPage}
        />
      }
    />
  </Routes>
)
