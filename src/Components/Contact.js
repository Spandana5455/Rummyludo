import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
 
    <>
     <div className=" my-5 contact-container">
      <div className="card shadow-lg border-0">
        <div className="card-header text-white text-center contact-header">
          <h2>Contact Us</h2>
        </div>
        <div className="card-body">
          <p className="contact-text">
            Have any inquiries about playing rummy or any other issues? Feel free to reach out! We offer customer service in five regional Indian languages for our registered customers.
          </p>
          <p><strong>Email us at:</strong> <a href="mailto:support@rummyludo.com" className="contact-link">support@rummyludo.in</a></p>
          <h5>Registered and Corporate Office:</h5>
          <address className="mb-4">
            4th Floor, Plot No 4 And 5, Arunodaya Colony,<br />
            Vittal Rao Nagar, Madhapur, Hyderabad,<br />
            Telangana 500081.
          </address>
          <p><strong>CIN NO:</strong> <span className="text-muted">[CIN Number Here]</span></p>
          <div className="mt-4">
            <p>To know more about us, refer to the following links:</p>
            <button  className="btn btn-outline-secondary">Referral Offers</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
