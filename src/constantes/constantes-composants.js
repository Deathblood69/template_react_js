import Accueil from '../pages/public/accueil/Accueil'
import {Login} from '../pages/public/login/Login'
import {Invoices} from '../pages/public/factures/Invoices'
import {ROUTES} from './constantes-routes'
import {Invoice} from '../pages/public/factures/Invoice'
import {Contact} from '../pages/public/contact/Contact'

const composants = [
  {
    label: 'accueil',
    path: ROUTES.accueil,
    composant: <Accueil />,
  },
  {
    label: 'login',
    path: ROUTES.login,
    composant: <Login />,
  },
  {
    label: 'factures',
    path: ROUTES.factures,
    composant: <Invoices />,
    enfants: [
      {
        label: 'facture',
        path: ':id',
        composant: <Invoice />,
      },
    ],
  },
  {
    label: 'contact',
    path: ROUTES.contact,
    composant: <Contact />,
  },
]

export const findLabelByPath = path => {
  return composants.find(c => c.path === path)?.label || 'Incorrect'
}

export const getRoutes = () => composants
