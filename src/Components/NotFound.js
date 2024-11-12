import React from 'react'
import './NotFound.css'; // External CSS for styling
import { Link } from 'react-router-dom';


export default function NotFound() {
  return (

    <>
      <div className="not-found-container">
        <div className="background-animation"></div>

        <div className="animation-wrapper">
          <div className="ludo-dice">
            <div className="dice">🎲</div>
          </div>
          <div className="rummy-cards">
            <div className="card">🂡</div>

          </div>
        </div>

        <h1>404 - Page Not Found</h1>
        <p className='para fs-4 mt-2 mb-3'>Oops! The page you’re looking for doesn’t exist.</p>

        <Link to="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    </>
  )
}
