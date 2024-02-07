import React from "react";
import { Col, Row } from "react-bootstrap";
import Slide from 'react-reveal/Slide';
const SubscribeTwo = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("email"));
  };

  return (
    <section className="subscribe-two">
    <div className="subscribe-two__shape" />
    <div className="auto-container">
      <slide left="">
        <row>
          <div className="g">
            <h3 className="subscribe-two__title">
              Have a &nbsp;Project in mind?
            </h3>
            <a href="/portfolio" className="about-nine__btn thm-btn__seven">
              Let's discuss
            </a>
          </div>
        </row>
      </slide>
    </div>
  </section>
  
  );
};

export default SubscribeTwo;
