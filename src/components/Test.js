import React, { Component } from 'react'
import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal/Fade';
export default class Test extends Component {
  render() {
    return (
      <>
        <div className="text">
        <Fade left>
          <h4 className="h4">About</h4>
        </Fade>
        <Fade right>
          <h5 className="p">
At Majetics Solutions</h5>
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
      margin: 0px 0px -80px 0px;
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
      
    `}</style>
    
      </div>
</>
    )
  }
}
