"use client";
import { useState } from "react";
import styles from "./contact.module.css";
import axios from "../../utils/axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    city: "",
    profession: "",
    businessName: "",
  });

  const [submitted, setSubmitted] = useState(false); // State to track form submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const info = formData;
      console.log(formData);
      const response = await axios.post("/api/contact/", info);

      console.log(response);

      // Update state to show the "Thank you" popup
      setSubmitted(true);

      // Reset form data
      setFormData({
        name: "",
        email: "",
        number: "",
        city: "",
        profession: "",
        businessName: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle any errors that occur during form submission
    }
  };

  return (
    <div>
      <form className={styles["form-container"]} onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            placeholder="Full Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            placeholder="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Number:
          <input
            placeholder="Number"
            type="tel"
            name="number"
            value={formData.number}
            onChange={handleChange}
          />
        </label>
        <label>
          City:
          <input
            placeholder="City"
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </label>
        <label>
          Profession:
          <input
            placeholder="Profession"
            type="text"
            name="profession"
            value={formData.profession}
            onChange={handleChange}
          />
        </label>
        <label>
          Business Name:
          <input
            placeholder="Business Name"
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      {/* Conditionally render the "Thank you" popup */}
      {submitted && (
        <div className={styles["popup"]}>
          <p>Thank you for submitting the form!</p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
