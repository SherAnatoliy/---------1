
import { SCSection5 } from './section5.style';
import { Heading } from '../../Typography/Heading';
import { ButtonSearch } from '../ButtonSearch/ButtonSearch';

export const Section5 = () => {
    return(
        <SCSection5>
       <div className="section5">
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
    </div>
        </SCSection5>
    )
}