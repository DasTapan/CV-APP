import React, { useState, useEffect } from "react";
import GeneralForm from "./GeneralForm";
import Highlight from "./Highlight";

function Language({ updateLanguages }) {
  const savedJson = localStorage.getItem("languages");
  const storedLanguages = JSON.parse(savedJson);

  const [languages, setLanguages] = useState(storedLanguages || []);

  useEffect(() => {
    updateLanguages(languages);
    localStorage.setItem("languages", JSON.stringify(languages));
  }, [languages, updateLanguages]);

  const changeLanguages = (newLang) => {
    setLanguages(languages.concat(newLang));
    updateLanguages(languages);
  };

  const deleteLanguage = (id) => {
    setLanguages(languages.filter((lang) => lang.id !== id));
    updateLanguages(languages);
  };

  return (
    <div className="languages">
      <h3>Languages</h3>
      <Highlight items={languages} deleteItem={deleteLanguage} />
      <GeneralForm subject={"Language"} updateSection={changeLanguages} />
    </div>
  );
}

export default Language;
