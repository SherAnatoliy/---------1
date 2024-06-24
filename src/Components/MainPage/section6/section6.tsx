import { SCSection6 } from './section6.style';
import { Heading } from '../../Typography/Heading';

export const Section6 = () => {
    return(
        <SCSection6>
 <div className="section6">
      <div className="section5_card">
        <img src="../../../public/Img/Main/section6/nar-logo-2020.svg" alt="" />
        <p>Find out how the NAR works for consumers and REALTORS®</p>
      </div>
      <div className="section5_card">
        <Heading headingType={"h3"} headingText={"Learn About N.A.R"}/>
        <ul>
          <li>
        <a href="">About NAR</a>
          </li>
          <li>
        <a href=""> Agent vs. REALTOR®</a>
          </li>
          <li>
        <a href="">Find an Appraiser</a>
          </li>
          <li>
        <a href="">Commercial Services</a>
          </li>
          <li>
        <a href="">NAR Global Alliances</a>
          </li>
        </ul>
      </div>
      <div className="section5_card">
      <Heading headingType={"h3"} headingText={"For Homeowners"}/>
      <ul>
        <li>  
        <a href="">Look for the R</a>
        </li>
        <li>
        <a href="">First-Time Buyer</a>
        </li>
        <li>
        <a href="">Real Estate Today</a>
        </li>
        <li>
        <a href="">Reasons to work with a REALTOR®</a>
        </li> 
        </ul>
      </div>
      <div className="section5_card">
      <Heading headingType={"h3"} headingText={"For REALTORS®"}/>
      <ul>
        <li>
        <a href="">National Homeownership Month</a>
        </li>
        <li>
        <a href="">Mentorship: Start Your Impact</a>
        </li>
        <li>
        <a href="">NAR REALTOR Benefits®: Essential tools to grow your business.</a>
        </li>
        <li>
        <a href="">REALTOR® Grows Traffic by 700% by Leveraging Multiple .realestate Domains</a>
        </li>
   
        </ul>
      </div>
    </div>
        </SCSection6>
    )
}
