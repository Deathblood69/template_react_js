import React from "react";
import { Providers } from "../providers/Providers";
import { Route, Routes } from "react-router-dom";
import { Expenses } from "./public/expenses/Expenses";
import { Invoices } from "./public/invoice/Invoices";
import { Invoice } from "./public/invoice/Invoice";
import { Login } from "./public/login/Login";
import { ErrorFallback } from "../composants/ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";
import Accueil from "./public/accueil/Accueil";
import { NoInvoice } from "./public/invoice/NoInvoice";
import { Exemple } from "./public/query/Exemple";

/**
 * Composant
 * @returns {JSX.Element}
 * @constructor
 */
export const Template = () => (
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => {
      /* RAS */
    }}
  >
    <Providers>
      <Routes>
        <Route path={'/'} element={<Accueil />} />
        <Route path={'expenses'} element={<Expenses />} />
        <Route path={'invoices'} element={<Invoices />}>
          <Route index element={<NoInvoice />} />
          <Route path={':invoiceId'} element={<Invoice />} />
        </Route>
        <Route path={'login'} element={<Login />} />
        <Route path={'exemple'} element={<Exemple />} />
        <Route
          path="*"
          element={
            <main style={{padding: '1rem'}}>
              <p>Th"1rem"nothing here!</p>
            </main>
          }
        />
      </Routes>
    </Providers>
  </ErrorBoundary>
)
