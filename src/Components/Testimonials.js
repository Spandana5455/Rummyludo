import React from 'react'
import './Testimanials.css'
import { useEffect } from 'react'
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
            <li><a href="#points-rummy" className="resource-link"  onClick={()=>{navigate('/varients/points')}}>Points Rummy</a></li>
            <li><a href="#pool-rummy" className="resource-link"  onClick={()=>{navigate('/varients/pools')}}>Pool Rummy</a></li>
            <li><a href="#deal-rummy" className="resource-link"  onClick={()=>{navigate('/varients/deals')}}>Deal Rummy</a></li>
            <li><a href="#rummy-faqs" className="resource-link"  onClick={()=>{navigate('/faqs')}}>Rummy FAQs</a></li>
          </ul>
        </div>
      </div>

      <nav className="navbar bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Offcanvas navbar</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex mt-3" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
    </div>
   </>
  )
}
