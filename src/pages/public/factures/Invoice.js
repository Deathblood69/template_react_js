import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { deleteInvoice, getInvoice } from "../../../data/data-invoices";
import { ROUTES } from "../../../constantes/constantes-routes";

/**
 * Composant
 * @returns {JSX.Element}
 * @constructor
 */
export const Invoice = () => {
  // ====== PARAMETRAGE ====== //

  const navigate = useNavigate()

  const location = useLocation()

  const params = useParams()

  // ====== VARIABLES ====== //

  const invoice = getInvoice(parseInt(params.id, 10))

  // ====== AFFICHAGE ====== //

  return (
    <main style={{padding: '1rem'}}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
      <p>
        <button onClick={() => navigate(ROUTES.factures)}>Return</button>
        <button
          onClick={() => {
            deleteInvoice(invoice.number)
            navigate(ROUTES.factures + location.search)
          }}
        >
          Delete
        </button>
      </p>
    </main>
  )
}
