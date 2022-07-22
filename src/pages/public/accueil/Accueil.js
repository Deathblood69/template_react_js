import logo from '../../../images/logo.svg';
import '../../../css/App.css';
import {useTranslation} from "react-i18next";
import {useState} from "react";

function Accueil() {

  const {t, i18n} = useTranslation()

  const options = [
    {
      label: "Français",
      value: "fr"
    },
    {
      label: "English",
      value: "en"
    }
  ]

  const [selectedOption, setSelectedOption] = useState(options[0])

  function handleChangeLanguage(event) {
    const newLanguage = options
      .find(e => e.value === event.target.value)
    setSelectedOption(newLanguage)
    i18n.changeLanguage(newLanguage.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <select value={selectedOption.value} onChange={handleChangeLanguage}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
        <p>
          {t('Welcome to React')}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
    </div>

  );
}

export default Accueil;
