
// import React, { useState } from "react";
import "./MainPage.scss";
import { Header } from "../../Components/MainPage/Header/Header";
import { Search } from "../../Components/MainPage/Search/Search";
import { Heading } from '../../Components/Typography/Heading';

import { Section3 } from '../../Components/MainPage/section3/section3';
import { Section4 } from "../../Components/MainPage/section4/section4";
import { Section5 } from "../../Components/MainPage/section5/section5";
import { Section6 } from "../../Components/MainPage/section6/section6";
import { Footer } from "../../Components/MainPage/footer/footer";

import { PictureSection2 } from "../../Components/MainPage/PictureSection2/PictureSection2";

export const MainPage: React.FC = () => (
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

    <Section5/>
    <Section6 />
    </section>
<Footer/>

  </>
);

export default MainPage;
