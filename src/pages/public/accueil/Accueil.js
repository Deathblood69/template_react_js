import logo from '../../../images/logo.svg'
import '../../../css/App.css'
import {useTranslation} from 'react-i18next'
import {useState} from 'react'
import {format, formatDistance, formatRelative, subDays} from 'date-fns'
import {fr} from 'date-fns/locale'
import _ from 'lodash'

function Accueil() {
  // ====== PARAMETRAGE ====== //

  const {t, i18n} = useTranslation()

  // ====== VARIABLES ====== //

  const options = [
    {
      label: 'Français',
      value: 'fr',
    },
    {
      label: 'English',
      value: 'en',
    },
  ]

  const [selectedOption, setSelectedOption] = useState(options[0])

  const today = new Date()

  const moins3Jour = subDays(today, 3)

  const formatToday = format(today, 'eeee', {locale: fr})

  const formatDistanceToday = formatDistance(moins3Jour, today, {
    locale: fr,
    addSuffix: true,
  })

  const formatRelativeToday = formatRelative(moins3Jour, today, {
    locale: fr,
  })

  // ====== METHODES ====== //

  function handleChangeLanguage(event) {
    const newLanguage = options.find(e => e.value === event.target.value)
    setSelectedOption(newLanguage)
    i18n.changeLanguage(newLanguage.value)
  }

  // ====== AFFICHAGE ====== //

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{formatToday}</p>
        <p>{formatDistanceToday}</p>
        <p>{formatRelativeToday}</p>
        <select value={selectedOption.value} onChange={handleChangeLanguage}>
          {_.sortBy(options, ['label']).map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <p>{t('titre')}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('apprendre_react')}
        </a>
      </header>
    </div>
  )
}

export default Accueil
