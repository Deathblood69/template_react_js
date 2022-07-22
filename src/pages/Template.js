import React from 'react'
import {Providers} from "../layout/Providers";
import {Route, Routes} from "react-router-dom";
import Accueil from "./public/accueil/Accueil";
import {Expenses} from "./public/expenses/Expenses";
import {Invoices} from "./public/invoice/Invoices";
import {Invoice} from "./public/invoice/Invoice";

/**
 * Composant
 * @returns {JSX.Element}
 * @constructor
 */
export const Template = () => {
  // ====== PARAMETRAGE ====== //

  // ====== VARIABLES ====== //

  // ====== REQUETES ====== //

  // ====== METHODES ====== //

  // ====== USE EFFECT ====== //

  // ====== AFFICHAGE ====== //

  return <React.Fragment>
    <Providers>
      <Routes>
        <Route path="/" element={<Accueil/>}/>
        <Route path="expenses" element={<Expenses/>}/>
        <Route path="invoices" element={<Invoices/>}>
          <Route
            index
            element={
              <main style={{padding: "1rem"}}>
                <p>Select an invoice</p>
              </main>
            }
          />
          <Route path=":invoiceId" element={<Invoice/>}/>
        </Route>
        <Route
          path="*"
          element={
            <main style={{padding: "1rem"}}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </Providers>
  </React.Fragment>
}
