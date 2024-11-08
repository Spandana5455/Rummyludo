import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Privacy() {
  const navigate =useNavigate()
  return (
    <>
    <div className='container'>
    <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb" className='mt-4 content-pading'>
  <ol className="breadcrumb">
    <li className="breadcrumb-item"  onClick={()=>{navigate('/')}} style={{cursor:'pointer'}}><span>Home</span></li>
    <li className="breadcrumb-item active" aria-current="page">Privacy Policy</li>
  </ol>
</nav>
       <div  className='content-pading' >
        <h1 className='mt-4'>Privacy Policy</h1>
        <p className="para">RummyLudo, operated by LKR Technologies Pvt. Ltd., offers users in select regions of India access to a variety of online rummy games through its website and mobile application. The platform provides multiple formats and variations, ensuring a dynamic and engaging gaming experience for rummy enthusiasts.</p>
         <h3>1.Types of Information We Collect</h3>
         <p className="para ">Platform Information we collect:</p>
         <div className='ps-2'>
            <div className="li-points">1.1<span className='fw-bold'>	User Information: </span>Users may provide their names, location, email addresses, phone numbers, display images, social media IDs, and other profile information when they register. Users may also supply PAN numbers and bank account information for cash transactions.</div>
            <div className="li-points">1.2 <span className='fw-bold'>	Transaction Details:</span> When you start a transaction, we note the timestamp, transaction amount, and payment method.</div>
            <div className="li-points">1.3 <span className='fw-bold'>	Technical and Usage Information:</span> Details such IP addresses, device and browser types, cookies, game formats, length of gaming sessions, and other relevant information.</div>
            <div className="li-points">1.4 <span className='fw-bold'>	Customer Interaction Data:</span> Our support staff records every conversation you have with them.</div>
            <div className="li-points">1.5 <span className='fw-bold'>	Content and Messages:</span> Stored messages or content on the platform.</div>
            <div className="li-points">1.6 <span className='fw-bold'>	Web beacons and cookies: </span>Cookies enable us to better understand your preferences and enhance your user experience. You can control third-party advertising cookies in your browser's settings.</div>
         </div>
         <h3>2. How We Utilize Your Data</h3>
         <p className="para">Your information is used by us to</p>
         <div className='ps-2'>
            <div className="li-points">2.1 Facilitate game participation, handle accounts, process transactions, and grant access to the Platform.</div>
            <div className="li-points">2.2	Assist customers, resolve problems, and examine data to make changes.</div>
            <div className="li-points">2.3 	Check IDs and gauge how well ads and promotions are working.</div>
            <div className="li-points">2.4 Provide pertinent marketing campaigns and promotions.</div>
            <div className="li-points">2.5 	Make sure users are safe and enforce platform regulations.</div>
         </div>
         <h3>3.How We Store Your Data </h3>
         <p className="para">On servers in India, your data is safely kept. Data may be processed in different jurisdictions by some affiliates or service partners.</p>
      <h3>4. How Your Information Is Shared.</h3>
      <p className="para">Your data may be shared with</p>
      <div className='ps-2'>
      <div className="li-points">4.1	Companies that offer services, such cloud storage providers, payment processors, and ads.</div>
      <div className="li-points">	4.2 RummyLudo affiliates and subsidiaries for commercial and service enhancement.</div>
      <div className="li-points">	4.3 Law enforcement organizations in order to avoid fraud or as required by law.</div>
      <div className="li-points">4.4	Organizations in the event of a company transfer (such as a merger or purchase).</div>

      </div>
      <h3>5. How long do we keep your data?</h3>
      <p className="para">Data is kept for as long as is required to fulfill legal requirements, provide services, and settle disputes.</p>
       <h3>6. Your Rights and Preferences</h3>
       <p className="para">By emailing support@rummyludo.com, you can change your information, revoke your consent, deactivate your account, or choose not to receive promotional communications.</p>
       <h3>7. Security Protocols</h3>
<p className='para'>To safeguard user data, RummyLudo uses industry-standard security methods, such as encryption.</p>
<h3>8. Data Concerning Children</h3>
<p className="para">Users who are younger than eighteen are not allowed. If it turns out to be the property of a minor, we remove it.</p>
<h3>9. Services from Third Parties</h3>
<p className="para">Links to external websites with their own privacy policies may be included on our platform.</p>
<h3>10. Contact Details</h3>
<p className='para'>For inquiries or worries, please get in touch with our Grievance Officer:</p>
{/* <p><span className='fw-bold'>Name:</span> xyx</p> */}
<p><span className='fw-bold'>Email:</span> support@rummyludo.in</p>
<h3>11. Modifications to This Privacy Declaration</h3>
<p className="para">Periodically, we could make changes to our privacy statement. By using the Platform going forward, you agree to the updated policy.</p>
       </div>

    </div>
    </>
  )
}
