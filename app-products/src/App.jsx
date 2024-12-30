import "./App.css";
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); 
  };

  return (
    <>
      <div className="App">
        <h1>{t("greeting")}</h1>
        <p>{t("welcome_message")}</p>
        <button onClick={() => changeLanguage("en")}>
          {t("change_language")} (English)
        </button>
        <button onClick={() => changeLanguage("mr")}>
          {t("change_language")} (Marathi)
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
