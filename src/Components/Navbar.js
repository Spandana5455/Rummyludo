import React from 'react';
import './Navbar.css';
import logo from '../images/logo1.png'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
 




export default function Navbar() {
  const navigate = useNavigate()
  const [activeDropdown, setActiveDropdown] = useState('');
  const [show, setshow] = useState(true)
  const toggleDropdown = (dropdown) => {
    setActiveDropdown((prevDropdown) => (prevDropdown === dropdown ? '' : dropdown));
  };
  const handleNavigate = (path) => {
    navigate(path);
    
 
  };
  
  return (
    <>
      <nav className="navbar sticky-top shadow-sm " id='main-navbar-bg'>
        <div className="container d-flex align-items-center justify-content-between">

          {/* Logo aligned with navigation */}
          <div className=''>
            <img src={logo} className="navbar-brand text-center logo " style={{ cursor: 'pointer' }} onClick={() => { navigate('/') }} alt="logo" />
          </div>
          {/* Toggler visible only on mobile screens */}
          <button
            className="navbar-toggler d-lg-none ms-auto"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar content for large screens and above */}
          <div className="d-none d-lg-flex navbar-width">
            <ul className="navbar-nav flex-row gap-5 align-items-center  mb-lg-0">
              <li className="nav-item">
                <span className=" nav-link links-in-nav main-nav-text" aria-current="page" onClick={() => { navigate('/rummyapp') }}>Rummy App</span>
              </li>
              <li className="nav-item dropdown">
                <span
                  className=" nav-link links-in-nav   main-nav-text "
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ display: "flex", alignItems: "center" }}

                >
                  How to Play Rummy <span className=" mt-1 material-symbols-outlined">
                    keyboard_arrow_down
                  </span>
                </span>
                <ul className="dropdown-menu dropdown-menu-light" id='drop-down-show'>
                  <li><span className="dropdown-item" onClick={() => { navigate('/rules') }}>Rummy Rules</span></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><span className="dropdown-item" onClick={() => { navigate('rummy/freepractice') }}>Free Pratice Games</span></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><span className="dropdown-item" onClick={() => { navigate('rummy/Tips') }}>Rummy Tips & Strategies</span></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <span
                  className=" nav-link links-in-nav   main-nav-text"

                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  Rummy Variations <span className=" mt-1 material-symbols-outlined">
                    keyboard_arrow_down
                  </span>
                </span>
                <ul className="dropdown-menu dropdown-menu-light" id='drop-down-show'>
                  <li className=' '><span className="dropdown-item " onClick={() => { navigate('/Variants') }} >All Variations</span></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><span className="dropdown-item" onClick={() => { navigate('/varients/deals') }}>Deals Rummy</span></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><span className="dropdown-item" onClick={() => { navigate('varients/pools') }}>Pool Rummy</span></li><li><hr className="dropdown-divider" /></li>
                  <li><span className="dropdown-item" onClick={() => { navigate('varients/points') }} >Points Rummy</span></li>
                </ul>
              </li>
            </ul>

            <button className="btn fs-4 ms-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" onClick={()=>(setshow(true))}></span>
            </button>
        {show &&  <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header">
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body d-flex flex-column justify-content-between">
                <div>
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                      <span className=" nav-link links-in-nav active" aria-current="page" data-bs-dismiss="offcanvas" onClick={() => { handleNavigate('rummy/indianrummy') }} >Indian Rummy</span>
                    </li>
                    <li className="nav-item">
                      <span className=" nav-link links-in-nav" data-bs-dismiss="offcanvas" onClick={() => { handleNavigate('rummy/cashrummy') }}>Cash Rummy</span>
                    </li>
                    <li className="nav-item">
                      <span className=" nav-link links-in-nav" data-bs-dismiss="offcanvas" onClick={() => { handleNavigate('rummy/Therteencardrummy') }} >13 Card Rummy</span>
                    </li>
                    <li className="nav-item">
                      <span className=" nav-link links-in-nav" data-bs-dismiss="offcanvas" style={{ cursor: 'pointer' }} onClick={() => { handleNavigate('/tournaments') }}  >Rummy Tournaments</span>
                    </li>
                    <li className="nav-item">
                      <span className=" nav-link links-in-nav" data-bs-dismiss="offcanvas" style={{ cursor: 'pointer' }} onClick={() => { handleNavigate('/faqs') }} >FAQs</span>
                    </li>
                    {/* <li className="nav-item">
                      <span className=" nav-link links-in-nav"  >Blog</span>
                    </li> */}
                  </ul>
                </div>
                <div className='end-part d-flex '>
                  <span style={{ cursor: 'pointer' }} data-bs-dismiss="offcanvas" onClick={() => { handleNavigate('/privacy') }} >Privacy Policy</span>
                  <ul className='d-flex gap-4'>
                    <li style={{ cursor: 'pointer' }} data-bs-dismiss="offcanvas" onClick={() => { handleNavigate('/terms') }} > Terms and Conditions</li>
                    <li style={{ cursor: 'pointer' }} data-bs-dismiss="offcanvas" onClick={() => { handleNavigate('/legality') }} > Legality</li>
                  </ul>
                </div>
              </div>
            </div>}
          </div>

          {/* Offcanvas for mobile screens */}
          <div
            className="offcanvas offcanvas-end text-bg-light"
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">

              <button
                type="button"
                className="btn-close btn-close-danger"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex flex-column gap-5">
                <div>
                  <ul className="navbar-nav">
                    <li className="nav-item" aria-current="page" >
                      <span className=" nav-link links-in-nav" data-bs-dismiss="offcanvas" onClick={() => { handleNavigate('/rummyapp') }} > Rummy App</span>
                    </li>
                    <li className="nav-item d-flex align-items-center " onClick={() => toggleDropdown('rummy')}>
                      <div className=" nav-link links-in-nav">How to Play Rummy </div>
                      <div className='mt-2'><span className="material-symbols-outlined">chevron_right</span></div>
                    </li>
                    {activeDropdown === 'rummy' && (
                      <div className="rummy-content">
                        <ul>
                          <li><span className="dropdown-item"data-bs-dismiss="offcanvas" onClick={() => { handleNavigate('/rules') }}>Rummy Rules</span></li>
                          <li><span className="dropdown-item" data-bs-dismiss="offcanvas" onClick={() => { handleNavigate('rummy/freepractice') }}>Free Practice Games</span></li>
                          <li><span className="dropdown-item" data-bs-dismiss="offcanvas" onClick={() => { handleNavigate('rummy/tips') }}>Rummy Tips & Strategies</span></li>
                        </ul>
                      </div>
                    )}

                    <li className="nav-item">
                      <span className=" nav-link links-in-nav" data-bs-dismiss="offcanvas" onClick={() => { handleNavigate('rummy/indianrummy') }} >Indian Rummy</span>
                    </li>

                    <li className="nav-item">
                      <span className=" nav-link links-in-nav" data-bs-dismiss="offcanvas" onClick={() => { handleNavigate('rummy/cashrummy') }} >Cash Rummy</span>
                    </li>
                    <li className="nav-item">
                      <span className=" nav-link links-in-nav" data-bs-dismiss="offcanvas" onClick={() => { handleNavigate('rummy/Therteencardrummy') }}>13 Card Rummy</span>
                    </li>
                    <li className="nav-item d-flex align-items-center " onClick={() => toggleDropdown('variations')}>
                      <div className=" nav-link links-in-nav" > Rummy Variations</div>
                      <div className='mt-2'><span className="material-symbols-outlined">chevron_right</span></div>
                    </li>
                    {activeDropdown === 'variations' && (
                      <div className="rummy-content">
                        <ul >
                          <li className=' '><span className="dropdown-item " data-bs-dismiss="offcanvas" onClick={() => { handleNavigate('/Variants') }} >All Variations</span></li>

                          <li><span className="dropdown-item" data-bs-dismiss="offcanvas" onClick={() => { handleNavigate('/varients/deals') }}>Deals Rummy</span></li>

                          <li><span className="dropdown-item" data-bs-dismiss="offcanvas" onClick={() => { handleNavigate('/varients/pools') }} >Pool Rummy</span></li>
                          <li><span className="dropdown-item" data-bs-dismiss="offcanvas" onClick={() => { handleNavigate('/varients/points') }}>Points Rummy</span></li>
                        </ul>
                      </div>
                    )}

                    <li className="nav-item">
                      <span className=" nav-link links-in-nav" style={{ cursor: 'pointer' }} data-bs-dismiss="offcanvas" onClick={() => { handleNavigate('/tournaments') }} >Rummy Tournaments</span>
                    </li>
                    <li className="nav-item">
                      <span className=" nav-link links-in-nav" style={{ cursor: 'pointer' }} data-bs-dismiss="offcanvas" onClick={() => { handleNavigate('/faqs') }} >FAQs</span>
                    </li>
                    {/* <li className="nav-item">
                      <span className=" nav-link links-in-nav"  >Blog</span>
                    </li> */}
                  </ul>
                </div>
                <div>
                  <ul className='navbar-nav mt-5'>
                    <li className="nav-item" style={{ cursor: 'pointer' }} data-bs-dismiss="offcanvas" onClick={() => { handleNavigate('/privacy') }} >  Privacy Policy </li>
                    <li className="nav-item" style={{ cursor: 'pointer' }} data-bs-dismiss="offcanvas" onClick={() => { handleNavigate('/terms') }} > Terms and Conditions</li>
                    <li className="nav-item" style={{ cursor: 'pointer' }} data-bs-dismiss="offcanvas" onClick={() => { handleNavigate('/legality') }} > Legality</li>
                  </ul>
                </div>
              </nav>



            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
