import React from "react";
import { useState, useEffect } from "react";

export default function PersonalInfo({ updatePInfo }) {
  const savedJson = localStorage.getItem("personalInfo");
  const personalInfo = JSON.parse(savedJson);

  const [fullName, setFullName] = useState(personalInfo.fullName || "");
  const [jobTitle, setJobTitle] = useState(personalInfo.jobTitle || "");
  const [email, setEmail] = useState(personalInfo.email || "");
  const [phone, setPhone] = useState(personalInfo.phone || "");
  const [city, setCity] = useState(personalInfo.city || "");
  const [country, setCountry] = useState(personalInfo.country || "");
  const [linkedIn, setLinkedIn] = useState(personalInfo.linkedIn || "");

  useEffect(() => {
    updatePInfo(fullName, jobTitle, email, phone, city, country, linkedIn);

    localStorage.setItem(
      "personalInfo",
      JSON.stringify({
        fullName,
        jobTitle,
        email,
        phone,
        city,
        country,
        linkedIn,
      })
    );
  }, [fullName, jobTitle, phone, email, city, country, linkedIn, updatePInfo]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updatePInfo(fullName, jobTitle, email, phone, city, country, linkedIn);
  };

  return (
    <div className="personal-info">
      <h3>Personal Info</h3>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-row full-name">
          <label htmlFor="">Full Name</label>
          <input
            type="text"
            name="fullName"
            onChange={(e) => {
              setFullName(e.target.value);
            }}
            value={fullName}
            required
          />
        </div>
        <div className="form-row job-title">
          <label htmlFor="">Job Title</label>
          <input
            type="text"
            name="jobTitle"
            onChange={(e) => {
              setJobTitle(e.target.value);
            }}
            value={jobTitle}
            required
          />
        </div>
        <div className="form-row email">
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            required
          />
        </div>
        <div className="form-row phone">
          <label htmlFor="">Phone</label>
          <input
            type="tel"
            name="phone"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            value={phone}
            required
          />
        </div>
        <div className="form-row city">
          <label htmlFor="">City</label>
          <input
            type="text"
            name="city"
            onChange={(e) => {
              setCity(e.target.value);
            }}
            value={city}
            required
          />
        </div>
        <div className="form-row country">
          <label htmlFor="">Country</label>
          <input
            type="text"
            name="country"
            onChange={(e) => {
              setCountry(e.target.value);
            }}
            value={country}
            required
          />
        </div>
        <div className="form-row linkedIn">
          <label htmlFor="">LinkedIn</label>
          <input
            type="url"
            name="linkedIn"
            onChange={(e) => {
              setLinkedIn(e.target.value);
            }}
            value={linkedIn}
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
