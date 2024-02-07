import React, { Component } from "react";
import Fade from "react-reveal/Fade";

import ServiceSectionThree from "./ServicesSection/ServiceSectionThree";
import SponsorEight from "./SponsorsSection/SponsorEight";


export default class Text extends Component {
  render() {
    return (
      <div className="text">
        <Fade left>
          <h4 className="h4">Services</h4>
        </Fade>
        <Fade right>
          <h5 className="p">Our Core Services</h5>
        </Fade>

        <ServiceSectionThree />
          <Fade right>
       
        <h4 className="h4">Services</h4>
</Fade>
        <Fade left>
        <h5 className="p">WE WORK WITH THE BEST ALL AROUND THE WORLD</h5></Fade>
        <Fade right>
<SponsorEight/></Fade>
<Fade right>
<h4 className="h4">Focus</h4>
</Fade>
<Fade left>
<h5 className="p">We Focus On
</h5>
</Fade>

        <style jsx>{`
          .text {
            text-align: center;
            margin: 50px;
          }
          .h4 {
            font-family: var(--heading-font);
            font-size: 40px;
            font-weight: bold;
            color: #a9278f30;

            font-size: 160px;
            margin: 0px 0px -90px 0px;
          }
          .p {
            color: #9f19ab;
            margin: 0px 0px 20px 0px;
            font-family: "Merriweather", Sans-serif;
            font-size: 40px;
            font-weight: 900;
            line-height: 1.33333333em;
            letter-spacing: -0.96px;
          }
          .h4 {
            font-family: var(--heading-font);
            font-size: 40px;
            font-weight: bold;
            color: #a9278f30;

            font-size: 160px;
            margin: 0px 0px -90px 0px;
          }
        
        `}</style>
      </div>
    );
  }
}
