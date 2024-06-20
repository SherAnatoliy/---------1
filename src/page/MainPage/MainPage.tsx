
// import React, { useState } from "react";
import "./MainPage.scss";
import { Header } from "../../Components/MainPage/Header/Header";
import { Search } from "../../Components/MainPage/Search/Search";
import { Heading } from "../../Components/Typography/Heading";
import { PictureSection2 } from "../../Components/MainPage/PictureSection2/PictureSection2";
import { Section3 } from '../../Components/MainPage/section3/section3';
import { Section4 } from "../../Components/MainPage/section4/section4";
// import AppButton from '../../Components/Button/Button';

export const MainPage: React.FC = () => /* const [activeButton, setActiveButton] = useState(null);*/ /* const handleClick = (buttonId) => {*/ /*   setActiveButton(buttonId === activeButton ? null : buttonId);*/ /* };*/ (
  <>
    <Header />
    <Search />
    <section className="section_2">
      <div className="h2_section2">
        <Heading headingType="h2" headingText="Browse homes in Miami, FL" />
      </div>
      <PictureSection2 />
    </section>
    <section className="section_3">
      <Section3 />
    </section>
    <section className="section4">
      <Section4/>

    </section>
    <section className="section5">
      <div className="section5_top">
        <div className="section5_top_left"><img src="" alt="" /></div>
        <div className="section5_top_right">
          <span></span>
          <span></span>
          <a href="">
            <span></span>
          </a>
          <button><span></span></button>
        </div>
      </div>
      <div className="section5_bottom">
        <div className="section5_bottom_left"><img src="" alt="" /></div>
        <div className="section5_bottom_right">
          <p><span></span></p>
          <input type="text" />
        </div>
      </div>
    </section>
  </>
);

export default MainPage;
