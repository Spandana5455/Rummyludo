import React from 'react'
import './Coming.css'
import { useNavigate } from 'react-router-dom'

export default function TdsFilling() {
  const navigate =useNavigate()
  return (
 <>
 {/* <div className='come-in-main-div'>
    <h1><span className="come-loader">Updated...Soon </span></h1>
 </div> */}
    <div className='container'>
    <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb" className='mt-4'>
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><span onClick={()=>{navigate('/')}} style={{cursor:'pointer'}}>Home</span></li>
    <li className="breadcrumb-item active" aria-current="page" > TDS Filling</li>
  </ol>
</nav>
       <div className='content-pading place-middle' >
        <div>
        <h1 className='mt-4'>TDS Filling</h1>
        <p className="para">Rummy operators, like online platforms, deduct TDS before making payment to the winner. These operators file quarterly TDS returns with the government using Form 26Q. Once deducted, players can claim credit for TDS in their Income Tax Return under Section 199. Players can obtain a TDS Certificate (Form 16A) from the operator, showing the amount of TDS deducted on their rummy winnings.
        </p>
        <p className="para">Players must report their rummy winnings as "Income from Other Sources" in their Income Tax Return (ITR). They should mention the gross amount of winnings and claim TDS credit. If winnings are less than ₹10,000, no TDS will be deducted, but they must still report the income in their ITR and pay tax.
        </p>
        <p className="para">Winnings from rummy are treated as income under the "Other Sources" heading and taxed at a 30% rate, regardless of the player's total income. Players should maintain records of their winnings, TDS deductions, and related documents. If their total income is below the taxable limit, they can file for a refund of the TDS deducted.</p>
       </div>
       </div>
    </div>
 </>
  )
}
