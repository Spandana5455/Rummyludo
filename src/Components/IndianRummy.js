import React from 'react'
import './PoolRummy.css'
import { useNavigate } from 'react-router-dom'

export default function IndianRummy() {
  const navigate = useNavigate()
  return (

    <>
      <div className='container'>
        <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb" className='mt-4 content-pading'>
          <ol className="breadcrumb">
            <li className="breadcrumb-item" onClick={() => { navigate('/') }} style={{ cursor: 'pointer' }}><span>Home</span></li>
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
                      <li className="li-points"><span className="fw-bold">Goal: </span>Form valid sequences and sets with 13 cards.</li>
                      <li className="li-points"><span className="fw-bold">Sequence: </span> At least 3 consecutive cards of the same suit.</li>
                      <li className="li-points"><span className="fw-bold">Set:  </span>Group of 3 or 4 cards of the same rank but from different suits.</li>
                      <li className="li-points"><span className="fw-bold">Jokers: </span> Printed or wild jokers can be used as substitutes.</li>
                      <li className="li-points"><span className="fw-bold">Winning:  </span>Arrange all 13 cards into one pure sequence or one additional set or impure sequence.</li>
                      <li className="li-points"><span className="fw-bold">Game Duration: </span> Usually played in a shorter duration as players only need to form combinations with 13 cards.</li>
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
                      <li className="li-points"><span className="fw-bold">Goal: </span> Form valid sequences and sets with 21 cards.</li>
                      <li className="li-points"><span className="fw-bold">Winning: </span> Form one pure sequence or one set or impure sequence.</li>
                      <li className="li-points"><span className="fw-bold">Game Duration:  </span>Longer due to more cards to organize and arrange into valid combinations.</li>

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

          <div className="Indian">
            <h1>Indian Rummy Terms and Terminologies</h1>
            <p className="para"><span className="fw-bold">Indian Rummy</span> has a set of terms and terminologies that are important to understand for effective gameplay. Here are some of the most common ones</p>
            <p className="li-points">
              <p><span className='fw-bold'>1. Desk</span></p>
              <p className='ps-2'>1.1	A standard deck consists of 52 cards, and in Indian Rummy, two decks are often used, making a total of 104 cards.</p>
            </p>
            <p className="li-points">
              <p><span className='fw-bold'>2. Hand</span></p>
              <p className='ps-2'> 2.1 The hand refers to the cards dealt to a player at the beginning of the game. In 13-card rummy, each player is dealt 13 cards, while in 21-card rummy, each player receives 21 cards. </p>
            </p>
            <p className="li-points">
              <p><span className='fw-bold'>3. Joker</span></p>
              <p className='ps-2'>3.1	Jokers are special cards that can substitute for any other card to form sets and sequences. There are two types of jokers.</p>
              <ol type="a"><li ><span className="fw-bold">Printed Joker: </span>	These are specific cards, usually chosen at the start of the game, which can be used as substitutes.</li>
                <li className="li-points"> <span className="fw-bold">Wild Joker: </span>	A card that is randomly selected at the start of the game to act as a joker for that particular round.</li>
              </ol>
            </p>

            <p className="li-points">
              <p><span className='fw-bold'>4. Sequence </span></p>
              <p className='ps-2'>4.1	A sequence is a set of three or more consecutive cards of the same suit (e.g., 3♠, 4♠, 5♠). There are two types of sequences  </p>
              <ol type="a"><li  >	<span className="fw-bold">	Pure Sequence:</span>	  A sequence without a joker (e.g., 5♠, 6♠, 7♠). </li>
                <li className="li-points"> <span className="fw-bold">	Impure Sequence: </span>	A sequence that includes a joker (e.g., 4♣, Joker, 6♣).</li>
              </ol>
            </p>

            <p className="li-points">
              <p><span className='fw-bold'>5. Set </span></p>
              <p className='ps-2'>5.1	A set consists of three or four cards of the same rank but from different suits (e.g., 7♣, 7♦, 7♠).  </p>
            </p>

            <p className="li-points">
              <p><span className='fw-bold'>6. Meld </span></p>
              <p className='ps-2'>6.1	A meld refers to a valid combination of either a sequence or a set. Players can meld their cards once they have formed a valid combination. </p>
            </p>

            <p className="li-points">
              <p><span className='fw-bold'>7. Discard</span></p>
              <p className='ps-2'>7.1	Discarding refers to placing one card from the player’s hand onto the open pile (the discard pile) after drawing a card. </p>
            </p>

            <p className="li-points">
              <p><span className='fw-bold'>8. Draw</span></p>
              <p className='ps-2'>8.1	Drawing refers to the act of picking up a card, either from the open deck (discard pile) or the closed deck (remaining face-down cards).  </p>
            </p>

            <p className="li-points">
              <p><span className='fw-bold'>9. Open Deck </span></p>
              <p className='ps-2'>9.1	The open deck refers to the pile of discarded cards, from which players can draw cards.  </p>
            </p>

            <p className="li-points">
              <p><span className='fw-bold'>10. Closed Deck </span></p>
              <p className='ps-2'>10.1	The closed deck is the remaining stack of face-down cards from which players can pick cards during their turn.  </p>
            </p>

            <p className="li-points">
              <p><span className='fw-bold'>11. Valid Declaration </span></p>
              <p className='ps-2'>11.1 	A valid declaration occurs when a player has formed at least  </p>
              <ol type="a"><li  >		One pure sequence and </li>
                <li className="li-points"> 	One additional set or impure sequence.</li>
                <li className="li-points"> After a valid declaration, the player ends the game, and the other players’ points are calculated based on their ungrouped cards.</li>

              </ol>
            </p>



            <p className="li-points">
              <p><span className='fw-bold'>12. Drop </span></p>
              <p className='ps-2'>12.1	The drop option allows players to leave the game early without completing the round. There are two types of drops </p>
              <ol type="a">
                <li className="li-points"><span className="fw-bold">	First Drop:</span> When a player drops in their very first turn, they receive 20 points.</li>
                <li className="li-points"><span className="fw-bold">	Midway Drop: </span>	When a player drops after their first turn, they receive 40 points.</li>
                <li className="li-points"><span className="fw-bold">	Consecutive Misses:</span>	 Missing consecutive turns is treated as a midway drop, resulting in 40 points being added to their score.</li>
              </ol>
            </p>

            <p className="li-points">
              <p><span className='fw-bold'>13. Invalid Declaration </span></p>
              <p className='ps-2'>13.1	An invalid declaration occurs when a player claims to have a valid combination but their hand does not meet the requirements. In this case, the player is penalized with 80 points and is dropped from the game. </p>
            </p>


            <p className="li-points">
              <p><span className='fw-bold'>14. Points </span></p>
              <p className='ps-2'>14.1	In Points Rummy, each player accumulates points based on their ungrouped cards at the end of the round. Cards are valued as  </p>
              <ol type="a">
                <li className="li-points">	Face cards (King, Queen, Jack) and Aces = 10 points each.</li>
                <li className="li-points">	Number cards (2-10) = Face value.</li>
                <li className="li-points">	Jokers = 0 points.</li>
              </ol>
            </p>


            <p className="li-points">
              <p><span className='fw-bold'>15. Pool Rummy</span></p>
              <p className='ps-2'>15.1	Pool Rummy is a variant where players accumulate points throughout the game. Players are eliminated once their points exceed a predefined limit, such as 101 or 201.  </p>
            </p>

            <p className="li-points">
              <p><span className='fw-bold'>16. Deal </span></p>
              <p className='ps-2'>16.1	A deal is one complete round of the game, where players play until one of them declares a valid hand.  </p>
            </p>



            <p className="li-points">
              <p><span className='fw-bold'>17. Show</span></p>
              <p className='ps-2'>17.1	To show means to display your hand at the end of a round, either when you are declaring or when the round is over. A player can show if they have completed the required combinations. </p>
            </p>


            <p className="li-points">
              <p><span className='fw-bold'>18. Joker Card </span></p>
              <p className='ps-2'>18.1	A joker card is used to substitute any other card in a sequence or set. It can be a printed joker (a card designated as a joker before the game begins) or a wild joker (a randomly assigned card during the game). </p>
            </p>
            <p className="li-points">
              <p><span className='fw-bold'>19. Impure Sequence </span></p>
              <p className='ps-2'>19.1	An impure sequence is a sequence that includes a joker to substitute for one of the required cards (e.g., 3♦, Joker, 5♦). </p>
            </p>


            <p className="li-points">
              <p><span className='fw-bold'>20. Pure Sequence </span></p>
              <p className='ps-2'>20.1	A pure sequence consists of at least three consecutive cards of the same suit, with no joker involved (e.g., 7♠, 8♠, 9♠). </p>
            </p>
            <p className="li-points">
              <p><span className='fw-bold'>21. Card Value </span></p>
              <p className='ps-2'>21.1	In Indian Rummy, cards have the following values</p>
              <ol type='a'>
                <li className="li-points">	Face cards (King, Queen, Jack) and Aces = 10 points each.</li>
                <li className="li-points"> Number cards (2-10) = The card’s face value.</li>
                <li className="li-points">	Jokers = 0 points.</li>
              </ol>
            </p>

            <p className="li-points">
              <p><span className='fw-bold'>22. Rummy Declaration </span></p>
              <p className='ps-2'>22.1	A rummy declaration refers to declaring that a player has completed their valid combination of sequences and sets to win the game. </p>
            </p>

            <p className="li-points">
              <p><span className='fw-bold'>23. Rummy Player </span></p>
              <p className='ps-2'>23.1	A rummy player is someone actively participating in the game by forming sequences and sets and attempting to win the round.  </p>
            </p>



            <h1>Rules for Indian Rummy</h1>
            <p className="para">Indian Rummy Overview</p>
            <div>
              <div className="li-points">
                <p><span className='fw-bold'> 1. Sets</span></p>
                 <div className='ps-2'>
                  <div  >1.1 Grouping of cards of the same value but from different suits.</div>
                  <div className="li-points">1.2 Valid sets must have at least three cards, all from different suits.</div>
                  <div className="li-points">1.3 Valid sets can consist of four cards of different suits.</div>
                  <div className="li-points">1.4 A valid declaration doesn't need to include a set if it has valid sequences.</div>
                 </div>
              </div>

              <div className="li-points">
                <p><span className='fw-bold'> 2. Sequence</span></p>
                 <div className='ps-2'>
                  <div  >2.1 Grouping of at least 3 or more cards of the same suit arranged consecutively.</div>
                  <div className="li-points">2.1 Valid declarations must have at least two sequences, one of which should be a pure sequence.</div>
                 </div>
              </div>

              <div className="li-points">
                <p><span className='fw-bold'> 3. Pure Sequence</span></p>
                 <div className='ps-2'>
                  <div  >3.1 sequence is formed when at least 3 cards of the same suit are arranged consecutively.</div>
                  <div className="li-points">3.2 Pure sequences don't use a joker or wild card joker.</div>
    
                 </div>
              </div>

              <div className="li-points">
                <p><span className='fw-bold'> 4. Impure Sequence</span></p>
                 <div className='ps-2'>
                  <div  >4.1 Sequences with a joker or two (wild card jokers can also be used) replace missing cards.</div>
           
                 </div>
              </div>

              <div   className="li-points">
                <p><span className='fw-bold'> 5. Printed Joker and Wild Card Jokers</span></p>
                 <div className='ps-2'>
                  <div  >5.1 The joker is the most important card in rummy.</div>
                  <div className="li-points">5.2 Every game has two variants of the joker: printed and wild card jokers.</div>
       
                 </div>
              </div>

              
            </div>

          </div>

          <h1>How Points are Calculated in Indian Rummy</h1>
          <p className="para">The objective of rummy is to get your score down to zero, which is an interesting fact. This is due to the fact that every player has a negative score after receiving their cards. The value that is printed on each card is its actual worth. For example, a three of spades will have a value of three. A six of hearts will be worth six. Jack, King, Queen, and Aces are worth ten.</p>

        </div>
      </div>
    </>
  )
}
