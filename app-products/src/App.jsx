import "./App.css";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header/Header";
import HomeSection from "@/components/HomeSection/HomeSection";
import CategoriesSection from "@/components/CategoriesSection/CategoriesSection";
import CountriesSection from "@/components/CountriesSection.jsx/CountriesSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import Footer from "@/components/Footer/Footer";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <div className="App">
        <Header />
        <main>
          <HomeSection />
          <CategoriesSection />
          <CountriesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
      {/* <div className="App">
        <h1>{t("greeting")}</h1>
        <p>{t("welcome_message")}</p>
        <button onClick={() => changeLanguage("en")}>
          {t("change_language")} (English)
        </button>
        <button onClick={() => changeLanguage("mr")}>
          {t("change_language")} (Marathi)
        </button>
      </div> */}
    </>
  );
}

export default App;
