import React from 'react'
import '../Components/Footer.css'
import { useNavigate } from 'react-router-dom'
import img from '../images/logo1.png'

export default function Footer() {
    const navigate = useNavigate()


    const openFileInNewWindow = () => {
        window.open('/CSR.pdf', '_blank'); // Opens the PDF in a new tab
    };
    return (

        <>

            <footer className="site-footer mt-5">
                <div className="container">
                    <div>
                        <img src={img} alt="noimage" className='shadow  footer-icon' />
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-md-4">
                            <h6>About</h6>
                            <p className="text-justify"> RummyLudo is a Indian online rummy platform, providing a 24/7 gaming experience with advanced technology, hosting multiple cash games and tournaments.</p>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li className='footer-text' onClick={() => { navigate('/rules') }}><span>Rummy Rules</span></li>
                                <li className='footer-text' onClick={() => { navigate('/Variants') }}><span>Rummy Variants</span></li>
                                <li className='footer-text' onClick={() => { navigate('/lodovarients') }}><span>Ludo Variants</span></li>
                                <li className='footer-text' onClick={() => { navigate('/tournaments') }}><span>Rummy Tournaments</span></li>
                                <li className='footer-text' onClick={() => { navigate('/testimonials') }}><span>Testimonials</span></li>
                                <li className='footer-text' onClick={() => { navigate('/faqs') }}><span>FAQs</span></li>

                            </ul>
                        </div>

                        <div className="col-sm-6 col-md-3">
                            <h6>Terms & Conditions</h6>
                            <ul className="footer-links">
                                <li className='footer-text' onClick={() => { navigate('/about') }}><span>About Us</span></li>
                                <li className='footer-text' onClick={() => { navigate('/contactus') }}><span>Contact Us</span></li>
                                <li className='footer-text' onClick={() => { navigate('/legality') }}><span>Legality</span></li>
                                <li className='footer-text' onClick={() => { navigate('/rng') }}><span>RNG Certificate</span></li>
                                <li className='footer-text' onClick={openFileInNewWindow}><span>CSR Certificate</span></li>
                                <li className='footer-text' onClick={() => { navigate('/terms') }}><span>Terms & Conditions</span></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-2">
                            <h6>Polices</h6>
                            <ul className="footer-links">
                                <li className='footer-text' onClick={() => { navigate('/privacy') }}><span>Privacy Policy</span></li>
                                <li className='footer-text' onClick={() => { navigate('/gstpolicy') }}><span>GST Policy</span></li>
                                <li className='footer-text' onClick={() => { navigate('/tdspolicy') }}><span>TDS Policy</span></li>
                                <li className='footer-text' onClick={() => { navigate('/cashwithdrawal') }}><span>Cash Withdraw Policy</span></li>
                                <li className='footer-text' onClick={() => { navigate('/tdsfilling') }}><span>  TDS Filing</span></li>
                                <li className='footer-text' onClick={() => { navigate('/fairplay') }}><span>Fair Play Policy</span></li>
                                <li className='footer-text' onClick={() => { navigate('/shippingpolicy') }}><span>Shipping Policy</span></li>
                            </ul>
                        </div>
                        <div>
                            <div className="footer-second-part" >

                                <div  >
                                    <h6>Contact Us</h6>
                                    <ul className="footer-links">
                                        {/* <li className='footer-text d-flex gap-2 align-items-center '>
                                    <div className="material-symbols-outlined">call</div>
                                        <div>+91-8686033556</div>
                                    </li> */}
                                        <li className='footer-text d-flex gap-2 align-items-center mt-2'>
                                            <div className="material-symbols-outlined">mail</div>
                                            <div>support@rummyludo.in</div>
                                        </li>
                                    </ul>
                                    <h6>Connect With Us</h6>
                                    <ul className="footer-links">
                                        <ul className="social-icons mt-3">
                                            <li><span className="facebook" ><i className="fa fa-facebook"></i></span></li>
                                            <li><span className="twitter" ><i className="fa fa-twitter"></i></span></li>
                                            <li><span className="dribbble" ><i className="fa fa-dribbble"></i></span></li>
                                            <li><span className="linkedin" ><i className="fa fa-linkedin"></i></span></li>
                                        </ul>
                                    </ul>
                                </div>

                                <div>
                                    <h6 className='secured-pay'>Secured payments by</h6>
                                    <div className='text-center mt-3'>
                                        <img className='razorpay' src="https://th.bing.com/th/id/OIP.1nEfALK6hoDBZmbwKOhe9gHaEc?rs=1&pid=ImgDetMain.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="container">
                    <div className='text-center'>
                        <p className="copyright-text">Copyright &copy; 2024 All Rights Reserved by   <span onClick={() => { navigate('/') }} className='text-danger' style={{ textDecoration: 'underline', cursor: 'pointer' }}>LKR Technologies Pvt Ltd</span> </p>
                    </div>

                </div>
            </footer>
        </>
    )
}
