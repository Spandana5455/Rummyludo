import React from 'react'
import './Testimanials.css'
import { useNavigate } from 'react-router-dom'



export default function Testimonials() {
  const navigate = useNavigate()
    ;
  return (

    <>
      <div className="container my-5 p-4 reviews-container">
        <div className="card shadow-lg border-0 mb-4">
          <div className="card-header text-white text-center reviews-header">
            <h2>RummyLudo Reviews and Testimonials</h2>
          </div>
          <div className="card-body">
            <p className="reviews-text">
              A well-known rummy software in India, RummyLudo has registered players all across the nation who regularly play rummy games online. Hear the opinions of a select group of our top gamers regarding their gaming experiences.
            </p>

            <h5>Testimonial Videos</h5>
            <p className="text-muted">Expert rummy players describing the RummyLudo real cash app's features. (Updated Soon)</p>
          </div>
        </div>

        <div className="card shadow-lg border-0 mb-4">
          <div className="card-header text-white text-center resources-header">
            <h4>Resources for Novice Users</h4>
          </div>
          <div className="card-body">
            <p className="resources-text">
              If you are a complete novice, you should not be concerned. Although rummy is a simple game to learn, it takes a lot of practice to become an expert player and begin playing games for real money. Go over the pages that are given below.
            </p>
            <ul className="list-unstyled">
              <li><span className="resource-link" onClick={() => { navigate('/varients/points') }}>Points Rummy</span></li>
              <li><span className="resource-link" onClick={() => { navigate('/varients/pools') }}>Pool Rummy</span></li>
              <li><span className="resource-link" onClick={() => { navigate('/varients/deals') }}>Deal Rummy</span></li>
              <li><span className="resource-link" onClick={() => { navigate('/faqs') }}>Rummy FAQs</span></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
