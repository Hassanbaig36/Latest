// ServicesBox4.jsx
import React, { useEffect, useRef } from "react";
import Script from "next/script";
import Fade from "react-reveal/Fade";
const ServicesBox4 = () => {
    const circleRef = useRef(null);
    useEffect(() => {
      const loadCircleProgress = () => {
        if (typeof window.$ !== "undefined" && $.fn.circleProgress) {
          let options = {
            startAngle: -1.55,
            size: 150,
            value: 1.99,
            fill: { gradient: ["#a445b2", "#fa4299"] },
            animation: { duration: 3000 },
          };
  
          // Intersection Observer options
          const optionsObserver = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5, // Adjust the threshold as needed
          };
  
          const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                // Add a delay of 1000 milliseconds (1 second)
                setTimeout(() => {
                  $(circleRef.current)
                    .circleProgress(options)
                    .on(
                      "circle-animation-progress",
                      function (_event, _progress, stepValue) {
                      
                        $(this)
                          .parent()
                          .find("span")
                          .text(String(stepValue.toFixed(2).substr(2)) + "%");
                      }
                    )
                    .on("circle-animation-start", function () {
                      // Additional code to run when animation starts
                      console.log("Animation started");
                    });
                }, 1000); // Adjust the delay time as needed
  
                // Stop observing after the animation is triggered
                observer.unobserve(circleRef.current);
              }
            });
          }, optionsObserver);
  
          // Start observing the circle element
          observer.observe(circleRef.current);
  
          // Additional configurations for other circles
        } else {
          // If circle-progress is not available, wait and try again
          setTimeout(loadCircleProgress, 900);
        }
      };
  
      loadCircleProgress();
    }, []); // Empty dependency array ensures that this effect runs once, similar to componentDidMount
  
    return (
      <>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"
          strategy="worker"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery-circle-progress/1.2.2/circle-progress.min.js"
          strategy="beforeInteractive"
        />
  
        <div className="wrapper">
        <Fade right>
          <div className="card">
            <div className="circle" ref={circleRef}>
              <div className="bar" />
              <div className="box">
                <img src="images/icon4.png" className="icon" alt=""/>
                <span />
              </div>
            </div>
            <div className="text">AUGMENTATION</div>
            <p className="servicesp">
            Empower your workforce with essential technical prowess and expertise required for expediting development and constructing superior digital products.
          </p>
          </div>
  </Fade>
          <style jsx>{`
            @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              font-family: "Poppins", sans-serif;
            }
            body {
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
              padding: 20px;
              background: -webkit-linear-gradient(left, #a445b2, #fa4299);
            }
            .wrapper {
             
              display: flex;
              flex-wrap: wrap;
              align-items: center;
              justify-content: space-between;
            }
            .wrapper .card {
              background: #fff;
              width: 400px;
              height: 400px;
              border-radius: 5px;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
              margin: 20px 0 20px 0;
            }
            .card .circle .box {
              height: 100%;
              width: 100%;
              border-radius: 50%;
              transform: translate(-50%, -50%);
            }
            
            .wrapper .card .circle {
              position: relative;
              height: 150px;
              width: 150px;
              border-radius: 50%;
              cursor: default;
            }
            .card .circle .box,
            .card .circle .box span {
              position: absolute;
              top: 50%;
              left: 50%;
            }
            .card .circle .box {
              height: 100%;
              width: 100%;
  
              border-radius: 50%;
              transform: translate(-50%, -50%) scale(0.8);
              transition: all 0.1s;
            }
            .card .circle:hover .box {
              transform: translate(-50%, -50%) scale(0.91);
            }
            .card .circle .box span,
            .wrapper .card .text {
              background: -webkit-linear-gradient(left, #a445b2, #fa4299);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
            .circle .box span {
              font-size: 38px;
              font-family: sans-serif;
              font-weight: 600;
              transform: translate(-45%, -45%);
              transition: all 0.1s;
            }
            .card .circle:hover .box span {
              transform: translate(-45%, -45%) scale(1.09);
            }
            .card .text {
              font-size: 20px;
              font-weight: 600;
            }
            span {
              display: none;
            }
             .servicesp{
          text-align: center;
    font-size: 16px;
    margin: 10px 15px 10px 15px;
}
.icon{
  width: 100px;
  height: 100px;
  display: block;
  margin: 24px auto 0 auto;

}
            @media (max-width: 800px) {
              .wrapper {
                display: flex;
               flex-wrap: wrap;
               align-items: center;
               justify-content: center!important;
             }
              .wrapper .card {
                background: #fff;
                width:400px;
                height: 400px;
                border-radius: 5px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
                margin: 20px auto 20px auto;
              }

            }
          `}</style>
        </div>
      </>
    );
  };
export default ServicesBox4;
