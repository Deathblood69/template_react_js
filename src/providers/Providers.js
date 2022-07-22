import React, {Suspense} from 'react';
import {BrowserRouter} from "react-router-dom";

/**
 * Composant
 * @returns {JSX.Element}
 * @constructor
 */
export const Providers = ({children}) => (
  <Suspense fallback="loading">
    <BrowserRouter>
      {children}
    </BrowserRouter>
  </Suspense>
)
