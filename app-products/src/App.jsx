import "./App.css";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header/Header";
import HomeSection from "@/components/HomeSection/HomeSection";
import CategoriesSection from "@/components/CategoriesSection/CategoriesSection";
import CountriesSection from "@/components/CountriesSection/CountriesSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import Footer from "@/components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CategoriesProvider from "@/context/CategoriesContext";
import ProductsList from "@/components/ProductsList/ProductsList";
import ProductDetails from "@/components/ProductDetails/ProductDetails";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <CategoriesProvider>
        <Router>
          <div className="app-container">
            <Header />
            <main className="content" >
              <Routes>
                <Route path="/" element={<HomeSection />} />
                <Route path="/categories" element={<CategoriesSection />} />
                <Route path="/category/:id" element={<ProductsList />} />
                <Route path="/product/:productId" element={<ProductDetails />} />
                <Route path="/countries" element={<CountriesSection />} />
                <Route path="/contact" element={<ContactSection />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CategoriesProvider>
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
