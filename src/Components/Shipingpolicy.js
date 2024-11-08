import React from 'react'
import './Testimanials.css'
import { useNavigate } from 'react-router-dom'

export default function Shipingpolicy() {
  const navigate =useNavigate()
  return (

    <>
       <div className="container my-5 content-pading reviews-container">
       <div className="card shadow-lg border-0 mb-4">
      <div className="card shadow-sm border-0">
        <div className="card-header text-white text-center shipping-header">
          <h4>Shipping Policy</h4>
        </div>
        <div className="card-body">
          <p className="para">
            Thank you for visiting RummyLudo! We want to clarify that RummyLudo is a fully digital platform focused solely on online gaming services for Rummy, Ludo, and other related games.
          </p>
          <h3>No Physical Shipping or Delivery Services</h3>
          <ol className="mb-3">
            <li className='li-points'><strong>Digital Services Only:</strong> All our services, including gameplay, transactions, bonuses, and winnings, occur exclusively through our online platform.</li>
            <li className='li-points'><strong>No Physical Goods:</strong> RummyLudo does not offer any physical products that would require shipping or delivery.</li>
            <li className='li-points'><strong>In-App Funds and Rewards:</strong> Any winnings, funds, or bonuses credited to your account are digital and can be utilized within the app for gameplay and in-app purchases as applicable.</li>
          </ol>
          <h3>Clarification on Winnings and Rewards</h3>
          <ol className='mt-3'>
            <li className='li-points'><strong>Withdrawals and Cash Prizes:</strong> Cash prizes or winnings earned through gameplay can be withdrawn through our secure payment options, as per our withdrawal policy, directly from your RummyLudo account.</li>
            <li className='li-points'><strong>Digital Bonuses:</strong> Bonuses or credits provided as rewards are also digital and are non-transferable outside the app.</li>
          </ol>
        </div>
      </div>

     
      </div>
      <div className="text-center mt-5">
        <p>For any further inquiries, feel free to reach out to us at <a href="mailto:support@rummyludo.in" className="contact-link">support@rummyludo.in</a> or contact our support team through the app.</p>
      </div>
      </div>
    </>
  )
}
