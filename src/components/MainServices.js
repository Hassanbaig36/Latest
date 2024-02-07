import React from "react";

import ServicesBox from "./ServicesBox";
import ServicesBox1 from "./ServicesBox1";
import ServicesBox2 from "./ServicesBox2";
import ServicesBox4 from "./ServicesBox4";

const MainServices = () => {
  return (
    <>
      <div className="mainServices">
        <ServicesBox />
        <ServicesBox1 />
        <ServicesBox2 />
        <ServicesBox4/>
      </div>
      <style jsx>{`
        .mainServices {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
          flex-direction: row;
       
  
        }

        /* Responsive layout - makes a one column-layout instead of two-column layout */
        @media (max-width: 800px) {
          .mainServices {
            display: flex;
            justify-content: center;
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
};

export default MainServices;
