import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Rules() {
  const navigate =useNavigate()
  return (
  
    <>
    <div className='container'>
    <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb" className='mt-4 content-pading'>
  <ol className="breadcrumb">
    <li className="breadcrumb-item"  onClick={()=>{navigate('/')}} style={{cursor:'pointer'}}><span>Home</span></li>
    <li className="breadcrumb-item active" aria-current="page"> Rummy Rules</li>
  </ol>
</nav>
<div className='content-pading'> 
       <div  >
        <h1 className='mt-4'>Rummy Rules- Acquire Knowledge About Rummy</h1>
        <p className="para">Rummy is a skill-based card game popular for its balance of strategy and excitement. The fundamentals of playing 13-card rummy remain the same whether you play it on RummyLudo or with friends at a party. Each player receives thirteen cards in the game, which usually uses two decks of cards. In order to create sets and sequences, players carefully draw and discard cards during the game. </p>
      <p className="para">In a game of rummy, the value of the ungrouped cards determines the score. Each card has the following value: </p>
       <div >
        <p>Printed wild card and joker Joker: 0 points </p>
        <p>10 points for face cards K, Q, and J </p>
        <p>Ten points for ace cards </p>
        <p><span className='fw-bold'>Numerical cards:</span> The number written on the card is the same as its value. Thus, a pair of hearts will be worth two points.</p>
        <p>Here’s a simple guide to get you started with the basics:</p>
       </div>
       </div>
       <div className="Objective">
        <h3>Objective</h3>
        <p className="para">The primary objective in Rummy is to arrange all 13 cards into valid sets and sequences. A player wins by forming at least two sequences, one of which must be a pure sequence (a sequence without a joker).</p>
       </div>
       <h3>1. Card Definitions</h3>
       <div className='mt-3 mb-3 ps-2'>
  <div > 1.1 <span className="fw-bold">Sequence:</span> Three or more consecutive cards of the same suit (e.g., 5♥ 6♥ 7♥).  </div>
    <ol type="a" className=''>
      <li className="li-points">
        <span className="fw-bold">Pure Sequence:</span> A sequence without a joker.
      </li>
      <li className="li-points">
        <span className="fw-bold">Impure Sequence:</span> A sequence that includes a joker as a substitute.
      </li>
    </ol>
 
  <div className="li-points">1.2  <span className="fw-bold">Set:</span> Three or four cards of the same rank but different suits (e.g., 7♠ 7♣ 7♦).
  </div>
</div>

<h3>2. Steps to Play Rummy</h3>
<div className='mt-3 mb-3 ps-2'>
  <div className="li-points">2.1 <span className="fw-bold">Card Distribution:</span>	 Each player is dealt 13 cards.</div>
  <div className="li-points">2.2 <span className="fw-bold">Picking and Discarding Cards</span>
    <ol type='a'>
      <li className="li-points">	Players pick cards from either the closed or open deck to improve their hand.</li>
      <li className="li-points">	After picking, discard an unwanted card to maintain 13 cards at all times.</li>
    </ol>
  </div>
  <div >2.3<span className="fw-bold"> Forming Sets and Sequences:</span> Arrange your cards into valid sets and sequences.</div>
  <div className="li-points"> 2.4<span className="fw-bold">	Declare:</span> Once you have the required sequences and sets, declare your hand and show your cards for validation.</div>

 
</div>
<h3 className=''>3. Points Calculation</h3>
<div className='mt-3 mb-3 ps-2'>
<div className="li-points">3.1 <span className="fw-bold">Winning Hand:</span>	 The winner scores zero points.</div>
<div className="li-points">3.2 <span className="fw-bold">Losing Hand:</span>	 Points are calculated based on unmatched cards, with face cards (Jack, Queen, King, Ace) worth 10 points each.</div>
   </div>
   <h3>4. Tips to Master Rummy</h3>
   <div className='mt-3 mb-3 ps-2'>
    <div className="li-points">4.1 	Prioritize forming a pure sequence early.</div>
    <div className="li-points">4.2 	Use jokers strategically to complete sets and sequences.</div>
    <div className="li-points">4.3	Observe your opponents' moves to predict their hand strategy.</div>
   </div>
   <h1 className='mt-4'>Valid Declaration in 13 Card Rummy - Possible Combinations</h1>
   <p className="para">
   In 13-card Indian Rummy, a valid declaration requires players to form specific sets and sequences to meet the game’s rules. Here's a breakdown of the requirements and possible combinations:
   </p>
   <h3>1. Basic Requirements for a Valid Declaration</h3>
   <div className='mt-3 mb-3 ps-2'>
   <div className="li-points">1.1 <span className="fw-bold">	Two Sequences:</span> Out of the 13 cards, you must have at least two sequences.</div>
   <div className="li-points">1.2 <span className="fw-bold">	One Pure Sequence:</span> At least one of these two sequences must be a pure sequence (formed without a joker).</div>
   <div className="li-points">1.3 <span className="fw-bold">	Sets or Sequences:</span> The remaining cards can be used to form sets or additional sequences.</div>
   </div>
   <h3 className='mt-3'>2. Types of Sequences</h3>
   <div className='mt-3 mb-3 ps-2'>
   <div className="li-points">2.1 <span className="fw-bold">	Pure Sequence:</span> A sequence of three or more consecutive cards of the same suit, without any joker.</div>
   <div className="li-points">2.2 <span className="fw-bold">	Impure Sequence: </span> A sequence that includes a joker as a substitute for one of the cards.</div>

   </div>
   <h3>3. Types of Sets</h3>
   <div className='mt-3 mb-3 ps-2'>
   <div className="li-points">3.1 <span className="fw-bold">	Set:</span> A group of three or four cards of the same rank but different suits. Jokers can be used in sets.</div>
   </div>
   <h3>4. Examples of Valid Combinations</h3>
   <p className="para">Here are some possible combinations that meet the requirements for a valid declaration:</p>
   <p className="para mb-0"><span className="fw-bold text-dark">Combination 1: </span>Two Sequences (One Pure), One Set</p>
   <div className='ps-2'>
    <div className="li-points">1.1 <span className='fw-bold'>Pure Sequence:</span> ce: 5♠ 6♠ 7♠</div>
    <div className="li-points">1.2 <span className='fw-bold'>Impure Sequence:</span>	 8♣ 9♣ Joker (where the Joker replaces 10♣)</div>
    <div className="li-points">1.3 <span className='fw-bold'>	Set:</span> K♠ K♣ K♦</div>
   </div>
   <p className="para mt-4 mb-0"><span className="fw-bold text-dark">Combination 2: </span>Three Sequences (One Pure)</p>
   <div className='ps-2'>
   <div className="li-points">2.1 <span className='fw-bold'>Pure Sequence: </span>3♥ 4♥ 5♥</div>
   <div className="li-points">2.2 <span className='fw-bold'>Impure Sequence:</span>	 6♦ 7♦ Joker</div>
   <div className="li-points">2.3 <span className='fw-bold'>Another Sequence:</span>	 10♣ J♣ Q♣</div>
   </div>
   <p className="para mb-0 mt-4"><span className="fw-bold text-dark">Combination 3: </span>One Pure Sequence, Two Sets</p>
   <div className='ps-2'>
   <div className="li-points">3.1 <span className='fw-bold'>	Pure Sequence:</span> 2♦ 3♦ 4♦</div>
   <div className="li-points">3.2 <span className='fw-bold'>Set: </span>	9♠ 9♦ 9♣</div>
   <div className="li-points">3.3 <span className='fw-bold'>Another Set:</span> A♠ A♣ A♦</div>
   </div>
   <h3>5. Points to Remember</h3>
   <div className='mt-3 mb-3 ps-2'>
   <div className="li-points">5.1	Failing to form a pure sequence results in an invalid declaration.</div>
   <div className="li-points">5.2 A minimum of two sequences is mandatory, one of which must be pure.</div>
   <div className="li-points"> 5.3 Improper declarations lead to a full penalty, so always double-check combinations.</div>
 
   </div>
  <h1 className='mt-4'>Calculation of points in Indian Rummy</h1>
  <p className="para">In 13-card Indian Rummy, point calculation is essential for determining scores, especially in Points Rummy. Points are calculated based on the ungrouped or unmatched cards in a player's hand when an opponent declares a valid hand. Here's a breakdown of how points are calculated:</p>
    <div className="div">    <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover table-light">
          <thead   >
            <tr className='text-center'>
              <th  style={{backgroundColor:'#D2B805'}}>Category</th>
              <th  style={{backgroundColor:'#D2B805'}}>Details</th>
              <th  style={{backgroundColor:'#D2B805'}}>Points</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td >Face Cards</td>
              <td>K, Q, J, A</td>
              <td>10 points each</td>
            </tr>
            <tr>
              <td>Number Cards</td>
              <td>2-10</td>
              <td>Face value (e.g., 5 = 5 pts)</td>
            </tr>
            <tr>
              <td>Jokers</td>
              <td>Joker cards</td>
              <td>0 points</td>
            </tr>
            <tr>
              <td>Pure Sequence</td>
              <td>Three or more consecutive cards of the same suit, without a joker</td>
              <td>0 points</td>
            </tr>
            <tr>
              <td>Second Sequence</td>
              <td>Pure or impure sequence (with/without joker)</td>
              <td>0 points</td>
            </tr>
            <tr>
              <td>Unmatched Cards</td>
              <td>Cards not part of any valid sequence or set</td>
              <td>Counted at face value</td>
            </tr>
            <tr>
              <td >Maximum Points Cap</td>
              <td>Limit on points per game round</td>
              <td>80 points</td>
            </tr>
            <tr>
              <td>First Drop</td>
              <td>Dropping before picking any cards</td>
              <td>20 points</td>
            </tr>
            <tr>
              <td>Middle Drop</td>
              <td>Dropping after picking cards</td>
              <td>40 points</td>
            </tr>
            <tr>
              <td>Full Count (No Valid Combo)</td>
              <td>When no pure sequence or valid combination exists</td>
              <td>80 points</td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
      <h4 className='mt-4 mb-5'>Example Hands</h4>
      <div className="table-responsive">
        <table className="table table-bordered  table-striped table-hover table-light">
          <thead className="thead-dark">
            <tr>
              <th style={{backgroundColor:'#D2B805'}}>Example</th>
              <th style={{backgroundColor:'#D2B805'}}>Hand Composition</th>
              <th style={{backgroundColor:'#D2B805'}}> Points Calculation</th>
              <th style={{backgroundColor:'#D2B805'}}>Total Points</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan="2">Example 1</td>
              <td>
                <strong>Pure Sequence:</strong> 3♠ 4♠ 5♠<br />
                <strong>Second Sequence:</strong> 7♦ 8♦ 9♦<br />
                <strong>Set:</strong> 10♥ 10♠ 10♦<br />
                <strong>Unmatched:</strong> K♠, Q♠, 7♣
              </td>
              <td>
                <strong>Unmatched Points:</strong><br />
                K♠ = 10 pts, Q♠ = 10 pts, 7♣ = 7 pts
              </td>
              <td>27 points</td>
            </tr>
            <tr></tr>
            <tr>
              <td rowSpan="2">Example 2 (No Pure)</td>
              <td>
                <strong>Impure Sequence:</strong> 4♣ 5♣ Joker<br />
                <strong>Set:</strong> 9♠ 9♦ 9♣<br />
                <strong>Unmatched:</strong> 2♠, J♥, K♦, Q♠
              </td>
              <td>
                <strong>All cards counted:</strong><br />
                4♣ = 4, 5♣ = 5, each 9 = 10, 2♠ = 2, J♥ = 10, K♦ = 10, Q♠ = 10
              </td>
              <td>61 points</td>
            </tr>
            <tr></tr>
          </tbody>
        </table>
      </div>
<h1>Real Cash Rummy Winning Amount Calculations</h1>
<p className="para">In cash rummy games, the winning sum is determined using the following formulas for the many rummy variations that are offered on RummyLudo:
Calculations for Points Rummy Winning Amount
</p>
<p className="para">
In Points Rummy, the winning amount is calculated based on the points each player accumulates and the pre-decided value of each point. Here’s a simplified breakdown:
</p>
<div className='mb-4'>
  <li className="li-points"><span className="fw-bold">Winning Calculation:</span>	 The winning amount in Points Rummy is determined by the formula:
{/* Winning Amount=(Total Points Lost by Opponents) -(Value per Point) - Rake Fee (if any)\text{Winning Amount} = \text{(Total Points Lost by Opponents)} \times \text{(Value per Point)} - \text{Rake Fee (if any)}Winning Amount=(Total Points Lost by Opponents)×(Value per Point)−Rake Fee (if any) */}
</li>
  <li className="li-points"><span className="fw-bold">	Value per Point:</span> This is a pre-set amount agreed upon by the players or set by the platform, often ranging from 0.1 to 1 unit (INR, for example).</li>
  <li className="li-points"><span className="fw-bold">	Opponent Points</span>: All players who lose the game accumulate points based on their unmatched cards, with a maximum limit per round, typically 80 points.</li>
  <li className="li-points"><span className="fw-bold">Fee Deduction:</span> Some platforms may deduct a small service or rake fee from the winning amount, depending on their policy.</li>
</div>
<p className="para">This calculation ensures that the winning player’s prize is directly linked to the performance of opponents in the round, making each game dynamic and competitive.</p>
<p className="para">In Deals Rummy, players aim to accumulate chips over a predetermined number of deals. Here’s a more detailed explanation of how the winning amount is calculated, along with an example:</p>
  
  <h1>Calculation of Winning Amount in Deals Rummy</h1>
  
  <div>
  <div className="li-points">1. <span className="fw-bold">Starting Chips:</span>	 Each player starts with an equal number of chips. For example, let's say each player begins with 100 chips.</div>
  <div className="li-points">2. <span className="fw-bold">Objective:</span> Players compete over several deals, with the aim of minimizing their ungrouped cards (those not part of valid sets or sequences) at the end of each deal.</div>
  <div className="li-points">3. <span className="fw-bold">Points Calculation:</span>	 At the end of each deal, players reveal their cards. Points are calculated based on ungrouped cards:
    <div className='ps-2'>
      <div className="li-points">3.1 <span className='fw-bold'>Number cards (2-10):</span>	 Face value (e.g., a 7 of hearts is 7 points).</div>
      <div className="li-points">3.2 <span className='fw-bold'>	Face cards (J, Q, K): </span>10 points each.</div>
      <div className="li-points">3.3 <span className='fw-bold'>Ace:</span>	 10 points.</div>
    </div>
  </div>
  <div className="li-points">4. <span className="fw-bold">Example:</span>
     <div className='ps-2'>
     <div className="li-points">	4.1 <span className="fw-bold">Players:</span> Assume there are 4 players: A, B, C, and D.</div>
     <div className="li-points">4.2 <span className="fw-bold">	End of Deal Points:</span>
       <ol type='a'>
       <li className="li-points"> <span className="fw-bold">Player A:</span>	 10 points (unmatched cards)</li>
       <li className="li-points"><span className="fw-bold">Player B:</span>	 5 points</li>
       <li className="li-points"><span className="fw-bold">Player C:</span>	 15 points</li>
       <li className="li-points"><span className="fw-bold">Player D:</span>  0 points (has a valid declaration)</li>
   
       </ol>
     </div>

     </div>
  </div>
  <div className="li-points">5. <span className="fw-bold">Chip Transfer</span>
    <div className='ps-2'>
    <div className="li-points">5.1 	The total points lost by players B and C (5 + 15 = 20 points).</div>
    <div className="li-points">5.2 	Player D, who wins the deal, will receive chips equal to the total points lost by other players.</div>
    <div className="li-points"> 5.3 Player D receives 20 chips (one for each point lost by B and C).</div>
    </div>
  </div>
  <div className="li-points">6. <span className="fw-bold">	Continuation: </span>This process continues over a set number of deals. At the end of all deals, the players’ chip counts are summed up:
  <div>
  <div className="li-points">7. <span className='fw-bold'>Final Chips:</span>
      <div className='ps-2'>
      <div className="li-points">7.1 <span className='fw-bold'>Player A:</span>  90 chips (after losing 10)</div>
      <div className="li-points">7.2 <span className='fw-bold'>Player B:</span>  95 chips (after losing 5)</div>
      <div className="li-points">7.3  <span className='fw-bold'>Player C:</span> 85 chips (after losing 15)</div>
      <div className="li-points">7.4 	<span className='fw-bold'>Player D:</span> 120 chips (after winning 20)</div>
      </div>
    </div>
  </div>
  </div>
  <div className="li-points mb-5">8. <span className="fw-bold">Winner Declaration:</span> Player D, with 120 chips, is declared the winner. If there is a cash prize associated with the game, the winning amount can be distributed based on the players' final chip counts or adjusted by any fees or agreements prior to the game.</div>
 
  </div>
  
    </div>
    </div>
    </>
  )
}
