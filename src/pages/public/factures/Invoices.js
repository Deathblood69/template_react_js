import React from "react";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getInvoices } from "../../../data/data-invoices";
import { ROUTES } from "../../../constantes/constantes-routes";

/**
 * Composant
 * @returns {JSX.Element}
 * @constructor
 */
export const Invoices = () => {
  // ====== PARAMETRAGE ====== //

  const [searchParams, setSearchParams] = useSearchParams()

  // ====== VARIABLES ====== //

  const invoices = getInvoices()

  // ====== AFFICHAGE ====== //

  return (
    <React.Fragment>
      <div style={{display: 'flex'}}>
        <nav
          style={{
            borderRight: 'solid 1px',
            padding: '1rem',
          }}
        >
          <input
            value={searchParams.get('filter') || ''}
            onChange={event => {
              let filter = event.target.value
              if (filter) {
                setSearchParams({filter})
              } else {
                setSearchParams({})
              }
            }}
          />
          {invoices
            .filter(invoice => {
              let filter = searchParams.get('filter')
              if (!filter) return true
              let name = invoice.name.toLowerCase()
              return name.startsWith(filter.toLowerCase())
            })
            .map(invoice => (
              <NavLink
                style={({isActive}) => {
                  return {
                    display: 'block',
                    margin: '1rem 0',
                    color: isActive ? 'red' : '',
                  }
                }}
                to={`${ROUTES.factures}/${invoice.number}`}
                key={invoice.number}
              >
                {invoice.name}
              </NavLink>
            ))}
        </nav>
        <Outlet />
      </div>
    </React.Fragment>
  )
}