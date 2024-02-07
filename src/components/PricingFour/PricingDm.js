import React from 'react'

const PricingDm = () => {
  return (
    <>
    <style jsx>{`
      @charset "UTF-8";

      .pricingTable {
        margin: 40px auto;
      }
      .pricingTable > .pricingTable-title {
        text-align: center;
        color: #000000;
        font-size: 3em;
        font-size: 300%;
        margin-bottom: 20px;
        letter-spacing: 0.04em;
      }
      .pricingTable > .pricingTable-subtitle {
        text-align: center;
        color: #00000;
        font-size: 1.8em;
        letter-spacing: 0.04em;
        margin-bottom: 60px;
      }
      @media screen and (max-width: 480px) {
        .pricingTable > .pricingTable-subtitle {
          margin-bottom: 30px;
        }
      }
      .pricingTable-firstTable {
        list-style: none;
        padding-left: 2em;
        padding-right: 2em;
        text-align: center;
      }
      .pricingTable-firstTable_table {
        vertical-align: middle;
        width: 31%;
        background-color: #ffffff;
        display: inline-block;
        padding: 0px 30px 40px;
        text-align: center;
        max-width: 320px;
        transition: all 0.3s ease;
        border-radius: 5px;
      }
      @media screen and (max-width: 767px) {
        .pricingTable-firstTable_table {
          display: block;
          width: 90%;
          margin: 0 auto;
          max-width: 90%;
          margin-bottom: 20px;
          padding: 10px;
          padding-left: 20px;
        }
      }
      @media screen and (max-width: 767px) {
        .pricingTable-firstTable_table > * {
          display: inline-block;
          vertical-align: middle;
        }
      }
      @media screen and (max-width: 480px) {
        .pricingTable-firstTable_table > * {
          display: block;
          float: none;
        }
      }
      @media screen and (max-width: 767px) {
        .pricingTable-firstTable_table:after {
          display: table;
          content: "";
          clear: both;
        }
      }
      .pricingTable-firstTable_table:hover {
        transform: scale(1.08);
      }
      @media screen and (max-width: 767px) {
        .pricingTable-firstTable_table:hover {
          transform: none;
        }
      }
      .pricingTable-firstTable_table:not(:last-of-type) {
        margin-right: 3.5%;
      }
      @media screen and (max-width: 767px) {
        .pricingTable-firstTable_table:not(:last-of-type) {
          margin-right: auto;
        }
      }
      .pricingTable-firstTable_table:nth-of-type(2) {
        position: relative;
      }
      @media screen and (max-width: 767px) {
        .pricingTable-firstTable_table:nth-of-type(2) h1 {
          padding-top: 8%;
        }
      }
      .pricingTable-firstTable_table:nth-of-type(2):before {
        content: "Most Popular";
        position: absolute;
        color: white;
        display: block;
        background-color: #3bbdee;
        text-align: center;
        right: 15px;
        top: -25px;
        height: 65px;
        width: 65px;
        border-radius: 50%;
        box-sizing: border-box;
        font-size: 0.5em;
        padding-top: 22px;
        text-transform: uppercase;
        letter-spacing: 0.13em;
        transition: all 0.5s ease;
      }
      @media screen and (max-width: 988px) {
        .pricingTable-firstTable_table:nth-of-type(2):before {
          font-size: 0.6em;
        }
      }
      @media screen and (max-width: 767px) {
        .pricingTable-firstTable_table:nth-of-type(2):before {
          left: 10px;
          width: 45px;
          height: 45px;
          top: -10px;
          padding-top: 13px;
        }
      }
      @media screen and (max-width: 480px) {
        .pricingTable-firstTable_table:nth-of-type(2):before {
          font-size: 0.8em;
        }
      }
      .pricingTable-firstTable_table:nth-of-type(2):hover:before {
        transform: rotate(360deg);
      }
      .pricingTable-firstTable_table__header {
        font-size: 1.6em;
        padding: 40px 0px;
        border-bottom: 2px solid #ebedec;
        letter-spacing: 0.03em;
      }
      @media screen and (max-width: 1068px) {
        .pricingTable-firstTable_table__header {
          font-size: 1.45em;
        }
      }
      @media screen and (max-width: 767px) {
        .pricingTable-firstTable_table__header {
          padding: 0px;
          border-bottom: none;
          float: left;
          width: 33%;
          padding-top: 3%;
          padding-bottom: 2%;
        }
      }
      @media screen and (max-width: 610px) {
        .pricingTable-firstTable_table__header {
          font-size: 1.3em;
        }
      }
      @media screen and (max-width: 480px) {
        .pricingTable-firstTable_table__header {
          float: none;
          width: 100%;
          font-size: 1.8em;
          margin-bottom: 5px;
        }
      }
      .pricingTable-firstTable_table__pricing {
        font-size: 3em;
        padding: 30px 0px;
        color: black;
        border-bottom: 2px solid #ebedec;
        line-height: 0.7;
      }
      @media screen and (max-width: 1068px) {
        .pricingTable-firstTable_table__pricing {
          font-size: 2.8em;
        }
      }
      @media screen and (max-width: 767px) {
        .pricingTable-firstTable_table__pricing {
          border-bottom: none;
          padding: 0;
          float: left;
          clear: left;
          width: 33%;
        }
      }
      @media screen and (max-width: 610px) {
        .pricingTable-firstTable_table__pricing {
          font-size: 2.4em;
        }
      }
      @media screen and (max-width: 480px) {
        .pricingTable-firstTable_table__pricing {
          float: none;
          width: 100%;
          font-size: 3em;
          margin-bottom: 10px;
        }
      }
      .pricingTable-firstTable_table__pricing span:first-of-type {
        font-size: 0.35em;
        vertical-align: top;
        color: black;
        letter-spacing: 0.15em;
      }
      @media screen and (max-width: 1068px) {
        .pricingTable-firstTable_table__pricing span:first-of-type {
          font-size: 0.3em;
        }
      }
      .pricingTable-firstTable_table__pricing span:last-of-type {
        vertical-align: bottom;
        font-size: 0.3em;
        letter-spacing: 0.04em;
        padding-left: 0.2em;
      }
      @media screen and (max-width: 1068px) {
        .pricingTable-firstTable_table__pricing span:last-of-type {
          font-size: 0.25em;
        }
      }
      .pricingTable-firstTable_table__options {
        list-style: none;
        padding: 15px;
        color: black;
        font-size: 0.9em;
        border-bottom: 2px solid #ebedec;
      }
      @media screen and (max-width: 1068px) {
        .pricingTable-firstTable_table__options {
          font-size: 0.85em;
        }
      }
      @media screen and (max-width: 767px) {
        .pricingTable-firstTable_table__options {
          border-bottom: none;
          padding: 0;
          margin-right: 10%;
        }
      }
      @media screen and (max-width: 610px) {
        .pricingTable-firstTable_table__options {
          font-size: 0.7em;
          margin-right: 8%;
        }
      }
      @media screen and (max-width: 480px) {
        .pricingTable-firstTable_table__options {
          font-size: 1.3em;
          margin-right: none;
          margin-bottom: 10px;
        }
      }
      .pricingTable-firstTable_table__options > li {
        padding: 8px 0px;
      }
      @media screen and (max-width: 767px) {
        .pricingTable-firstTable_table__options > li {
          text-align: left;
        }
      }
      @media screen and (max-width: 610px) {
        .pricingTable-firstTable_table__options > li {
          padding: 5px 0;
        }
      }
      @media screen and (max-width: 480px) {
        .pricingTable-firstTable_table__options > li {
          text-align: center;
        }
      }
      .pricingTable-firstTable_table__options > li:before {
        content: "✓";
        display: inline-flex;
        margin-right: 15px;
        color: white;
        background-color: #000000;
        border-radius: 50%;
        width: 15px;
        height: 15px;
        font-size: 0.8em;
        padding: 2px;
        align-items: center;
        justify-content: center;
      }
      @media screen and (max-width: 1068px) {
        .pricingTable-firstTable_table__options > li:before {
          width: 14px;
          height: 14px;
          padding: 1.5px;
        }
      }
      @media screen and (max-width: 767px) {
        .pricingTable-firstTable_table__options > li:before {
          width: 12px;
          height: 12px;
        }
      }
      .pricingTable-firstTable_table__getstart {
        color: white;
        border: 0;
        background-color: #71ce73;
        margin-top: 30px;
        border-radius: 5px;
        cursor: pointer;
        padding: 15px;
        box-shadow: 0px 3px 0px 0px #66ac64;
        letter-spacing: 0.07em;
        transition: all 0.4s ease;
      }
      @media screen and (max-width: 1068px) {
        .pricingTable-firstTable_table__getstart {
          font-size: 0.95em;
        }
      }
      @media screen and (max-width: 767px) {
        .pricingTable-firstTable_table__getstart {
          margin-top: 0;
        }
      }
      @media screen and (max-width: 610px) {
        .pricingTable-firstTable_table__getstart {
          font-size: 0.9em;
          padding: 10px;
        }
      }
      @media screen and (max-width: 480px) {
        .pricingTable-firstTable_table__getstart {
          font-size: 1em;
          width: 50%;
          margin: 10px auto;
        }
      }
      .pricingTable-firstTable_table__getstart:hover {
        transform: translateY(-10px);
        box-shadow: 0px 40px 29px -19px rgba(102, 172, 100, 0.9);
      }
      @media screen and (max-width: 767px) {
        .pricingTable-firstTable_table__getstart:hover {
          transform: none;
          box-shadow: none;
        }
      }
      .pricingTable-firstTable_table__getstart:active {
        box-shadow: inset 0 0 10px 1px #66a564,
          0px 40px 29px -19px rgba(102, 172, 100, 0.95);
        transform: scale(0.95) translateY(-9px);
      }
      @media screen and (max-width: 767px) {
        .pricingTable-firstTable_table__getstart:active {
          transform: scale(0.95) translateY(0);
          box-shadow: none;
        }
      }

      body {
        font-family: "Montserrat", sans-serif;
        font-size: 100%;
        background-color: #f0f4f7;
        color: #717787;
      }
      @media screen and (max-width: 960px) {
        body {
          font-size: 80%;
        }
      }
      @media screen and (max-width: 776px) {
        body {
          font-size: 70%;
        }
      }
      @media screen and (max-width: 496px) {
        body {
          font-size: 50%;
        }
      }
      @media screen and (max-width: 320px) {
        body {
          font-size: 40%;
        }
      }

      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }
      li{
        text-align: left;
      }
      .selector{
        max-height: 300px;
        overflow-x: hidden;
        overflow-y: scroll;
        display: flex;
        flex-direction: column
        
    }
    
   .selector::-webkit-scrollbar{
    width: 14px;
    }
    
    .selector::-webkit-scrollbar-track{
    background: rgba(0, 0, 0, 0.1);
    }
    
   .selector::-webkit-scrollbar-thumb{
    background: rgba(0, 0, 0, 0.31);
    }
    
    `}</style>

    <div className="pricingTable">
      <h2 className="pricingTable-title">
      Digital Marketing Packages </h2>
      <h5 className="pricingTable-subtitle">
      Our tactics have been meticulously crafted to maximise profitability for you at a low cost.</h5>

      <ul className="pricingTable-firstTable">
        <li className="pricingTable-firstTable_table">
          <h1 className="pricingTable-firstTable_table__header">
            Bronze Packege
          </h1>
          <p className="pricingTable-firstTable_table__pricing">
            <span>$</span>
            <span>699.99</span>
            <span>/999</span>
          </p>
          <ul className="pricingTable-firstTable_table__options selector">
          <li>On-page optimization of landing page</li>
<li>Keyword optimization of ad-campaigns and ad text Competitor analysis</li>
<li>Competitor analysis Initial campaign development & strategy</li>
<li>PPC account setting monitoring</li>
<li>Up to 1000 keywords in campaign</li>
<li>Advanced keyword research and selection</li>
<li>Keyword development and tweaking</li>
<li>Google PPC network</li>
<li>Bing PPC network</li>
<li>1 landing page designing and development</li>
<li>Google display network Google text ad remarketing and banner retargeting</li>
<li>1 banner ad design for display & remarketing</li>
<li>1 ad campaign copywriting</li>
<li>1 ad copy performance testing Google analytics integration & goal tracking</li>
<li>Results analysis/reporting</li>
<li>Strategy bid management</li>
<li>Ppc account setting monitoring Up to 100 web leads per month</li>
<li>*dependent on industry & client budget</li>
<li>Upto 25 web leads phone calls per month *dependent on industry & client budget</li>
<li>Monitoring clicks, conversions and click fraud activity</li>
<li>Website conversions tracking Social media marketing</li>
<li>Custom landing built for social media conversion Facebook page creation & optimization</li>
<li>1 month marketing on Facebook and Instagram</li>
<li>1 ad for lead for lead generation</li>
<li>1 ad for traffic generation</li>
<li>Daily lead reports</li>
<li>Weekly/monthly stats</li>
<li>1 account manager</li>
          </ul>
          <button className="pricingTable-firstTable_table__getstart">
            Book Now
          </button>
        </li>
        <li className="pricingTable-firstTable_table">
          <h1 className="pricingTable-firstTable_table__header">
           Silver Package

          </h1>
          <p className="pricingTable-firstTable_table__pricing">
            <span>$</span>
            <span>1,099.99</span>
            <span>/2,199</span>
          </p>
          <span>2 payment instalments

</span>
          <ul className="pricingTable-firstTable_table__options selector">
          <li>On-page optimization of all landing page</li>
<li>Keyword optimization of ad-campaigns and ad text</li>
<li>Competitor analysis Initial campaign development & strategy</li>
<li>PPC account setting monitoring</li>
<li>Up to 2000 keywords in campaign Advanced keyword research and selection</li>
<li>Keyword development and tweaking</li>
<li>Google PPC network</li>
<li>Bing PPC network</li>
<li>3 landing page designing and development per month</li>
<li>Google text ad remarketing and banner retargeting</li>
<li>Google display network</li>
<li>3 banner ad design for display & remarketing</li>
<li>3 ad campaign copywriting</li>
<li>3 ad copy performance testing</li>
<li>AB testing per ad campaign Google analytics integration & goal tracking</li>
<li>Results analysis/reporting</li>
<li>Strategy bid management</li>
<li>Ppc account setting monitoring Up to 200 online leads a month are possible, depending on the industry and the client's budget.</li>
<li>Up to 45 phone calls per month from web leads, depending on industry and client budget.</li>
<li>Monitoring clicks, conversions and click fraud activity</li>
<li>Website conversions tracking Custom landing built for social media conversion</li>
<li>Facebook page creation & optimization</li>
<li>3 month marketing on Facebook and Instagram</li>
<li>3 ads for lead for lead generation</li>
<li>3 ads for traffic generation</li>
<li>Daily lead reports</li>
<li>Weekly/monthly stats 2 event based campaign on PPC, display, social media & email</li>
<li>2 emails monthly Designing and template development</li>
<li>Daily email lead report</li>
<li>Weekly/monthly stats</li>
<li>2 account manager</li>

          </ul>
          <button className="pricingTable-firstTable_table__getstart">
          Book Now
          </button>
        </li>
        <li className="pricingTable-firstTable_table">
          <h1 className="pricingTable-firstTable_table__header">
            Gold Package

          </h1>
          <p className="pricingTable-firstTable_table__pricing">
            <span>$</span>
            <span>2,999.99</span>
            <span>/2,999</span>
          </p>
          <span>3 payment instalments

</span>
          <ul className="pricingTable-firstTable_table__options selector">
         
          <li>On-page optimization of all landing page</li>
<li>eyword optimization of ad-campaigns and ad text</li>
<li>Article submission with back linking to website</li>
<li>Website on-page optimization</li>
<li>Competitor analysis Initial campaign development & strategy</li>
<li>PPC account setting monitoring</li>
<li>Up to 3000 keywords in campaign Advanced keyword research and selection</li>
<li>Keyword development and tweaking</li>
<li>Google PPC network</li>
<li>Bing PPC network 5 landing page designing and development per month</li>
<li>Google display network Google text ad remarketing and banner retargeting</li>
<li>5 banner ad design for display & remarketing</li>
<li>5 ad campaign copywriting</li>
<li>5 ad copy performance testing</li>
<li>AB testing per ad campaign Google analytics integration & goal tracking</li>
<li>Results analysis/reporting</li>
<li>Strategy bid management</li>
<li>Ppc account setting monitoring Up to 400 web leads per month</li>
<li>dependent on industry & client budget</li>
<li>Upto 65 web leads phone calls per month *dependent on industry & client budget</li>
<li>Monitoring clicks, conversions and click fraud activity</li>
<li>Website conversions tracking</li>
<li>Custom landing built for social media conversion</li>
<li>Facebook page creation & optimization</li>
<li>1 month marketing on Facebook and Instagram</li>
<li>5 ads for lead for lead generation</li>
<li>5 ads for traffic generation</li>
<li>Daily lead reports</li>
<li>Weekly/monthly stats</li>
<li>3 event based campaign on PPC, display, social media & email</li>
<li>4 emails monthly</li>
<li>Designing and template development</li>
<li>Daily email lead report</li>
<li>Weekly/monthly stats</li>
<li>3 account manager</li>
                          </ul>
         
          <button className="pricingTable-firstTable_table__getstart">
          Book Now
          </button>
        </li>
      </ul>
    </div>
  </>
  )
}

export default PricingDm