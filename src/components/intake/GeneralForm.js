import React, { useState } from "react";
import uniqid from "uniqid";

function GeneralForm({ subject, updateSection }) {
  const [text, setText] = useState("");
  const [id, setId] = useState(uniqid());

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSection({ text, id });

    setText("");
    setId(uniqid());
  };

  return (
    <div className="general-form">
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">New-{subject}: </label>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          required
        />
        <button type="submit"></button>
      </form>
    </div>
  );
}

export default GeneralForm;
