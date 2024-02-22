import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./consultForm.css";

const cities = ["Bangalore", "Mumbai", "Kolkata", "Houston", "Phoenix"];

const ConsultForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    city: "",
    company: "",
    chiefComplaints: "",
    experienceWithPhysiotherapy: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    const newValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can add your form submission logic here
    console.log(formData);
  };

  return (
    <div className="dark-theme">
      <Container>
        <div className="form-container">
          <h2>Book an Appointment for FREE</h2>
          <form onSubmit={handleSubmit}>
            <div className="form">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>City</label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                >
                  <option value="">Select City</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Chief Complaints</label>
                <textarea
                  name="chiefComplaints"
                  value={formData.chiefComplaints}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="switch-rounded">
                  Any previous experience with physiotherapy
                </label>
                <section>
                  <div className="switch">
                    <input
                      id="switch-rounded"
                      type="checkbox"
                      name="experienceWithPhysiotherapy"
                      checked={formData.experienceWithPhysiotherapy}
                      onChange={handleChange}
                    />
                    <label htmlFor="switch-rounded" />
                  </div>
                </section>
                {formData.experienceWithPhysiotherapy ? (
                  <label>Yes</label>
                ) : (
                  <label>No</label>
                )}
              </div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default ConsultForm;
