import React, { useState, useEffect } from "react";
import Highlight from "./Highlight";
import uniqid from "uniqid";

function Project({ updateProjects }) {
  const savedJson = localStorage.getItem("projectInfo");
  const storedProjects = JSON.parse(savedJson);

  const [projects, setProjects] = useState(storedProjects.projects || []);
  const [text, setText] = useState(""); //naming it 'text' only to assign in Highlight (other component store in 'text')
  const [subTitle, setSubTitle] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState(uniqid());

  useEffect(() => {
    updateProjects(projects);

    localStorage.setItem("projectInfo", JSON.stringify(projects));
  }, [projects, updateProjects]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setProjects(projects.concat({ text, subTitle, description, id }));
    updateProjects(projects);

    setText("");
    setSubTitle("");
    setDescription("");
    setId(uniqid);
  };

  const deleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
    updateProjects(projects);
  };

  return (
    <div className="projects">
      <h3>Projects</h3>
      <Highlight items={projects} deleteItem={deleteProject} />
      <form action="" onSubmit={handleSubmit}>
        <h5>Add Project:</h5>
        <div className="form-row">
          <label htmlFor="">Title :</label>
          <input
            type="text"
            name="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="">Sub-Title :</label>
          <input
            type="text"
            name="subTitle"
            value={subTitle}
            onChange={(e) => {
              setSubTitle(e.target.value);
            }}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="">Description :</label>
          <textarea
            name="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            required
          ></textarea>
        </div>
        <div className="form-row submit-btn">
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}

export default Project;
