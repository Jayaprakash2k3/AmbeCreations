import React from "react";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="border-top border-bottom footer-center p-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
              <img
                src="../assets/images/logo-white.png"
                alt="logo"
                className="img-fluid mb-3"
              />
              <p className="mb-4">
                Ambe Creations is a premier photo customization company
                dedicated to transforming your cherished memories into
                personalized works of art.
              </p>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-sm-6 wow fadeInUp" data-wow-delay="1s">
                  <h5 className="mb-4">Important Links</h5>
                  <ul className="list-unstyled footer-link">
                    <li>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        How To Apply Skins
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        How To Find Your Model
                      </a>
                    </li>
                    <li>
                      <a
                        href="/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        href="/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Replacement & Refund Policy
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6 wow fadeInUp" data-wow-delay="0.8s">
                  <h5>Contact &amp; Support</h5>
                  <div className="row">
                    <i className="col-2 material-icons-two-tone">location_on</i>
                    <span className="px-4 d-block col">
                      Lx Mobile Accessories KRISHNA ARCADE, #5, 1ST FLOOR,
                      Veerapandiar Nagar, Salem - 636004 ( Tamilnadu )
                    </span>
                  </div>
                  <div className="row mt-3">
                    <i className="col-2 material-icons-two-tone">phone</i>
                    <span className="px-4 d-block col">
                      <a href="tel:9003577745" class="mx-1">
                        9003577745
                      </a>
                      -
                      <a href="tel:7708380655" class="ms-1">
                        7708380655
                      </a>
                    </span>
                  </div>
                  <div className="row mt-3">
                    <i className="col-2 material-icons-two-tone">email</i>
                    <span className="px-4 d-block col">
                      <a
                        _ngcontent-ng-c362155108=""
                        href="mailto:ambecreation02@gmail.com"
                      >
                        ambecreation02@gmail.com
                      </a>
                      <br />
                    Support Time 10AM To 8PM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
