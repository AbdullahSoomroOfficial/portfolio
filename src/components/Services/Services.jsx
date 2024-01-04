import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";

function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>
          <div className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive Design</p>
            </li>
            {/* <li>
              <BiCheck className="service__list-icon" />
              <p>User Interface (UI) Design</p>
            </li> */}
            <li>
              <BiCheck className="service__list-icon" />
              <p>Cross-Browser Compatibility</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Interactive User Experience</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Performance Optimization</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Animation and Transitions</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Form Validation and Error Handling</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Third-Party Integration</p>
            </li>
          </div>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>
          <div className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Scalable Architecture</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>RESTful API Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User Authentication and Authorization</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Database Design and Management</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Middleware Implementation</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Error Handling and Logging</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Security Measures</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Task Automation</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Integration with Third-Party Services</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Version Control and Deployment</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Continuous Integration/Continuous Deployment (CI/CD)</p>
            </li>
          </div>
        </article>
        {/* <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <div className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </div>
        </article> */}
      </div>
    </section>
  );
}

export default Services;
