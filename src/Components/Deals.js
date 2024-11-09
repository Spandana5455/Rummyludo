import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Deals() {
     const navigate=useNavigate()
    return (
        <div className='container'>
            <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb" className='mt-4 content-pading'>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item" onClick={()=>{navigate('/')}} style={{cursor:'pointer'}} ><span>Home</span></li>
                    <li className="breadcrumb-item active" aria-current="page"> Deals Rummy</li>
                </ol>
            </nav>

            <div className='content-pading' >
                <h1>How to Play Deals Rummy ? </h1>
                <p className="para">With online rummy now widely accessible, it’s easier than ever to connect with other players on a rummy app like RummyLudo and even compete for exciting prizes. If you’re someone looking to enjoy an engaging format of rummy, Deals Rummy on RummyLudo is a fantastic choice.</p>
                <p className="para">Deals Rummy is one of the most popular rummy variants, requiring skill, strategic thinking, and a deep understanding of the game. Played with 13 cards, this variation is enjoyed all across India. Players must stay focused, strategize, and make quick calculations to excel, which makes Deals Rummy thrilling and dynamic. This excitement is exactly why major platforms, like RummyLudo, proudly offer this variant for their users.</p>
                <h2>How to Play and the Rules of Deals Rummy ?</h2>
                <p className="para">
                    In a Deals rummy game, there are often two to six players. This format differs from previous variations in that each player is given a fixed quantity of chips at the start of the game. A set amount of deals will be required of players using these chips. The winner of each deal the first player to make a legitimate declaration will also get the chips from their rivals. After all of the predetermined transactions are completed, the person with the most chips will be proclaimed the winner. Each chip's worth is established prior to each game, and they serve as the game's virtual money.
                </p>
                <h3>What Sets Deals Rummy Apart ?</h3>
                <p className="para">
                    RummyLudo Game Variants and Drop Options
                </p>
                <ol>
                    <li className="li-points"> 2-player, 1-deal variants lack drop option.</li>
                    <li className="li-points"> 6-player Deals Rummy game allows drop at any time.</li>
                    <li className="li-points"> Fixed Buy-In required for all participants, contributing to prize pool.</li>
                    <li className="li-points"> Increases game excitement and competitiveness.</li>
                </ol>
                <h1>How to Score is Calculated in Deals Rummy ? </h1>
                <p className="para">
                    In RummyLudo Deals Rummy, the player with the most chips at the end of all deals is the game’s winner. After each deal, the deal winner receives chips equal to the total points of all losing players. Points are counted only for ungrouped cards, while valid groups carry 0 points.
                </p>
                <h3>Card Values in RummyLudo </h3>
                <ol>
                    <li className="li-points"><span className="fw-bold">Face Cards (King, Queen, Jack): </span>	10 points each</li>
                    <li className="li-points"> <span className='fw-bold'>	Numbered Cards (2 to 10): </span>Same as their face value</li>
                    <li className="li-points"> <span className='fw-bold'>Jokers (both printed and wild):</span>	 0 points each</li>
                    <li className="li-points"> <span className='fw-bold'>	Ace Cards:</span> 10 points</li>

                </ol>
                <h3>Example</h3>
                <p className="para">
                    If your final hand includes
                </p>
                <ol>
                    <li className="li-points"><span className="fw-bold">Pure Sequence:</span>	 7♥ 8♥ 9♥ 10♥</li>
                    <li className="li-points"><span className="fw-bold">	Impure Sequence:</span> A♠ K♠ Joker</li>
                    <li className="li-points"><span className="fw-bold">Set:</span>	 3♥ 3♠ 3♦</li>
                    <li className="li-points"><span className="fw-bold">Ungrouped Cards:</span>	 5♣ 9♣ J♥</li>
                </ol>
                <p className="para">
                    The points from ungrouped cards (5 + 9 + 10 = 24) are added to the winner’s total from all players at the end of the deal. The player with the highest chip total at the end of the game is declared the winner.
                </p>
                <h3>Drop Option in RummyLudo Deals Rummy </h3>
                <p className="para">The drop penalties in RummyLudo’s 6-player Deals Rummy game are as follows</p>
                <ol>
                    <li className="li-points"><span className="fw-bold">	First Drop: </span> 20 points</li>
                    <li className="li-points"><span className="fw-bold">Middle Drop:</span>	 40 points</li>
                    <li className="li-points"><span className="fw-bold">Invalid Declaration:</span>	 80 points</li>
                </ol>
                <p className="para"><span className="fw-bold text-danger">Note:</span> In RummyLudo, there is no option to drop out of a 2-player Deals Rummy game.</p>
                <h3>Penalty for Missing 3 Moves</h3>
                <p className="para">Any player who misses three consecutive moves on RummyLudo is eliminated from the game immediately. Missing three movements results in a 40-point penalty, and this is considered a "middle" drop.</p>

                <h3>How Chips Are Allocated at the Beginning of the Game</h3>
                <p className="para">At the beginning of a Deals game, the identical number of chips are given to each participant. (amount of transactions) × (Maximum amount of points one may lose) is how it is computed. </p>
                <p className="para">Therefore, each player would begin with 3 × 80 = 240 chips in a 6-person, 3-deals game.</p>
                <h3>How Chips Are Settled at the End of the Game</h3>
                <p className="para">Here is how to score in a Deals Rummy game on RummyLudo.</p>
            </div>
        </div>
    )
}
