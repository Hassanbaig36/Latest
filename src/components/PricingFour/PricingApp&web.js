import React from 'react'

const PricingAppWeb = () => {
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
      App & Web Packages



      </h2>
      <h5 className="pricingTable-subtitle">
      Our tactics have been meticulously crafted to maximise profitability for you at a low cost.




      </h5>

      <ul className="pricingTable-firstTable">
        <li className="pricingTable-firstTable_table">
          <h1 className="pricingTable-firstTable_table__header">
            Bronze Packege
          </h1>
          <p className="pricingTable-firstTable_table__pricing">
            <span>$</span>
            <span>2499.99</span>
            <span>/3499</span>
          </p>
          <ul className="pricingTable-firstTable_table__options selector">
          <li>5 to 20 Pages Website Custom Made, Interactive,</li>
<li>Dynamic & High End Design Custom WP (or) Custom PHP Development</li>
<li>1 jQuery Slider Banner</li>
<li>Up to 10 Custom Made Banner Designs</li>
<li>10 Stock Images</li>
<li>Unlimited Revisions</li>
<li>Special Hoover Effects Content Management System (CMS)</li>
<li>Online Appointment/Scheduling/Online Ordering Integration (Optional)</li>
<li>Online Payment Integration (Optional)</li>
<li>Multi Lingual (Optional)</li>
<li>Custom Dynamic Forms (Optional)</li>
<li>Signup Area (For Newsletters, Offers etc.)</li>
<li>Search Bar</li>
<li>Live Feeds of Social Networks integration (Optional)</li>
<li>Mobile Responsive</li>
<li>15 Seconds 2D Explainer Video</li>
<li>Voice - Over & Sound Effects</li>
<li>Professional Script Writing</li>
<li>Storyboard</li>
<li>SEO Meta Tags</li>
<li>FREE 5 Years Domain Name</li>
<li>Free Google Friendly Sitemap</li>
<li>Search Engine Submission</li>
<li>omplete W3C Certified HTML</li>
<li>Industry Specified Team of Expert Designers and Developers</li>
<li>Complete Deployment</li>
<li>Dedicated Accounts Manager</li>
<li>100% Ownership Rights</li>
<li>100% Satisfaction Guarantee</li>
<li>100% Unique Design Guarantee</li>
<li>100% Money Back Guarantee</li>

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
            <span>3999.99</span>
            <span>/6999</span>
          </p>
          <span>2 payment instalments</span>
          <ul className="pricingTable-firstTable_table__options selector">
          <li>Unlimited Page Website</li>
<li>Custom Content Management System (CMS)</li>
<li>Unique Pages and UI Design</li>
<li>Complete Custom Development</li>
<li>Process Automation Tools</li>
<li>Newsfeed Integration</li>
<li>Social Media Plugins Integration</li>
<li>Upto 40 Stock images</li>
<li>10 Unique Banner Designs</li>
<li>JQuery Slider</li>
<li>Search Engine Submission</li>
<li>Free Google Friendly Sitemap</li>
<li>FREE 5 Years Hosting</li>
<li>Custom Email Addresses</li>
<li>Social Media Page Designs (Facebook, Twitter, Instagram)</li>
<li>Complete W3C Certified HTML</li>
<li>Complete Deployment</li>
<li>100% Satisfaction Guarantee</li>
<li>100% Unique Design Guarantee</li>
<li>Money Back Guarantee</li>
<li>Automated Course Creation</li>
<li>Video Conferencing</li>
<li>Skills/Certification Tracking</li>
<li>Mobile Learning</li>
<li>Asynchronous Learning</li>
<li>CRM Features</li>
<li>Gamification</li>
<li>Social Learning/Message Boards</li>
<li>Motivational Triggers</li>
<li>Forums And Webinars</li>
<li>E-commerce And Subscriptions</li>
<li>Online Course Booking</li>
<li>Excellent Reporting</li>
<li>Invoicing Integration</li>
<li>Financial Integrations</li>
<li>Student Information management</li>
<li>Automated communications</li>
<li>Learning Management System</li>
<li>Quick And Easy Course Scheduling</li>
<li>Reporting And Data Analysis</li>
<li>Assessment Management & Live Feedback</li>
<li>Gradebooks</li>
<li>Quick User Integration</li>
<li>Easy Payment Methods</li>
<li>Online Communities & Social Engagement</li>
<li>Curation of Resources And Adding Own Resources</li>


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
            <span>6,499.99</span>
            <span>/10499</span>
          </p>
          <span>3 payment instalments</span>
          <ul className="pricingTable-firstTable_table__options selector">
          <li>Unlimited Page Website</li>
<li>Custom Content Management System (CMS)</li>
<li>Unique Pages and UI Design</li>
<li>Complete Custom Development</li>
<li>Process Automation Tools</li>
<li>Newsfeed Integration</li>
<li>Social Media Plugins Integration</li>
<li>Upto 40 Stock images</li>
<li>10 Unique Banner Designs</li>
<li>JQuery Slider</li>
<li>Search Engine Submission</li>
<li>Free Google Friendly Sitemap</li>
<li>FREE 5 Years Hosting</li>
<li>Custom Email Addresses</li>
<li>Social Media Page Designs (Facebook, Twitter, Instagram)</li>
<li>Complete W3C Certified HTML</li>
<li>Complete Deployment</li>
<li>100% Satisfaction Guarantee</li>
<li>100% Unique Design Guarantee</li>
<li>Money Back Guarantee</li>
<li>Suppliers Integration (API NEEDED)</li>
<li>Shipper Integration (API NEEDED)</li>
<li>Order management</li>
<li>LOT numbers and expire date tracking</li>
<li>Transfer stock between warehouses (If Warehouse - API NEEDED)</li>
<li>Receive stock into a specific warehouse (If Warehouse - API NEEDED)</li>
<li>Fulfill orders from a particular warehouse (If Warehouse - API NEEDED)</li>
<li>Stock Management</li>
<li>Actionable Insights</li>
<li>Real-Time Visibility</li>
<li>Inventory Opportunities</li>
<li>Speak to suppliers during trivial conversations.</li>
<li>Set and send actions to suppliers regarding governance and compliance materials. Place purchasing requests.</li>
<li>Research and answer internal questions regarding procurement functionalities or a supplier/supplier set.</li>
<li>Receiving/filing/documentation of invoices and payments/order requests</li>
<li>Machine Learning (ML) for Supply Chain Planning (SCP)</li>
<li>Machine Learning for Warehouse Management</li>
<li>Natural Language Processing (NLP) for Data Cleansing and Building Data Robustness</li>
<li>Create beautiful, professional invoices & estimates in just a few seconds and then instantly email them as PDF's directly to your customers or prospects.</li>
<li>Automated Split invoicing</li>
<li>Automated Combine invoices</li>
<li>Invoice templates</li>
<li>Scan inventory into your orders, generate barcodes for your documents, and search for inventory or documents by scanning barcodes.</li>
<li>Performance and analytics</li>
<li>Customization of Personal Details</li>
<li>Process management</li>
<li>Sales Automation</li>
<li>Team Collaboration</li>
<li>Marketing Automation</li>
<li>Security</li>
<li>Integrations</li>
<li>Mobile Notifications</li>
<li>Sales Reports</li>
<li>Trend Analytics</li>
<li>Forecasting</li>
<li>Territory Management</li>
<li>Account Management</li>
<li>Event Integration</li>
<li>Advanced Data Security</li>
<li>With integrated purchase orders, you can easily replenish your inventory levels by ordering more stock and even track when those new items will arrive.</li>
<li>Partial orders fulfil</li>
<li>Backordering</li>
<li>Generate extremely detailed reports for your inventory, sales and services. Filter your reports by date-range and category to see what's making you the most money.</li>
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

export default PricingAppWeb