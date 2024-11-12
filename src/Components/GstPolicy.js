import React from 'react'
import './Coming.css'
import { useNavigate } from 'react-router-dom'

export default function GstPolicy() {
  const navigate = useNavigate()
  return (
    <>
      {/* <div className='come-in-main-div'>
    <h1><span className="come-loader">Updated...Soon </span></h1>
 </div> */}
      <div className='container'>
        <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb" className='mt-4'>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><span onClick={() => { navigate('/') }} style={{ cursor: 'pointer' }}>Home</span></li>
            <li className="breadcrumb-item active" aria-current="page" > GST Policy</li>
          </ol>
        </nav>
        <div className='content-pading place-middle' >
          <div>
            <h1 className='mt-4'>GST Policy</h1>
            <p className="para">The Goods and Services Tax (GST) policy for online rummy in India is a topic of ongoing discussion, affecting both gaming platforms and players. Online rummy is classified as a "game of skill" by various courts, but it is not exempted from GST. Current GST rates for online rummy vary based on platform structure and revenue model. Some platforms pay 18% GST on service fees or platform fees, while others apply GST on the entire entry fee or prize pool. The GST Council is considering a uniform 28% GST on the entire entry amount for online gaming, including rummy, which could significantly impact the rummy industry.</p>
            <p className="para">Higher GST on entry fees may lead to a reduced prize pool for players and platforms, potentially leading to changes in game structures, payouts, and the availability of free or low-stake games. Winnings from online rummy games are subject to income tax under the Income Tax Act in India. The GST Council is actively reviewing the tax policy to balance revenue needs with industry growth. If the GST Council decides to impose 28% GST on the total entry fee or stake amount, rummy platforms might need to change their fee structures or game offerings to stay competitive.</p>
          </div>
        </div>
      </div>
    </>
  )
}
