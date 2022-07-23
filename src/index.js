import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import reportWebVitals from './fonctions/reportWebVitals'
import {Template} from './pages/Template'
import './locales/i18n'
import {Providers} from './providers/Providers'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Providers>
    <Template />
  </Providers>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
