import React from 'react'
import {useLocation, useNavigate, useParams} from 'react-router-dom'
import {deleteInvoice, getInvoice} from '../../../data/data-invoices'

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

  const invoice = getInvoice(parseInt(params.invoiceId, 10))

  // ====== AFFICHAGE ====== //

  return (
    <main style={{padding: '1rem'}}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
      <p>
        <button
          onClick={() => {
            deleteInvoice(invoice.number)
            navigate('/invoices' + location.search)
          }}
        >
          Delete
        </button>
      </p>
    </main>
  )
}
