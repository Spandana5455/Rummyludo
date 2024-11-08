import React from 'react'
import '../Components/All.css'
import { useNavigate } from 'react-router-dom'

export default function Tournaments() {
  const navigate =useNavigate()
  return (
   <>
       <div className='container p-5'>
    <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb" className='mt-4 content-pading'>
  <ol className="breadcrumb">
    <li className="breadcrumb-item"  onClick={()=>{navigate('/')}} style={{cursor:'pointer'}}><span>Home</span></li>
    <li className="breadcrumb-item active" aria-current="page"> Tournaments</li>
  </ol>
</nav>
<div className='content-pading'> 
       <div className='tournaments'>
        <h1 className='mt-4'> Tournaments</h1>
        <p className='para'>Rummy tournaments are competitive events where multiple players join to play rummy rounds for a chance to win cash prizes, bonuses, or other rewards. These tournaments typically have a structured format with an entry fee and can involve hundreds or thousands of players, depending on the platform. Participants progress through rounds by winning games, with the goal of accumulating the highest points or outlasting other players to reach the final round. Tournaments come in various formats, such as Knockout, Deal Rummy, and Points Rummy, each with unique rules and winning criteria. Online rummy platforms often host daily, weekly, and special seasonal tournaments, allowing players to enjoy a highly competitive and rewarding rummy experience.        </p>
        <h3>Why should you play rummy    ?    </h3>
        <p className='para'>Rummy tournaments are a great way to enjoy competitive, skill-based gameplay while aiming for substantial cash rewards. They bring together players of different skill levels, offering a challenging environment that helps sharpen strategic thinking and decision-making. With multiple formats like Points Rummy and Pool Rummy, tournaments keep the game exciting and fresh. They also provide opportunities to win bonuses and promotions, making participation even more rewarding. Online rummy tournaments are available around the clock, making it easy to join at any time. For anyone looking to elevate their rummy experience, tournaments are a fun and beneficial option.        </p>
       <h3>Cash tournaments       </h3>
       <p className='para'>As the name suggests, cash tournaments require you to pay a certain entry fee to participate in the tournament. Here are a few types of cash rummy tournaments on Rummyludo.</p>
        <ol>
             <li className="li-points">
             Variable prize: In these tournaments, the prize outlay per player is based on registration done for the tournament.

             </li>
             <li className="li-points">Guaranteed prize: These are tournaments where reward for each position is fixed.
</li>
             <li className="li-points">	Multi-table tournaments: In these tournaments, the prize pool varies depending on the number of players who have joined. More players means a bigger prize pool in this type of tournament.
             </li>
  
        </ol>
        <h3>Here’s how you can participate in cash tournaments  </h3>
        <ol>
            <li className="li-points">Open the Rummyludo app and click on the “Tournaments” tab.
            </li>
            <li className="li-points">There are many types of cash tournaments - Sit N Go, Points, Deals, Millionaire Series, etc.
            </li>
            <li className="li-points">Browse through the details of tournaments and choose the one you want to participate in.
            </li>
            <li className="li-points">Click on the “Join Now” button to register for the tournament and wait for it to start.
            </li>
        
        </ol>
      
       </div>
       <div className="free-tournaments">
        <h1>Free Tournaments        </h1>
        <p className='para'> You do not need to pay an entry fee to participate in a free tournament. All you need to do is register for it.
        </p>
        <h3>There are 2 types of free rummy tournaments on Rummyludo
        </h3>
        <ol>
            <li className="li-points"> Daily free tournaments: There’s a free tournament every hour on Rummy ludo. All you need to do is register for it and wait for it to start.
            </li>
            <li className="li-points">
              Saturday Bumper Cash: Our flagship free tournament is held every Saturday. When it comes to free tournaments, SBC is our biggest one with a prize pool of ₹18 lakh.
            </li>
        </ol>
        <h3>How to participate in free tournaments      ?  </h3>
        <ol>
            <li className="li-points">
            Open the RummyLudo app and click on the “Tournaments” tab.

            </li>
            <li className="li-points">
            Click on the “Free tourney” section to view all free tournaments.

            </li>
            <li className="li-points">
            Browse through the details of tournaments and choose the one you want to participate in.

            </li>
            <li className="li-points">
            Click on the “Join Now” button to register for the tournament and wait for it to start.
            </li>
        </ol>
       </div>

       <div className="milinerour-tournaments">
        <h1>Millionaire Tournament        </h1>
        <p className='para'>One of the most liked tournaments of RummyLudo is the Millionaire Tournament with the biggest prize pool that runs into lakhs. This tournament runs for a month with three different stages:        </p>
     <ol>
        <li className="li-points"><span className='fw-bold'> Shooter :</span> Entry Price of ₹10/₹20 to win ticket for satellite tournaments. Move through multiple rounds of Deals Rummy gameplay to become one of the winners to get a FREE TICKET to the Millionaire satellite.
        </li>
        <li className="li-points"><span className='fw-bold'>  Satellite :</span> A satellite tournament in rummy is a smaller qualifying event that offers players a chance to win entry into larger, high-stakes tournaments without paying the full entry fee. Instead of direct cash prizes, winners of satellite tournaments receive tickets or free entries to main events, which typically have much larger prize pools. Satellite tournaments are an excellent way for players to access big tournaments at a lower cost, test their skills in a competitive setting, and potentially compete for significant rewards. These events are especially popular in online rummy platforms, giving players of all levels an affordable pathway to prestigious tournaments.Entry Price of Rs.100 to win a ticket for Daily finale. Move through multiple rounds of Deals Rummy gameplay to become one of the winners to get a FREE TICKET to the Daily finale.

        </li>
        <li className="li-points"><span className='fw-bold'>  Daily Finale:</span> Move through 3 rounds of Deals Rummy gameplay to become one of the winners to get a FREE TICKET to the Millionaire Weekly Finale that takes place on Saturdays!

        </li>
        <li className="li-points"><span className='fw-bold'>  MEGA FINALE:</span> This is the MEGA FINALE that takes place at the end of the week and has a huge prize pool running into lakhs.

        </li>
     </ol>
       </div>
       <div className="club-tournaments">
        <h1>Club Tournaments        </h1>
        <p className='para'>These tournaments are exclusively for different club members of RummyLudo, such as 'Loyalty Club Tournament' and 'Scratch & Win Tournament'. The players must belong to the specific club to enter and play these tournaments.
        </p>
     <h3>How to join any tournament   ?  </h3>
     <p className='para'>It’s easy to join RummyLudo tournaments. Just follow these simple steps and you will be on your way to have a great time & earn a lot of money.
     </p>
     <ol>
        <li className="li-points">
        Go to Lobby by login or registration on the top navigation panel and select the “Tournaments” tab on the screen.

        </li>
        <li className="li-points">
        All tournaments (both cash and free) are displayed here and you can select the one that you want to join.

        </li>
        <li className="li-points">
        In the corresponding list of tournaments, simply click on the “Join Now” button for a tournament that you wish to join.

        </li>
     </ol>
   
     
       </div>

       <div className="culture-tournaments">
       <h3>Details of RummyLudo's Tournaments </h3>
        <ol>
            <li className="li-points">
            The System randomly places players across multiple tables based on the number of players who join a tournament.

            </li>
            <li className="li-points">
            There is a maximum & minimum number of participants required for every tournament.

            </li>
            <li className="li-points">
            The maximum number of players on a table will be 6.

            </li>
            <li className="li-points">
            	The value of the prize pool may vary based on the number of players who register for the tournament.

            </li>
            <li className="li-points">
            The tournaments are on a first-come-first-serve basis only.

            </li>
            <li className="li-points">
            If the registered player does not show up at the time of the tournament, the game will start with his/her seat reserved on autoplay mode.

            </li>
            <li className="li-points">
            If this player misses their first turn of the first deal, they will be dropped from the deal.

            </li>
            <li className="li-points">
            This player will continue to remain in a dropped state for subsequent deals unless they join back.

            </li>
            <li className="li-points">
            If a player misses 3 consecutive turns in a deal, they will be dropped from the deal.

            </li>
            <li className="li-points">
            If he/she comes before the drop, then the player can continue the game from that point on.

            </li>
            <li className="li-points">
            When a player registers (whether seats are available or waitlisted), the registration fees will be deducted from their account.

            </li>
            <li className="li-points">
            Players can even register when all seats are full. They will get waitlisted strictly on a first come first serve basis.

            </li>
            <li className="li-points">
            Any player who has registered for a tournament may withdraw their registration before the registrations close. In this case, the player who is at waitlist position 1 will get the seat.

            </li>
            <li className="li-points">
            Waitlisted players who don’t get a seat will get a refund of the registration fee when the registrations close for the tournament.

            </li>
            <li className="li-points">
            Management reserves the right to cancel or modify the tournament prize pool or any other element without any prior information to the player.

            </li>
            <li className="li-points">
            If the tournament is canceled, then the full fees will be refunded. If a player registered using a tournament ticket, the ticket will be refunded and will be available for use.

            </li>
            <li className="li-points">
            If the registered player is online on our app and playing any other game, a toast will be displayed to them indicating that the tournament is about to begin.
            </li>
           
        </ol>
       </div>

       <div className="my-4">
    <h1  className='mb-4' >Tournament Types</h1>
    <div className="table-responsive">
      <table className="table table-bordered table-hover table-light table-striped">
        <thead className="thead-dark">
          <tr className='text-center '>
            <th style={{backgroundColor:'#D2B805'}}>Tournament Type</th>
            <th style={{backgroundColor:'#D2B805'}}>Description</th>
            <th style={{backgroundColor:'#D2B805'}}>Entry Requirement</th>
            <th style={{backgroundColor:'#D2B805'}}>Ideal For</th>
            <th style={{backgroundColor:'#D2B805'}}>Key Benefits</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Freeroll Tournaments</td>
            <td>No entry fee tournaments offering real rewards or prizes.</td>
            <td>Free</td>
            <td>Beginners and budget players</td>
            <td>Risk-free with real rewards</td>
          </tr>
          <tr>
            <td>Cash Tournaments</td>
            <td>Paid-entry tournaments with cash prizes based on the prize pool.</td>
            <td>Entry fee required</td>
            <td>Experienced players</td>
            <td>High cash rewards</td>
          </tr>
          <tr>
            <td>Satellite Tournaments</td>
            <td>Qualifying events for entry into larger tournaments without high entry fees.</td>
            <td>Small entry fee or free</td>
            <td>Players aiming for big events</td>
            <td>Affordable access to high-stakes events</td>
          </tr>
          <tr>
            <td>Knockout Tournaments</td>
            <td>Players compete in rounds, with elimination after each round.</td>
            <td>Entry fee or free</td>
            <td>Competitive players</td>
            <td>Thrilling, fast-paced, and strategic</td>
          </tr>
          <tr>
            <td>Points Rummy Tournaments</td>
            <td>Each game ends when a player reaches 0 points or minimum score.</td>
            <td>Entry fee varies</td>
            <td>Players seeking quick games</td>
            <td>Quick rounds, rewarding skilled players</td>
          </tr>
          <tr>
            <td>Deal Rummy Tournaments</td>
            <td>Fixed number of deals, and players’ scores are compared at the end.</td>
            <td>Entry fee required</td>
            <td>Strategic players</td>
            <td>Fixed number of deals, skill-focused</td>
          </tr>
          <tr>
            <td>Pool Rummy Tournaments</td>
            <td>Players stay in the game until they reach a specific point limit.</td>
            <td>Higher entry fee</td>
            <td>Long-duration players</td>
            <td>Big prize pools, endurance-based</td>
          </tr>
          <tr>
            <td>Practice Tournaments</td>
            <td>No prizes, designed purely for practice and skill-building.</td>
            <td>Free</td>
            <td>Beginners</td>
            <td>Learn without financial risk</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
    </div>
    </div>
   </>
  )
}
