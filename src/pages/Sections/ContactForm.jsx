import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: null,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://ambecreation.com/backend/api/contact-us",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer null",
          },
          body: JSON.stringify({
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            contact_no: formData.phoneNumber,
            message: formData.message,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // Show success toast
        MySwal.fire({
          toast: true,
          icon: "success",
          title: "Form submitted successfully",
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          backdrop: false,
        });

        // Optionally reset the form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error(error);
      // Show error toast
      MySwal.fire({
        toast: true,
        icon: "error",
        title: "Form submission failed",
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        backdrop: false,
        timerProgressBar: true,
      });
    }
  };

  return (
    <section className="contact-form">
      <h3 className="text-center">Contact Form</h3>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className="sr-only">Contact Form</h2>
          </div>
          <div className="col-xxl-6 col-md-8 col-sm-10">
            <form onSubmit={handleSubmit}>
              <div className="row my-4">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="form-label">First name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="form-label">Last name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label className="form-label">Email id</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email id"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Phone Number"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="mt-4 d-grid">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
