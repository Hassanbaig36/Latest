import { contactSection } from "@/data/contactSection";
import useActive from "@/hooks/useActive";
import dynamic from "next/dynamic";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal/Fade';

const MapBox = dynamic(() => import("../MapSection/MapBox"));
const FormBox = dynamic(() => import("./FormBox"));

const { title, contacts, inputs } = contactSection;

const ContactSection = ({ className = "", map = false, form = false }) => {
  const ref = useActive("#contact");

  return (
    <section ref={ref} className={`contact-section ${className}`} id="contact">
      <div className="auto-container">
      <Roll top cascade>  
        <div className="sec-title centered">
         <h3>
             {title} <span className="dot">.</span>
          </h3>
        </div>
        </Roll>
        <div className="upper-info">
          <Row className="clearfix">
            {contacts.map(({ id, icon, name, address, email }) => (
              <Col
                key={id}
                xl={6}
                lg={6}
                md={6}
                sm={6}
                className="info-block animated fadeInUp"
              >
                <div className="inner-box">
                <i className={icon}></i>
                <Roll top cascade delay={400}>          <h5>{name}</h5></Roll>
                  <div className="text">
                  <Fade left delay={1000}>
                    <ul className="info">
                      <li>{address}</li>
                      <li>
                       {email}
                      </li>
                     
                  
                    </ul>
                    </Fade>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        {map && <MapBox />}
        {form && <FormBox inputs={inputs} />}
      </div>
    </section>
  );
};

export default ContactSection;
