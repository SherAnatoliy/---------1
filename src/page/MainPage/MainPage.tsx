
import "./MainPage.scss";
import { Header } from "../../Components/MainPage/Header/Header";
import { Search } from "../../Components/MainPage/Search/Search";
import { Heading } from '../../Components/Typography/Heading';
import { PictureSection2 } from "../../Components/MainPage/PictureSection2/PictureSection2";
export const MainPage = () =>{
    
    return(
        <>
            
        <Header/>
        <Search/>
        <section className="section_2">
            <div className="h2_section2">
        <Heading  headingType={"h2"} headingText={"Browse homes in Miami, FL"}/>
            </div>
       <PictureSection2/>
        </section>
       
       
        </>
    )
}