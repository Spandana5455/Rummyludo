import React from 'react';
import './PoolRummy.css'
import { useNavigate } from 'react-router-dom';

export default function Points() {
    const navigate = useNavigate()
    return (

        <>
            <div className='container'>
                <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb" className='mt-4 content-pading'>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item" onClick={() => { navigate('/') }} style={{ cursor: 'pointer' }}><span>Home</span></li>
                        <li className="breadcrumb-item active" aria-current="page"> Points Rummy</li>
                    </ol>
                </nav>

                <div className='content-pading' >
                    <h1>What is Points Rummy ? </h1>
                    <p className="para">
                        Points Rummy is a popular and traditional variant of rummy played between 2 to 6 players.
                        Points Rummy is one of the fastest formats of 13 card rummy .Players aim to form valid sequences and sets with their 13 cards, minimizing the points in their hand. Key features include face cards, number cards, and jokers. The game ends when the winning player forms at least two valid sequences, and the losing player's points are added to their total score. Points Rummy is fast-paced, strategic, and quick-decisive, making it a favorite for competitive and skillful players.
                    </p>
                    <h3>How to Play and Rules of Points Rummy ?</h3>

                    <ol>
                        <li className="li-points">Points Rummy is a popular variation of the classic rummy game, played between 2 to 6 players. The objective is to form valid sequences and sets while minimizing the points in your hand. The game setup includes a standard 52-card deck with jokers, 13 cards each, and card values such as face cards, numbers, and jokers. Players aim to eliminate as many ungrouped cards as possible to avoid high points when another player declares.</li>
                        <li className="li-points">
                            The game involves drawing and discarding phases, with the goal being to improve your hand and form valid sequences and sets. To declare, a player must have at least one pure sequence and one or more sets or impure sequences. The game can continue for several rounds, with the player with the lowest score at the end of all rounds being the winner.
                        </li>
                        <li className="li-points">
                            Key rules include declaring a valid hand with at least one pure sequence and a combination of sets or impure sequences. If a player declares with an invalid hand, they receive a penalty of 60 points in 61 Pool or 80 points in 101/201 Pool. Players may drop the game in the initial or middle stage but incur penalties for dropping early.
                        </li>
                        <li className="li-points">
                            Tips for playing Points Rummy include forming a pure sequence first, using jokers wisely, and watching other players to anticipate their strategies and avoid forming combinations that will help them win. Points Rummy is a fast-paced, competitive rummy variant that requires strategy, focus, and quick decision-making.
                        </li>
                    </ol>

                    <h3>How the Score is Calculated in Points Rummy ? </h3>
                    <p className="para"> <span className="fw-bold">In Points Rummy</span>, the winner of the round has 0 points, while the losing players are awarded points based on the total value of their ungrouped cards. Here's a breakdown of the card values</p>
                    <ol>
                        <li className="li-points"><span className="fw-bold"></span>	Face Cards (King, Queen, Jack) and Aces: 10 points each</li>
                        <li className="li-points"><span className="fw-bold"></span>	Numbered Cards (2 to 10): Equal to their face value</li>
                        <li className="li-points"><span className="fw-bold"></span>	Jokers (printed and wild): 0 points</li>
                    </ol>

                    <h3>Example</h3>
                    <p className="para">Let’s assume you have the following hand at the end of the round</p>

                    <ol>
                        <li className="li-points"><span className="fw-bold"></span>•	A♣, K♣, Q♣, J♣: These are part of valid sequences.</li>
                        <li className="li-points"><span className="fw-bold"></span>•	2♠, 3♠, J🃟: This forms an impure sequence.</li>
                        <li className="li-points"><span className="fw-bold"></span>•	7♥, 7♦, 7♠: This is a valid set.</li>
                        <li className="li-points"><span className="fw-bold"></span> •	Ungrouped Cards: 4♣, 8♣, 3♥.</li>
                    </ol>
                    <p className="para">The ungrouped cards total = 4 + 8 + 3 = 15 points.</p>
                    <h3>Calculating Winnings</h3>
                    <p className="para">Assume there are 6 players, and the scoreboard looks like this</p>
                    <div className="d-flex justify-content-center">
                        <div className="table-responsive w-100">
                            <table className="table table-bordered table-striped table-hover table-light">
                                <thead className="table-dark">
                                    <tr>
                                        <th style={{ backgroundColor: '#D2B805' }} className='text-center'>Player</th>
                                        <th style={{ backgroundColor: '#D2B805' }} className='text-center'>Score</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Winner</td>
                                        <td>0 points</td>
                                    </tr>
                                    <tr>
                                        <td>Player A</td>
                                        <td>25 points</td>
                                    </tr>
                                    <tr>
                                        <td>Player B</td>
                                        <td>49 points</td>
                                    </tr>
                                    <tr>
                                        <td>Player C</td>
                                        <td>28 points</td>
                                    </tr>
                                    <tr>
                                        <td>Player D</td>
                                        <td>31 points</td>
                                    </tr>
                                    <tr>
                                        <td>Player E</td>
                                        <td>9 points</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <p className="para">
                        If the point value is ₹0.5, then the total points of the losing players are
                    </p>
                    <p className="para">	25 + 49 + 28 + 31 + 9 =<span className="fw-bold"> 142 points</span></p>
                    <p className="para">The winner will receive </p>
                    <p className="para">	142 points × ₹0.5 = ₹71 (before platform’s fee)</p>
                    <p className="para">So, the winner's final amount will be<span className="fw-bold"> ₹71 minus the platform’s fee.</span> </p>
                    <h3>How Dropping Works in Points Rummy ? </h3>
                    <p className="para">Each participant in RummyLudo's Points Rummy can choose to drop throughout their turn. The drop option, however, is only accessible if the player hasn't selected a card from the closed or open deck yet during that round.</p>
                    <p className="para">These are the many kinds of drops Types</p>


                    <div className="pool-main-container">
                        <div className="pool-cards">
                            <div className="imgBx">
                                <div>
                                    {/* <img style={{width:"100px"}} src="https://softwareontheroad.com/static/devops-0ee510e903c87fa54a7f2646c3e5765a.png"/> */}
                                    <h2>Halfway Drop</h2>
                                </div>
                            </div>
                            <div className="overlay"></div>
                            <div className="content">
                                <h2 className=' mb-3'>Halfway Drop </h2>


                                <p >A player loses 40 points if they drop after their first turn.</p>
                                <p > If players feel they are at a disadvantage after seeing the plays of others, they frequently use this to reduce their losses.</p>


                            </div>
                        </div>
                        <div className="pool-cards">
                            <div className="imgBx">
                                <div>
                                    {/* <img style={{width:"100px"}} src="https://softwareontheroad.com/static/devops-0ee510e903c87fa54a7f2646c3e5765a.png"/> */}
                                    <h2>Initial Drop</h2>
                                </div>
                            </div>
                            <div className="overlay"></div>
                            <div className="content">
                                <h2 className=' mb-3'>Initial Drop</h2>


                                <p >	 A player loses 20 points if they drop on their first turn.</p>
                                <p >	 This option is usually used by players who don't want to continue after having a bad hand (for example, no sequences or too many jokers).</p>


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
                                <h2 className='mb-4'>Repeated Misses</h2>
                                <p>	 A halfway drop occurs when a predetermined number of consecutive rotations are missed.
                                    The default restriction on RummyLudo is two consecutive misses, after which the player's score is increased by 40 points. The user options allow you to change this restriction.
                                </p>

                            </div>
                        </div>
                        <div className="pool-cards">
                            <div className="imgBx">
                                <div>
                                    {/* <img style={{width:"100px"}} src="https://www.edenprojet.com/images/img_home/startup.png"/> */}
                                    <h2>Untrue Declaration</h2>
                                </div>
                            </div>
                            <div className="overlay"></div>
                            <div className="content">
                                <h2 className='mb-4'>201 Pool Rummy</h2>
                                <p> A player loses 80 points and is removed from the game if they make an incorrect declaration.
                                    Beginning to Play Points Rummy
                                    .</p>
                                <p>	 You are prepared to begin playing Points Rummy now that you are aware of the drop choices and regulations. Just visit RummyLudo, get the app, and begin playing right now!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
