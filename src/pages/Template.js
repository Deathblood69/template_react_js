import React from 'react'
import {Providers} from "../providers/Providers";
import {Route, Routes} from "react-router-dom";
import Accueil from "./public/accueil/Accueil";
import {Expenses} from "./public/expenses/Expenses";
import {Invoices} from "./public/invoice/Invoices";
import {Invoice} from "./public/invoice/Invoice";
import {Login} from "./public/login/Login";

/**
 * Composant
 * @returns {JSX.Element}
 * @constructor
 */
export const Template = () => (
  <React.Fragment>
    <Providers>
      <Routes>
        <Route path={"/"} element={<Accueil/>}/>
        <Route path={"expenses"} element={<Expenses/>}/>
        <Route path={"invoices"} element={<Invoices/>}>
          <Route
            index
            element={
              <main style={{padding: "1rem"}}>
                <p>Select an invoice</p>
              </main>
            }
          />
          <Route path={":invoiceId"} element={<Invoice/>}/>
        </Route>
        <Route path={'login'} element={<Login/>}/>
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
)
