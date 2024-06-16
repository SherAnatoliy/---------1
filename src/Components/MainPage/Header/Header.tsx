import { SCHeader } from './Header.style';

export const Header = () => {
    return(
<SCHeader>
           <section className='header'>
    
            <img src="../../../public/Img/Header/logo-brand.svg" alt="logo-brand" />
        <div className="headerA1">   
<div className="headerA1_left">
 <a href="">Buy</a>
 <a href="">Sell</a>
 <a href="">Rent</a>
 <a href="">Mortgage</a>
 <a href="">Find Realtors <sup>®</sup></a>
 <a href="">My Home</a>
 <a href="">News & Insights</a>
</div>
<div className="headerA1_right">
     <div className="headerA1_right_left">
     <a href="">Manage rentals</a>
     </div>
     <div className="headerA1_right_right">
     <a href="">Advertise</a> 
     </div>
 
</div>
</div>
            
            <div className="header_LoginSign">
                <div className="header_login">
            <a href="">Log in</a>
                </div>
             <button className="header_sigh">Sign up
             </button>
            </div>           
        
        </section>
     
</SCHeader>
)}