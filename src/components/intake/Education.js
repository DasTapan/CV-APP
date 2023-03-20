import React, { useState, useEffect } from "react";
import Highlight from "./Highlight";
import uniqid from "uniqid";

function Education({ updateEducation }) {
  const savedJson = localStorage.getItem("eduInfo");
  const storedEducation = JSON.parse(savedJson);

  const [education, setEducation] = useState(storedEducation || []);
  const [text, setText] = useState(""); //naming it 'text' only to assign in Highlight (other component store in 'text')
  const [loc, setLoc] = useState("");
  const [university, setUniversity] = useState("");
  const [id, setId] = useState(uniqid());

  useEffect(() => {
    updateEducation(education);

    localStorage.setItem("eduInfo", JSON.stringify(education));
  }, [education, updateEducation]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setEducation(education.concat({ text, loc, university, id }));
    updateEducation(education);

    setText("");
    setLoc("");
    setUniversity("");
    setId(uniqid);
  };

  const deleteEducation = (id) => {
    setEducation(education.filter((degree) => degree.id !== id));
    updateEducation(education);
  };

  return (
    <div className="education">
      <h3>Education</h3>
      <Highlight items={education} deleteItem={deleteEducation} />
      <form action="" onSubmit={handleSubmit}>
        <h5>Add Education:</h5>
        <div className="form-row">
          <label htmlFor="">Degree :</label>
          <input
            type="text"
            name="text"
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={text}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="">University :</label>
          <input
            type="text"
            name="university"
            onChange={(e) => {
              setUniversity(e.target.value);
            }}
            value={university}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="">State :</label>
          <input
            type="text"
            name="loc"
            onChange={(e) => {
              setLoc(e.target.value);
            }}
            value={loc}
            required
          />
        </div>
        <div className="form-row submit-btn">
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}

export default Education;
