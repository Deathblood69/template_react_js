import React from 'react'
import {BrowserRouter} from "react-router-dom";

/**
 * Composant
 * @returns {JSX.Element}
 * @constructor
 */
export const Providers = ({children}) => (
  <React.Fragment>
    <BrowserRouter>
      {children}
    </BrowserRouter>
  </React.Fragment>
)
