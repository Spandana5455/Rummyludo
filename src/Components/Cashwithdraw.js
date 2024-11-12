import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Cashwithdraw() {
  const navigate = useNavigate()
  return (
    <>
      <div className='container pb-5'>
        <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb" className='mt-4 content-pading'>
          <ol className="breadcrumb">
            <li className="breadcrumb-item" onClick={() => { navigate('/') }} style={{ cursor: 'pointer' }}><span>Home</span></li>
            <li className="breadcrumb-item active" aria-current="page">Withdrawal Policy</li>
          </ol>
        </nav>
        <div className='content-pading'>
          <h1 className='mt-4'>Withdrawal Policy</h1>
          <p className="para pt-3">Since ancient times, rummy has been played in every Indian home! Rummytime reinvents this classic family game and gives it a boost by allowing you to withdraw as much money as you like by IMPS to your preferred account at any time during the day, all within 30 seconds!</p>
          <p className="para">One of the most played games in India is rummy. Particularly, online rummy has grown in popularity among players throughout. RummyTime provides both novice and experienced players with a safe and secure environment in which to play their favorite game and receive thrilling rewards. You may use IMPS to withdraw your winnings to the account of your choice within 60 seconds of winning!
            After installing the app, you will need to register your phone number in order to play cash games. After that, you may select your preferred rummy variation and begin playing.
          </p>
          <p className="para">You will receive incentives of up to 5,000 on your initial deposit. This can be used to join the table of your choice. Your RummyTime account will be rewarded with your prizes when you win. With only a few clicks, you will be able to withdraw via IMPS. </p>
          <p className="para">Your bank information and other necessary information are protected by the app's top-notch anti-fraud gaming system, which asks you to check in with your phone number. </p>
          <p className="para">Kindly let us know your thoughts, questions, or worries about our rummy games and let us know how we can make our platform better. We provide five regional languages for customer service. Please use the Help Center in the app or send an email to support@rummytime.com.</p>

        </div>

      </div>
    </>
  )
}
