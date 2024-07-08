
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

// import AppButton from '../../Components/Button/Button';
import { PictureSection2 } from "../../Components/MainPage/PictureSection2/PictureSection2";

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
      {/* <div className="section5">
      <div className="section5_top">
        <div className="section5_top_left"><img src="../../../public/Img/Main/section5main/hp-hero-mortgage-desktop-cube.avif" alt="" /></div>
        <div className="section5_top_right">
          <span className="section5_top_right_span1">Need a home loan? Get pre-approved</span>
          <span className="section5_top_right_span2">Find a lender who can offer competitive mortgage rates and help you with pre-approval.</span>
          <a className="section5_top_right_a" href="">
            <span>Get pre-approved now</span>
          </a>
          <div className="section5_top_right_bottom">
          <button><span>Advertising disclosure</span></button>
          </div>
      </div>
        </div>
     
      <div className="section5_bottom">
        <div className="section5_bottom_left">
          <Heading  headingType={"h3"} headingText={"Get local info"}/>
        <p><span>Does it have pet-friendly rentals? How are the schools? Get important local information on the area you're most interested in.</span></p>
        <div className="search">
        <ButtonSearch />
        <button className="section5_Search_delete"><img src="../../../public/Img/Main/cross_u6k2vj2ibjve.svg" alt="" /></button>
        <button className="section5_Seacrh_enter"><img src="../../../public/Img/Main/search_ssrbk50vdc29.svg" alt="" /></button>
        </div>

        </div>
        <div className="section5_bottom_right">
          <img src="../../../public/Img/Main/section5main/hp-local-desktop-cube.jpg" alt="" />
         
          </div>
          
        
      </div>
    </div> */}
    <Section5/>
    <Section6 />
    </section>
    {/* <footer className="footer">
      <div className="footer_top">
        <div className="footer_top_left">
        <img src="../../../public/Img/Main/footer/instagram_ee1dilgl1rtu.svg" alt="" />
        <img src="../../../public/Img/Main/footer/linkedin_nqhrx3vt0zxk.svg" alt="" />
        <img src="../../../public/Img/Main/footer/telegram_mi6xa29mpxfo.svg" alt="" />
        <img src="../../../public/Img/Main/footer/twitter_hctge6pmdlcp.svg" alt="" />
        <img src="../../../public/Img/Main/footer/whatsapp_oyhp15ic6yva.svg" alt="" />
        <img src="../../../public/Img/Main/footer/youtube_29ev7izymvcf.svg" alt="" />
        </div>
        <div className="footer_top_right">
          <img src="../../../public/Img/Main/footer/logo-realtor-real-estate.svg" alt="" />
          <img src="../../../public/Img/Main/footer/logo-house-logic.svg" alt="" />
        </div>
      

      </div>
      <div className="footer_main">
        <div className="footer2">
          <a href="">
            <span>About as</span>
          </a>
          <a href="">
            <span>Carees</span>
          </a>
          <a href="">
            <span>Accessibility</span>
          </a>
          <a href="">
            <span>Feedback</span>
          </a>
          <a href="">
            <span>Media room</span>
          </a>
          <a href="">
            <span>Ad Choices</span>
          </a>
          <a href="">
            <span>Advertice with us </span>
          </a>
          <a href="">
            <span>Agent support</span>
          </a>
          <a href="">
            <span>Privasy</span>
          </a>
          <a href="">
            <span>Terms</span>
          </a>
          <a href="">
            <span>Home Made</span>
          </a>
          <a href="">
            <span>Tech Blog</span>
          </a>
          <a href="">
            <span>Agent Blog</span>
          </a>
          <a href="">
            <span>Sitemap</span>
          </a>
          <a href="">
            <span className="footer_span_end">Do Not Sell or Share My Personal Information</span>
          </a>
        </div>
        <div className="footer1">
          <h2><span>Get the app</span></h2>
        </div>
        <div className="footer2">
          <img src="../../../public/Img/Main/footer/picto-apple-app-store-download-badge-white.svg" alt="" />
          <img src="../../../public/Img/Main/footer/picto-android-app-download-badge-white.svg" alt="" />
        </div>
        <div className="footer1">
          <h2><span>Products</span></h2>
        </div>
        <div className="footer2">
          <a href="">
            <span>Leads & Branding</span>
          </a>
          <a href="">
            <span>ListHub</span>
          </a>
          <a href="">
            <span>Moving.com</span>
          </a>
          <a href="">
            <span>International Properties</span>
          </a>
          <a href="">
            <span>Avail</span>
          </a>
          <a href="">
            <span>UpNest</span>
          </a>
          <a href="">
            <span>Builder Solutions</span>
          </a>
        </div>
        <div className="footer1">
          <h2><span>News Corp</span></h2>
        </div>
        <div className="footer2">
          <a href="">
            <span>Barrons</span>
          </a>
          <a href="">
            <span>Financial News</span>
          </a>
          <a href="">
            <span>Harper Collins</span>
          </a>
          <a href="">
            <span>Mansion Global</span>
          </a>
          <a href="">
            <span>MarketWatch</span>
          </a>
          <a href="">
            <span>New York Post</span>
          </a>
          <a href="">
            <span>REA Group</span>
          </a>
          <a href="">
            <span>Storyful</span>
          </a>
          <a href="">
            <span>Wall Street Journal</span>
          </a>
          <a href="">
            <span>Makaan.com</span>
          </a>
          <a href="">
            <span>PropTiger.com</span>
          </a>
          <a href="">
            <span>News Corp Australia</span>
          </a>
          <a href="">
            <span>News UK</span>
          </a>
      
        </div>
        <div className="footer3">
          <span>*Based on an Aug. 2023 proprietary survey among real estate professionals.</span>
        </div>
        <div className="footer3"><span>© 1995--2024 <a href="">Nation Association of REALTORS</a> ®and <a href="">Move,Inc.</a> All rights reserved</span></div>
      </div>
    </footer> */}
<Footer/>

  </>
);

export default MainPage;
