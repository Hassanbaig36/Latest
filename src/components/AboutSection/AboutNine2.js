import { aboutNine2 } from "@/data/aboutSection";
import React, { Fragment } from "react";
import { Col, Image, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
const { image, icon, title, titleHighlight, text, lists } = aboutNine2;

const AboutNine2 = () => {
  return (
    <section className="about-nine">
      <div className="auto-container">
        <Row>
          <Col lg={6} className="animated fadeInLeft">
            <div className="about-nine__image">
              <Image src={image.src} alt="" className="about9" />
            </div>
          </Col>
          <Col lg={6}>
            <Fade right big>
              <div className="about-nine__content">
                <div className="about-nine__icon">
                  <i className={icon}></i>
                </div>
                <h3 className="about-nine__title2">
                  {title.split(" ").map((t, i) => (
                    <Fragment key={i}>
                      {t === titleHighlight ? <span>{t}</span> : t}{" "}
                    </Fragment>
                  ))}
                </h3>
                <p className="about-nine__summery">{text}</p>
                <ul className="list-unstyled about-nine__list2">
                  {lists.map((text, i) => (
                    <li key={i}>{text}</li>
                  ))}
                </ul>
                <a href="/portfolio" className="about-nine__btn thm-btn__seven">
                  View Work
                </a>
                <a href="/contact" className="about-nine__btn thm-btn__seven">
                  Request A Qoute
                </a>
              </div>
            </Fade>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AboutNine2;
