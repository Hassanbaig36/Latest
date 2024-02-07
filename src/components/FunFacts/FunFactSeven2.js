import { funFactSeven2 } from "@/data/funFacts";
import React from "react";
import { Col, Row } from "react-bootstrap";
import VisibilityCountUp from "../VisibilityCountUp/VisibilityCountUp";
import Fade from 'react-reveal/Fade';
const FunFactSeven2 = () => {
  return (
    <section className="funfact-seven">
      <div className="auto-container">
  
        <Row>
          {funFactSeven2.map(({ id, count, text }) => (
            <Col key={id} md={6} lg={3}>
              <div className="funfact-seven__item">
              <cascade duration={3000}/>
                <h3 className="funfact-seven__title count-box">
                  <span className="count-text">
                    <VisibilityCountUp count={count} />
                  </span>
                </h3>
                <p className="funfact-seven__text">{text}</p>
               
              </div>
            
            </Col>
            
          ))}
        </Row>
      </div>
    </section>
  );
};

export default FunFactSeven2;
