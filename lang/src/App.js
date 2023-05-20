import React from "react";
import "./index.css";

import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const inlineStyles = {
    fontSize: "16px",
    fontWeight: "bold",
    display: "flex",
    aliginItem: "center",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
  };

  const inl = {
    fontSize: "40px",
    display: "flex",
    aliginItem: "center",
    justifyContent: "center",
    marginTop: "30px",
  };

  return (
    <div className="App">
      <header style={inlineStyles}>
        {i18n.language == "en" && (
          <button
            className="ar"
            onClick={() => {
              i18n.changeLanguage("ar");
            }}
          >
            Arabic
          </button>
        )}

        {i18n.language == "ar" && (
          <button
            className="en"
            onClick={() => {
              i18n.changeLanguage("en");
            }}
          >
            English
          </button>
        )}
      </header>
      <div className="yes">
        <h1 style={inl}>{t("title")}</h1>
      </div>

      <section>
        <div className="container">
          <div className="left">{t("salimeen")} </div>
          <div className="right">{t("thank")} </div>
        </div>
      </section>
    </div>
  );
}

export default App;
