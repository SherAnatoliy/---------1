
import { SCSection3 } from './section.style';
import { Heading } from '../../Typography/Heading';
import { useState } from 'react';
export const Section3 = () => {
    const [activeButton, setActiveButton] = useState(null);

    const handleClick = (buttonId) => {
      setActiveButton(buttonId === activeButton ? null : buttonId);
    };
    return(
        <SCSection3>
               <section className="section_3">
        <div className="h2_section3">
          <Heading headingType="h2" headingText="Discover how we can help" />
        </div>
        <div className="section3_button">
          <button
            className={`my-button ${activeButton === 1 ? "active" : ""}`}
            onClick={() => handleClick(1)}
          >
            Buying
          </button>
          <button
            className={`my-button ${activeButton === 2 ? "active" : ""}`}
            onClick={() => handleClick(2)}
          >
            Renting
          </button>
          <button
            className={`my-button ${activeButton === 3 ? "active" : ""}`}
            onClick={() => handleClick(3)}
          >
            Selling
          </button>
        </div>
        <div className="section3_cards">
          <div
            className={`section3_1card ${activeButton === 1 ? "active" : ""}`}
          >
            <div className="section3_card">
              <div className="section3_card1">
              <a className="section3_card11" href="#">
                <div className="section3_card1_top">

                <div className="section_card_top">
                  <Heading
                    headingType="h3"
                    headingText="Find out how much you can afford"
                  />
                  <img
                    src="../../../public/Img/Main/section3/spot-badge-cash-reward.svg"
                    alt="Card 1"
                  />
                </div>
                <div className="section3_card_middle">
                  <p>
                    We'll help you estimate your budget range. Save to your
                    buyer profile to help in your search.
                  </p>
                </div>
                </div>
                <div className="section3_card_bottom">
                Try our affordability calculato
                </div>
                </a>
              </div>
              <div className="section3_card2">
              <a className="section3_card11" href="#">
                <div className="section_card_top">
                  <Heading
                    headingType="h3"
                    headingText="Understand your monthly costs"
                  />
                  <img src="../../../public/Img/Main/section3/spot-calculator.svg" alt="Card 2" />
                </div>

                <div className="section3_card_middle">
                  <p>
                    Get an in-depth look at what your monthly and closing costs
                    will look like based on your financial situation and goals.
                  </p>
                </div>
                <div className="section3_card_bottom">
                Try our mortgage calculator
                </div>
                </a>
              </div>

              <div className="section3_card3">
              <a className="section3_card11" href="#">
                <div className="section_card_top">
                  <Heading
                    headingType="h3"
                    headingText="Get help with your down payment"
                  />
                  <img src="../../../public/Img/Main/section3/spot-money-stack.svg" alt="Card 3" />
                </div>
                <div className="section3_card_middle">
                  <p>
                    You may be able to buy a home with just 3.5% down. Saving
                    for that can be challenging–down payment assistance programs
                    can help.
                  </p>
                </div>
                <div className="section3_card_bottom">
                Find down payment help
                </div>
                </a>
              </div>
            </div>
          </div>
          <div
            className={`section3_2card ${activeButton === 2 ? "active" : ""}`}
          >
            <div className="section3_card">
              <div className="section3_card1">
              <a className="section3_card11" href="#">
                <div className="section_card_top">
                  <Heading
                    headingType="h3"
                    headingText="Rent with the option to buy"
                  />
                  <img src="../../../public/Img/Main/section3/spot-rent.svg" alt="Card 1" />
                </div>
                <div className="section3_card_middle">
                  <p>
                    Home Partners of America will buy a home that you love and
                    lease it to you with the option to buy, rent, or walk away
                    without penalty.
                  </p>
                </div>
                <div className="section3_card_bottom">
                Check program availability
                </div>
                </a>
              </div>
              <div className="section3_card2">
              <a className="section3_card11" href="#">
                <div className="section_card_top">
                  <Heading
                    headingType="h3"
                    headingText="Find out if it's better to rent or buy"
                  />
                  <img src="../../../public/Img/Main/section3/spot-arrows.svg" alt="Card 2" />
                </div>
                <div className="section3_card_middle">
                  <p>
                    Try our rent or buy calculator to determine if buying or
                    renting a home makes more financial sense for your
                    situation.
                  </p>
                </div>
                <div className="section3_card_bottom">
                Try our rent or buy calculator
                </div>
                </a>
              </div>
              <div className="section3_card3">
              <a className="section3_card11" href="#">
                <div className="section_card_top">
                  <Heading
                    headingType="h3"
                    headingText="Save time with a renter profile"
                  />
                  <img src="../../../public/Img/Main/section3/spot-profile.svg" alt="Card 3" />
                </div>
                <div className="section3_card_middle">
                  <p>
                    Simplify the home search process with an Avail renter
                    profile. Create yours for free to share with multiple
                    landlords.
                  </p>
                </div>
                <div className="section3_card_bottom">
                Create a profile
                </div>
                </a>
              </div>
            </div>
          </div>
          <div
            className={`section3_3card ${activeButton === 3 ? "active" : ""}`}
          >
            <div className="section3_card">
              <div className="section3_card1">
                 <a className="section3_card11" href="#">
                <div className="section_card_top">
                  <Heading headingType="h3" headingText="Buy now, sell later" />
                  <img src="../../../public/Img/Main/section3/spot-pending.svg" alt="Card 1" />
                </div>
                <div className="section3_card_middle">
                  <p>
                    Skip the repairs and showings. Our partners can help you buy
                    your new home first, then sell your old one.
                  </p>
                </div>
                <div className="section3_card_bottom">
              Try our affordability calculator
                </div>
              </a>
              </div>
              <div className="section3_card2">
              <a className="section3_card11" href="#">
                <div className="section_card_top">
                  <Heading
                    headingType="h3"
                    headingText="Track your home value"
                  />
                  <img src="../../../public/Img/Main/section3/spot-property-making-an-offer.svg" alt="Card 2" />
                </div>
                <div className="section3_card_middle">
                  <p>
                    See your RealEstimate℠ valuation information over time
                    compared to homes in your area.
                  </p>
                </div>
                <div className="section3_card_bottom">
                Try our mortgage calculator
                </div>
                </a>
              </div>
              <div className="section3_card3">
              <a className="section3_card11" href="#">
                <div className="section_card_top">
                  <Heading
                    headingType="h3"
                    headingText="Get offers for your home"
                  />
                  <img src="../../../public/Img/Main/section3/spot-sell.svg" alt="Card 3" />
                </div>
                <div className="section3_card_middle">
                  <p>
                    Visit Seller’s Marketplace to find out how you can sell
                    without listing or stay in your home while you finance the
                    purchase of your next one.
                  </p>
                </div>
                <div className="section3_card_bottom">
                Find down payment help
                             </div>
                </a>
              </div>
            </div>
          </div>
        </div>


      </section>
        </SCSection3>
    )
}
   