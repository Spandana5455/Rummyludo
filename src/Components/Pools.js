import React from 'react'
import './PoolRummy.css'
import { useNavigate } from 'react-router-dom'
export default function Pools() {
    const navigate = useNavigate()
    return (

        <>
            <div className='container'>
                <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb" className='mt-4 content-pading'>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item" onClick={() => { navigate('/') }} style={{ cursor: 'pointer' }}><span>Home</span></li>
                        <li className="breadcrumb-item active" aria-current="page"> Pool Rummy</li>
                    </ol>
                </nav>

                <div className='content-pading' >
                    <h1>What is Pool Rummy</h1>
                    <p className="para"><span className='fw-bold'>Pool Rummy </span>is a popular Rummy variant where players contribute to a common prize pool and play to avoid accumulating points. The goal is to have the lowest score by the end of the game.</p>
                    <p className="para">
                        In Pool Rummy, each player starts with 0 points, and points are added based on ungrouped cards at the end of each round. Players continue playing until they reach or exceed a set limit (like 101 or 201 points). Once a player crosses this limit, they are eliminated. The last player remaining wins the entire prize pool.
                    </p>
                    <p className="para">
                        Pool Rummy emphasizes skill, as players must strategize to keep their scores low while progressing through multiple rounds.
                    </p>
                    <h3>Different Types of Pool Rummy</h3>
                    <p className="para"><span className="fw-bold">Pool Rummy
                    </span> has several types based on the point limit for elimination. The three main variations are:</p>

                    <div className="pool-main-container">
                        <div className="pool-cards">
                            <div className="imgBx">
                                <div>
                                    {/* <img style={{width:"100px"}} src="https://softwareontheroad.com/static/devops-0ee510e903c87fa54a7f2646c3e5765a.png"/> */}
                                    <h2>61 Pool Rummy</h2>
                                </div>
                            </div>
                            <div className="overlay"></div>
                            <div className="content">
                                <h2 className=' mb-3'>61 Pool Rummy</h2>


                                <p >	In 61 Pool Rummy, players are eliminated once they accumulate 61 or more points.</p>
                                <p >	The game continues until only one player remains with fewer than 61 points. This version is typically quicker and more intense due to the lower point threshold.</p>


                            </div>
                        </div>
                        <div className="pool-cards">
                            <div className="imgBx">
                                <div>
                                    {/* <img style={{width:"100px"}} src="https://dafgrup.com.tr/images/icon/sketch.png"/> */}
                                    <h2>101 Pool Rummy</h2>
                                    <p></p>
                                </div>
                            </div>
                            <div className="overlay"></div>
                            <div className="content ">
                                <h2 className='mb-4'>101 Pool Rummy</h2>
                                <p>	In 101 Pool Rummy, players are eliminated when their points reach or exceed 101.</p>
                                <p>	This version offers a balance between strategy and speed, and the game tends to last longer than the 61 Pool Rummy.</p>
                            </div>
                        </div>
                        <div className="pool-cards">
                            <div className="imgBx">
                                <div>
                                    {/* <img style={{width:"100px"}} src="https://www.edenprojet.com/images/img_home/startup.png"/> */}
                                    <h2>201 Pool Rummy</h2>
                                </div>
                            </div>
                            <div className="overlay"></div>
                            <div className="content">
                                <h2 className='mb-4'>201 Pool Rummy</h2>
                                <p> 	In 201 Pool Rummy, the elimination limit is 201 points.</p>
                                <p>	This variant is the longest of the three and allows players more rounds to adjust their strategies, making it more suited for players who prefer extended gameplay.</p>
                            </div>
                        </div>
                    </div>

                    <div className="game-over">
                        <h3>Gameplay Overview</h3>
                        <p className="para"><span className="fw-bold">Objective : </span>
                            In all versions, players aim to avoid reaching the designated point limit (61, 101, or 201 points). Points are accumulated based on ungrouped cards left in a player’s hand after each deal.
                        </p>
                        <p className="para">
                            <span className="fw-bold">Elimination :</span> Players who reach or exceed the limit are eliminated from the game. The last player remaining with a score below the limit wins.
                        </p>

                        <h1>How to Play and Rules of Pool Rummy</h1>
                        <p className="para">
                            Each variation offers a unique pacing and challenge, allowing players to choose based on their preferred gameplay length and strategy.
                        </p>
                        <p className="para">
                            In Pool Rummy, players aim to avoid accumulating points and stay in the game. Each round, players form valid sequences and sets from 13 dealt cards. The goal is to make a valid declaration with at least two sequences, one of which must be pure (without jokers). The game ends when only one player remains, with others eliminated upon reaching a set point limit (such as 61, 101, or 201).
                        </p>
                        <h3>Basic Rules</h3>
                        <ol>
                            <li className="li-points">
                                Scoring: Points are based on ungrouped cards at the end of each round. Face cards (K, Q, J, A) are worth 10 points, numbered cards are face value, and jokers are 0 points.
                            </li>
                            <li className="li-points">
                                Drop Penalties: Players can choose to drop for a 10- to 30-point penalty, depending on the stage. An invalid declaration incurs an 80-point penalty.
                            </li>
                            <li className="li-points">
                                Winning: The last player under the set point limit wins the prize pool.
                            </li>
                        </ol>
                        <p className="para">
                            Pool Rummy emphasizes strategic play and careful scoring across multiple rounds.
                        </p>
                        <h3>Some rules to keep in mind</h3>
                        <ol>
                            <li className="li-points">
                                Player elimination occurs when score reaches 61, 101, or 201.
                            </li>
                            <li className="li-points"> Rejoin option is available if remaining players have less than 45, 79, or 174 points.</li>
                            <li className="li-points"> Points are equal to highest points held by an existing player + 1.</li>
                            <li className="li-points"> Dropping is a strategic move used when confidence is low.</li>
                            <li className="li-points"> Invalid declaration costs 60 points in 61 Pool and 80 points in 101 and 201 Pool.</li>
                            <li className="li-points"> Winner can split prize with others if only 2 or 3 players remain.</li>
                        </ol>

                        <h1>How the Score is Calculated in Pool Rummy</h1>
                        <p className="para"><span className="fw-bold">   In Pool Rummy on RummyLudo</span> ,the winner of each round scores 0 points, while losing players accumulate points based on ungrouped cards in their hands. Here’s how card values are calculated
                        </p>
                        <ol>
                            <li className="li-points"><span className="fw-bold">Face Cards (King, Queen, Jack) and Aces:</span>	 10 points each</li>
                            <li className="li-points"><span className="fw-bold">	Numbered Cards (2 to 10):</span> Same as their face value</li>
                            <li className="li-points"><span className="fw-bold">Jokers (both printed and wild):</span>	 0 points each</li>
                        </ol>
                        <p className="para">Let’s say at the end of a round, you hold the following cards </p>
                        <ol>
                            <li className="li-points">	2♥, 3♥, 4♥, 5♥ (pure sequence)</li>
                            <li className="li-points">	A♠, K♠, J🃟 (impure sequence)</li>
                            <li className="li-points">	8♥, 8♦, 8♠ (set)</li>
                            <li className="li-points"> Ungrouped cards: 4♣, 8♣, A♥</li>

                        </ol>
                        <p className="para">
                            The points for ungrouped cards (4 + 8 + 10) equal 22 points. These points are added to your total, and the game continues until a player reaches the maximum point limit.
                        </p>
                        <p className="para">If you make an invalid declaration, 60 points (in 61 Pool) or 80 points (in 101 and 201 Pool) will be added to your score.</p>
                        <p className="para">Ready to get started? Head over to RummyLudo, download the app, and start playing Pool Rummy today!</p>
                    </div>



                </div>
            </div>
        </>
    )
}
