import React, { useState, useEffect } from "react";
import GeneralForm from "./GeneralForm";
import Highlight from "./Highlight";

function Interest({ updateInterests }) {
  const savedJson = localStorage.getItem("interests");
  const storedInterests = JSON.parse(savedJson);

  const [interests, setInterests] = useState(storedInterests || []);

  useEffect(() => {
    updateInterests(interests);
    localStorage.setItem("interests", JSON.stringify(interests));
  }, [interests, updateInterests]);

  const changeInterests = (newInterest) => {
    setInterests(interests.concat(newInterest));
    updateInterests(interests);
  };

  const deleteInterest = (id) => {
    setInterests(interests.filter((skill) => skill.id !== id));
    updateInterests(interests);
  };

  return (
    <div className="interests">
      <h3>Interests</h3>
      <Highlight items={interests} deleteItem={deleteInterest} />
      <GeneralForm subject={"Interest"} updateSection={changeInterests} />
    </div>
  );
}

export default Interest;
