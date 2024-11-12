import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function FairPlay() {
  const navigate = useNavigate()
  return (

    <>
      <div className='container'>
        <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb" className='mt-4 content-pading'>
          <ol className="breadcrumb">
            <li className="breadcrumb-item" onClick={() => { navigate('/') }} style={{ cursor: 'pointer' }}><span>Home</span></li>
            <li className="breadcrumb-item active" aria-current="page"> Fair Play Policy</li>
          </ol>
        </nav>
        <div className='content-pading'>
          <div className='fairplay'>
            <h1 className='mt-4'>Fair Play Policy</h1>
            <p className="para">
              A fair play violation (“Fair Play Violation”) means any activity of a User that violates this Policy, and includes:
            </p>
            <ol>
              <li className="li-points">
                activity that uses unfair means to manipulate the outcome of a Game on the Platform, irrespective of whether this is in favour of the user adopting such means.
              </li>
              <li className="li-points">
                activity that is fraudulent, illegal, or unfair activity, as determined by RummyLudo in its sole discretion.
              </li>
              <li className="li-points">
                activity that is intended solely to transfer funds from one person to another person, or between distinct sources, thereby amounting to money transferring.
              </li>
              <li className="li-points">
                activity that involves collusion between two or more players to achieve a result during a Game, thereby amounting to syndicate playing
              </li>
              <li className="li-points">
                activity that falls under the Prohibited Conduct set out in Clause 2 below.
              </li>
            </ol>
          </div>
          <div className="Prohibited">
            <h3>Prohibited Conduct</h3>
            <p className="para">The following conduct is expressly prohibited on the Platform</p>

            <ol>
              <li className="li-points">
                Use of multiple accounts to play the same Game or at the same table, as may be applicable.
              </li>
              <li className="li-points">
                Use or availing of any form of external assistance to play a Game on the Platform.
              </li>
              <li className="li-points">	Impersonating any person or entity or misrepresenting Your affiliation with any person or entity.</li>
              <li className="li-points">
                Accessing the registered account of other Users without their permission.
              </li>
              <li className="li-points">
                Misrepresenting the identity or source of funds.
              </li>
              <li className="li-points">
                Intentionally losing a particular round during a Game on the Platform in order to deliberately transfer winnings to another User.
              </li>
              <li className="li-points">
                2.1.7 Use of unauthorized components, create or use cheats, exploits, bots, hacks, or any other third party software designed to modify, intercept, decrypt, or mine the Platform in any manner.
              </li>
              <li className="li-points">
                2.1.8 Dissemination or uploading of spam, unlawful content, or any unauthorized communication to other players on the Platform, or employees of RummyLudo.
              </li>
              <li className="li-points">
                Use of the Platform as a means of money transfer between persons or separate accounts, or any conduct that may amount to money laundering or other unlawful activities under Indian law.
              </li>
              <li className="li-points">
                Uploading any content to the Platform, or registering a user ID, which is racist, casteist, profane, vulgar, offensive, or unlawful in any manner
              </li>
            </ol>
            <p className="para">
              Users must ensure that all KYC documentation submitted to Us is accurate and valid, and the submission of any false, forged, or other fraudulent documentation shall invite immediate termination of the User account, along with related legal action.
            </p>
            <p className="para ">
              All communication must be strictly pertaining to matters related to the Platform, and Users found to be indulging in offensive or unlawful communication with any person on the Platform may be terminated and barred from accessing the Platform. The following types of communication are specifically prohibited.
            </p>
            <ol start='11'>
              <li className="li-points">
                Vulgar or abusive language, racist remarks, offensive comments about religion or caste.
              </li>
              <li className="li-points">
                Solicitation in any form by any player via the chat, begging, pestering, and causing a nuisance of any sort.
              </li>
              <li className="li-points">
                Discussion regarding the purchase or sale of any in-app currency, or solicitation for the same.
              </li>
              <li className="li-points">
                Flooding of chat window with recurring messages, or any sort of persistent or constant unwanted communication.
              </li>
              <li className="li-points">	Advertising or promotional activity, or attempt to promote products or services of third parties.</li>
              <li className="li-points">
                Malicious or defamatory content about the Platform or any of its other users.
              </li>
              <li className="li-points">
                Revelation of personal details like email address, contact numbers, postal address, etc..
              </li>
            </ol>
          </div>

          <div className="consequencys">
            <h1>Consequences of Fair Play Violations</h1>
            <p className="para">
              All games on the Platform are monitored for Fair Play Violations, and detection of a Fair Play Violation may lead to the immediate freezing of the User accounts involved, including the funds therein until the matter is resolved.
            </p>
            <p className="para">
              3.2 Users found engaging in Fair Play Violation may be permanently barred from accessing the Platform, their accounts blocked, and any funds therein frozen in accordance with this Policy. This includes the Users who profited from the Fair Play Violation and Users who aided or colluded in committing the Fair Play Violation.
            </p>
            <p className="para">
              In the event, We believe or suspect that You have been engaged in Fair Play Violation
            </p>
            <ol>
              <li className="li-points">
                we will notify You of such breach/attempt to breach
              </li>
              <li className="li-points">
                We shall have the right to investigate and monitor Your registered Account and Your gameplay for such period of time as in Our reasonable opinion may be needed to investigate such breach which shall not be less than a period of 180 days from the date of notification of such breach. The balance funds of users guilty of Fair Play Violations will be frozen for a period of up to 180 days. Such investigation will cover all the games that the concerned User has played since the time of registering on the Platform
              </li>
              <li className="li-points">
                In the event that we, upon investigation are of the view that Your registered Account is or has been engaged in Fair Play Violations, then to the extent of the amount which is involved in such Fair Play Violations, We may
                <div>
                  <div className="li-points">3.1 forfeit the fund in Your registered Account.</div>
                  <div className="li-points">3.2 repatriate the amount to the Generally Affected User or individuals who have been affected by the Fair Play Violation.</div>
                  <div className="li-points">3.4 Levy a Fair Play violation fee of an amount up to an amount of ₹10,000 or 3 (three) times the entry fee paid by you for the game involving Fair Play Violation (whichever is higher) per instance of such Fair Play Violation. You agree that such a fee is not in the form of a penalty but is a reasonable and justifiable cost, manpower, technology, and loss of reputation that RummyLudo as a platform may suffer due to Your violation of the Fair Play Policy. The Fair Play violation fee may be debited from the funds in Your registered Account or in the event the balance in Your registered Account is not sufficient to cover the fee, we may raise a claim for such fee against You in accordance with applicable laws. Such fee may be in addition to any other legal proceeding the platform may take against you for the same instance of Fair Play Violation.</div>
                  <div className="li-points">
                    3.4 Where the review pursuant to a Fair Play Violation indicates any financial losses to a Genuinely Affected User, the amount of such loss, and further penalties that We may impose at its sole discretion, shall be recovered from the frozen funds of the concerned User; where such funds do not cover the due amounts, We retain all rights to legally pursue available remedies to recover such amounts. Balance funds shall be released to the User in accordance with applicable law.
                  </div>
                </div>
              </li>
              <p className="para mt-5">
                We reserve the right to review any game of any User at any point in time, and if any games are found to be in violation of this Policy, then strict penalties and actions will be taken as per this Policy. There is no time limitation on the detection and actioning of a Fair Play Violation on the Platform.
              </p>
              <p className="para">Where the review pursuant to a Fair Play Violation indicates any financial losses to a Genuinely Affected User, the amount of such loss, and further penalties that RummyLudo may impose at its sole discretion, shall be recovered from the frozen funds of the concerned User; where such funds do not cover the due amounts, RummyLudo retains all rights to legally pursue available remedies to recover such amounts. Balance funds shall be released to the User in accordance with applicable law.</p>
              <p className="para">
                If We have been instructed or made aware of a cyber fraud or any other fraudulent activity related to a User’s registered Account by a governmental, police, or any law enforcement authority or agency, then We reserve the right to (a) suspend Your registered Account; and (b) transfer any funds lying in Your registered Account to such Bank Account as may be instructed by the governmental, police or any law enforcement authority or agency. We also reserve the right to block any and all Withdrawals from Your registered Account upon instructions from the government, police, or any law enforcement authority or agency.
              </p>
            </ol>
          </div>

        </div>
      </div>

    </>
  )
}
