import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Sections/Footer";
function About() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact");
  }
  const coverImage =
    "../assets/images/banner.png";
  const profileImage =
    "https://yt3.googleusercontent.com/w-6o5u9r3V7EBdpGc18HdHPfc-1feDyZLQq-4qzx1TKku9on4IQF0zm-s-PyGF_1Ex75N5-B6A=s160-c-k-c0x00ffffff-no-rj";
  return (
    <div>
      <div className="card social-profile">
        <img src={coverImage} alt="Cover" className="w-100  card-img-top" />
        <div className="card-body pt-0">
          <div className="row align-items-end">
            <div className="col-md-auto text-md-start">
              <img
                className="img-fluid img-profile-avtar border border-2 border-dark"
                src={profileImage}
                alt="User"
              />
            </div>
            <div className="col">
              <div className="row justify-content-between align-items-end">
                <div className="col-md-auto soc-profile-data">
                  <h5 className="mb-1"> Ambe Creations</h5>
                  <p className="mb-0">Customized Designer</p>
                </div>
                <div className="col-md-auto">
                  <button onClick={handleClick} className="btn btn-primary me-1">Contact Us</button>
                </div>
              </div>
            </div>
          </div>
          <p className="m-4">
            Ambe Creations is your one-stop destination for personalized and
            unique gifts that capture cherished moments. We specialize in
            transforming your favorite photos into stunning keepsakes that will
            be treasured for years to come. From custom mobile skins and back
            covers that add a touch of personality to your device, to
            eye-catching laptop skins that reflect your style, we offer a wide
            range of customization options to suit your taste. Our commitment
            lies in delivering high-quality products and exceptional customer
            service. Let us help you create personalized gifts that leave a
            lasting impression.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
