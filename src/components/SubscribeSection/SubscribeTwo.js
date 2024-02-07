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
    <section classname="subscribe-two">
    <div classname="subscribe-two__shape" />
    <div classname="auto-container">
      <slide left="">
        <row>
          <div classname="g">
            <h3 classname="subscribe-two__title">
              Have a &nbsp;Project in mind?
            </h3>
            <a href="/portfolio" classname="about-nine__btn thm-btn__seven">
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
