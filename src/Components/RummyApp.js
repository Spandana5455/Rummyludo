import React from 'react'
import './RummyApp.css';
import img from '../images/logo1.png'
 

export default function RummyApp() {
   
  return (

    <>
      <div className="container  py-5">
        <div className="row align-items-center contianer" >
          {/* Image on the Left */}
          <div className="col-md-4 col-sm-12">
            <div className="image-container">
              <img src={img} alt="Rummy Game" className="img-fluid  animate-bounce" />
            </div>
          </div>
          {/* Content on the Right */}
          <div className="col-md-8 col-sm-12">
            <h1 className="fw-bold animate-fade-in">Rummy App</h1>
            <h3 className="h4 mt-4 animate-slide-up">Download Rummy Game App ?</h3>
            <p className="lead text-muted animate-slide-in">
              Are you an avid player of rummy? Join the millions of Indians who have a strong interest in playing rummy. It’s fun, strategic, and engaging. Install the RummyTime app on your phone to play anytime!
            </p>
            <h4>
              All set?

            </h4>
            <h3>
              Why Opt for RummyLudo ?
            </h3>
            <p className="lead text-muted animate-slide-in">
              One of the most widely used applications for playing rummy is RummyLudo. It is a safe and secure gaming site to play cash rummy games and provides exciting game varieties. RummyLudo is available for download on the Apple App Store and Google Play Store. The website even offers it for download. Installing it is simple, and you can start playing Indian Rummy in a matter of minutes. The platform offers a plethora of incredible features, incentives, and thrilling cash awards. What's not to adore?
            </p>
            <p className="lead text-muted animate-slide-in"></p>

          </div>
        </div>

      </div>
    </>
  )
}
