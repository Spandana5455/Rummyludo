import React from 'react'
import './Home.css'
import img from '../images/homepic.png'
import img1 from '../images/scaner.png'
import h1 from '../images/h1.png'
import h2 from '../images/h2.png'
import h3 from '../images/h3.png'
import c1 from '../images/c1.jpg'
import c2 from '../images/c2.jpg'
import c3 from '../images/c3.jpg'
import c4 from '../images/c4.jpg'
import Slider from "react-slick";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: 'absolute',
        right: '5px',
        top: '50%',
        transform: 'translateY(-50%)',
        background: "#D2B805",
        width: '50px',
        height: '60%',
        zIndex: 1, // Ensure the arrows are above other elements
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      onClick={onClick}
    >
      <span>Next</span>
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: 'absolute',
        left: '5px',
        top: '50%',
        transform: 'translateY(-50%)',
        background: '#D2B805',
        width: '50px',
        height: '60%',
        zIndex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      onClick={onClick}
    >
      <span>Prev</span>
    </div>
  );
}


function MNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: 'absolute',
        right: '25px',
        top: '50%',
        transform: 'translateY(-50%)',
        width:'40px',
        height:'40px',
        backgroundColor:'#fff4',
        zIndex: 1, // Ensure the arrows are above other elements
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      onClick={onClick}
    >
      <span>Next</span>
    </div>
  );
}

function MPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: 'absolute',
        left: '15px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1,
        width:'40px',
        height:'40px',
        backgroundColor:'#fff4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      onClick={onClick}
    >
      <span>Prev</span>
    </div>
  );
}
export default function Home() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: true,
          nextArrow: <MNextArrow />,
          prevArrow: <MPrevArrow />,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          nextArrow: <MNextArrow />,
          prevArrow: <MPrevArrow />,
        
        }
      }
    ]
  };
  return (
    <>
     <div  > 
 
        <div className="home-main container mt-5">
          <div className='gird-1'>
            <h1 className='home-heading'>Big Thrills, Big Wins! Play RummyLudo Today!</h1>
            <div className='scaner-div'>
              <div  ><img src={img1} alt="" className='scaner' /></div>
              <div><p>Unlock endless fun! Scan the QR to download  RummyLudo App</p></div>
            </div>
            <div className='home-icons-div'>
              <div className='text-center'>
                <img src={h1} alt="" />
                <p>ISO & RN nextG certified</p>
              </div>
              <div className='text-center'>
                <img src={h2} alt="" />
              <p>No Bots</p>
              </div>
              <div className='text-center'><img src={h3} alt="" />
              <p>Safe and Secure</p>
              </div>
            </div>
          </div>
          <div className='gird-2'>
            <img src={img} alt="" className='home-pic' />
          </div>
          
        </div>

       <div className='  mt-5'>
        <div className='mt-5 container'>
          <div className='shadow rounded-3'>
          <h1 className='p-3 text-light text-center border-bottom shadow-sm' style={{backgroundColor:'#D2B805'}}>Play rummy online on RummyLudo ?          </h1>
          <div className='p-4'>
          <p className="para">In India, rummy is among the most played card games. Some people think that the game's origins date back to the sixteenth century. For this reason, this game is played online by crores of people weekly.
          </p>
          <p className="para">
          Traditionally, two to six participants play the game. Each participant is typically given 13 cards. The game has a straightforward goal. Sequences and sets must be formed out of the cards. The player who can produce a legitimate declaration first, with at least two sequences—at least one of which must be a pure sequence—wins. Rummy has a lot of variations, which is why players from all over the world find it so thrilling.

          </p>
          <p className="para">
          variations, which is why players from all over the world find it so thrilling.
As previously said, millions of Indian rummy gamers prefer to play on sites like RummyLudo due to the game's enormous popularity. RummyLudo is distinguished by its fluid gaming, safety, and security, providing a plethora of amazing features.

          </p>
          <p className="para">
          The chance to participate for some of the biggest prize pools in the gaming industry is another important factor contributing to RummyLudo's reputation for reliability. Gamers can compete in a variety of tournaments, both free and paid, with the possibility of winning enormous sums of money. There is always a chance to win large because tournaments are offered every 30 minutes!

          </p>
          <p className="para">

In addition to having a committed customer service crew on hand around-the-clock, RummyLudo has thousands of players that check in every day to play.
          </p>
          </div>
        </div>
       </div>
       </div>


 

 <div >
  <div className='home-scroller container'> 
    <Slider {...settings} className='home-scroller-main container'>
      <div>
      <div className="card trusted-card ms-2">
        <div className="card-body">
          <div>
          <img src={c1} alt="" className='cards-img-in-home'/>
          </div>
          <h5 className="card-title-in-home" >Trusted Gaming Platform</h5>
          <ul className="card-text text-light ">
            <li>Safe and Secure Transactions</li>
            <li>Fair Gameplay and Transparency</li>
            <li>RNG Certified Games</li>
            <li>Round-the-clock Fraud Detection Monitoring</li>
          </ul>
        </div>
      </div>
      </div>
      <div>
      <div className="card trusted-card ms-2">
        <div className="card-body">
        <div>
          <img src={c2} alt="" className='cards-img-in-home'/>
          </div>
          <h5 className="card-title-in-home">Popular Rummy Variations
          </h5>
          <ul className="card-text text-light">
            <li>Points,Pools,Deals rummy 
            </li>
            <li>Biggest Tournaments
            </li>
            <li>Play rummy anywhere & anytime</li>
          </ul>
        </div>
      </div>
      </div>
      <div>
      <div className="card trusted-card ms-2">
        <div className="card-body">
        <div>
          <img src={c3} alt="" className='cards-img-in-home'/>
          </div>
          <h5 className="card-title-in-home">Play Responsibility

          </h5>
          <ul className="card-text text-light">
            <li>Rigorous fair play guidelines

            </li>
            <li>Authentication of the opponent's profile 
            </li>
            <li>Player safety procedure</li>
            <li>Players' monetary deposits are limited. 
            </li>

          </ul>
        </div>
      </div>
      </div>
      <div>
      <div className="card trusted-card ms-2">
        <div className="card-body">
        <div>
          <img src={c4} alt="" className='cards-img-in-home'/>
          </div>
          <h5 className="card-title-in-home">24x7 Customer Support

          </h5>
          <ul className="card-text text-light">
            <li>24x7 Customer Support

            </li>
            <li>Priority Support for VIP Players

            </li>
            <li>Supported in 5 languages</li>
          </ul>
        </div>
      </div>
      </div>
    </Slider>
    </div>
    </div>


     </div>
   
 
 
    </>
  )
}
