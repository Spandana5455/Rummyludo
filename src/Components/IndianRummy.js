import React from 'react'
import './IndianRummy.css'
import './PoolRummy.css'
import { useNavigate } from 'react-router-dom'

export default function IndianRummy() {
    const navigate =useNavigate()
  return (
   
    <>
        <div className='container'>
    <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb" className='mt-4 content-pading'>
  <ol className="breadcrumb">
    <li className="breadcrumb-item"  onClick={()=>{navigate('/')}} style={{cursor:'pointer'}}><span>Home</span></li>
    <li className="breadcrumb-item active" aria-current="page">Indian Rummy</li>
  </ol>
</nav>
       <div className='content-pading'>
        <h1 className='mt-4'>Indian Rummy</h1>
        <p className="para">
        Indian Rummy is a popular variation of the 13-card rummy game, played with 2 to 6 players. It involves skill, strategy, and concentration, and is played with two standard 52-card decks and Jokers. The primary objective is to form valid sequences and sets to declare and win the game. Players are dealt 13 cards at the start, and they take turns to pick a card from the open or closed deck. Printed Jokers can substitute any card to form a valid sequence or set, while wild Jokers are randomly selected. A valid declaration means the player has successfully arranged all their 13 cards into combinations of sequences and sets. Points are calculated based on ungrouped cards in a player's hand, with the lowest-scoring player winning. Indian Rummy is a social and engaging card game that combines skill and strategy.
        </p>
        <h3>Forms of Indian Rummy </h3>
        <p className="para">
        Indian Rummy is played in various formats, with two of the most popular being 13-card and 21-card rummy. Both these forms are based on similar rules, but the key difference lies in the number of cards dealt to each player, which changes the gameplay dynamics.
        </p>
        <h4>13-Card Indian Rummy</h4>

        <div className="rummy-rules-container py-5">
      <h2 className="text-center display-6 fw-bold text-highlight mb-4">Indian Rummy Variants</h2>

      <div className="row gy-4">
        {/* 13-Card Rummy */}
        <div className="col-md-6">
          <div className="card border-0 shadow-sm  ">
            <div className="card-body">
              <h3 className="text-center ">13-Card Indian Rummy</h3>
              <ol className="list-unstyled mt-3">
               <li className="li-points"><span className="fw-bold"></span>Most popular form, dealt 13 cards at the start.</li>
               <li className="li-points"><span className="fw-bold"></span>Goal: Form valid sequences and sets with 13 cards.</li>
               <li className="li-points"><span className="fw-bold"></span>Sequence: At least 3 consecutive cards of the same suit.</li>
               <li className="li-points"><span className="fw-bold"></span>Set: Group of 3 or 4 cards of the same rank but from different suits.</li>
               <li className="li-points"><span className="fw-bold"></span>Jokers: Printed or wild jokers can be used as substitutes.</li>
               <li className="li-points"><span className="fw-bold"></span>Winning: Arrange all 13 cards into one pure sequence or one additional set or impure sequence.</li>
               <li className="li-points"><span className="fw-bold"></span>Game Duration: Usually played in a shorter duration as players only need to form combinations with 13 cards.</li>
              </ol>

            </div>
            
          </div>
        </div>

        {/* 21-Card Rummy */}
        <div className="col-md-6">
          <div className="card border-0 shadow-sm animate-slide-up">
            <div className="card-body">
            
            <h3 className='text-center'>21-Card Indian Rummy</h3>
              <ol>
              <li className="li-points"><span className="fw-bold"></span>Typically played with 2 to 6 players.</li>
               <li className="li-points"><span className="fw-bold"></span>Goal: Form valid sequences and sets with 21 cards.</li>
               <li className="li-points"><span className="fw-bold"></span>Winning: Form one pure sequence or one set or impure sequence.</li>
               <li className="li-points"><span className="fw-bold"></span>Game Duration: Longer due to more cards to organize and arrange into valid combinations.</li>

              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h3>Variations of Indian Rummy</h3>
    <p className="para">
    Rummy is a versatile card game that offers several engaging formats to cater to players of all skill levels. Each format has its unique rules and gameplay style, enhancing the overall experience and keeping the game fresh and exciting. Below, we explore some of the most popular rummy game formats.
    </p>
    <div className="pool-main-container">
                        <div className="pool-cards">
                            <div className="imgBx">
                                <div>
                                    {/* <img style={{width:"100px"}} src="https://softwareontheroad.com/static/devops-0ee510e903c87fa54a7f2646c3e5765a.png"/> */}
                                    <h2>Points Rummy</h2>
                                </div>
                            </div>
                            <div className="overlay"></div>
                            <div className="content">
                                <h2 className=' mb-3'>Points Rummy</h2>
                                <p>
                                Points Rummy is one of the fastest and most straightforward formats, ideal for quick games. Each card carries a specific point value, with numbered cards worth their face value, face cards (Kings, Queens, Jacks) worth 10 points, and Aces worth either 1 or 11 points, depending on the player’s choice. The game continues until one player declares, meaning they have completed their sets and sequences. The remaining players calculate their points based on the cards left in their hands, and the player with the lowest points wins the round. The simplicity and speed of Points Rummy make it popular for casual play and for those looking to enjoy quick rounds without extensive setup or strategy.
                                </p>

                            </div>
                        </div>
                        <div className="pool-cards">
                            <div className="imgBx">
                                <div>
                                    {/* <img style={{width:"100px"}} src="https://dafgrup.com.tr/images/icon/sketch.png"/> */}
                                    <h2> Pool Rummy</h2>
                                    <p></p>
                                </div>
                            </div>
                            <div className="overlay"></div>
                            <div className="content ">
                                <h2 className='mb-4'> Pool Rummy</h2>
                                <p>Pool Rummy adds a layer of strategy to the game by introducing a limit on the number of points players can accumulate. It is usually played with either 101 or 201 points, depending on the agreed-upon rules. Players aim to keep their scores below the specified limit, and the game continues until one player exceeds it, leading to their elimination. The last remaining player wins the game. This format encourages players to be strategic about the cards they pick and discard, as managing points becomes crucial to avoid elimination. The competitive nature of Pool Rummy appeals to players who enjoy a more strategic and long-term game.</p>
                            </div>
                        </div>
                        <div className="pool-cards">
                            <div className="imgBx">
                                <div>
                                    {/* <img style={{width:"100px"}} src="https://www.edenprojet.com/images/img_home/startup.png"/> */}
                                    <h2>Deals Rummy</h2>
                                </div>
                            </div>
                            <div className="overlay"></div>
                            <div className="content">
                                <h2 className='mb-4'>Deals Rummy</h2>
                                <p>Deals Rummy involves a fixed number of chips or points distributed to each player at the beginning of the game. Players play a predetermined number of deals, and after each deal, scores are calculated based on the cards left in hand. The player with the lowest score at the end of all deals wins. This format allows for deeper strategies and a more prolonged engagement, as players must consider their performance over multiple rounds rather than just a single game. Deals Rummy combines elements of both Points and Pool Rummy, making it a favorite among serious rummy enthusiasts.</p>
                            </div>
                        </div>
                    </div>

       </div>
    </div>
    </>
  )
}
