import logo from '../../../images/logo.svg'
import '../../../css/App.css'
import {useTranslation} from 'react-i18next'
import {useState} from 'react'
import {format, formatDistance, formatRelative, subDays} from 'date-fns'
import {enGB, fr} from 'date-fns/locale'
import _ from 'lodash'

function Accueil() {
  // ====== PARAMETRAGE ====== //

  const {t, i18n} = useTranslation()

  // ====== VARIABLES ====== //

  const options = [
    {
      label: 'França"Français" value: 'fr',
 "fr" dateLocale: fr,
    }
    {
      label: "English",
      value: "en",
      dateLocale: enGB,
    },
  ]

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const today = new Date();

  const moins3Jour = subDays(today, 3);

  const locale = selectedOption.dateLocale;

  const formatDay = format(today, "eeee dd MMMM  yyyy", { locale });

  const formatDistanceToday = formatDistance(moins3Jour, today, {
    locale,
    addSuffix: true
  });

  const formatRelativeToday = formatRelative(moins3Jour, today, {
    locale
  });

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
        <select value={selectedOption.value} onChange={handleChangeLanguage}>
          {_.sortBy(options, ["label"]).map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <p>{t("titre")}</p>
        <p>{`${formatDay} (${t("aujourdhui")})`}</p>
        <p>{`${formatRelativeToday} (${formatDistanceToday})`}</p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("apprendre_react")}
        </a>
      </header>
    </div>
  )
}

export default Accueil
