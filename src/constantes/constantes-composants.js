import Accueil from '../pages/public/accueil/Accueil'
import {Yup} from '../pages/public/yup/Yup'
import {Formulaires} from '../pages/public/formulaire/Formulaires'
import {ROUTES} from './constantes-routes'
import {Invoice} from '../pages/public/formulaire/Invoice'
import {Query} from '../pages/public/query/Query'
import {WebSocketDemo} from '../pages/public/websocket/WebSocketDemo'

const composants = [
  {
    label: 'accueil',
    path: ROUTES.accueil,
    composant: <Accueil />,
  },
  {
    label: 'yup',
    path: ROUTES.yup,
    composant: <Yup />,
  },
  {
    label: 'formulaire',
    path: ROUTES.formulaires,
    composant: <Formulaires />,
    enfants: [
      {
        label: 'facture',
        path: ':id',
        composant: <Invoice />,
      },
    ],
  },
  {
    label: 'query',
    path: ROUTES.query,
    composant: <Query />,
  },
  {
    label: 'websocket',
    path: ROUTES.websocket,
    composant: <WebSocketDemo />,
  },
]

export const findLabelByPath = path => {
  return composants.find(c => c.path === path)?.label || 'Incorrect'
}

export const getRoutes = () => composants
