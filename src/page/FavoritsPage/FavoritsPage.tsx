import { Header } from "../../Components/MainPage/Header/Header";
import { Search } from "../../Components/MainPage/Search/Search";
import { Footer } from "../../Components/MainPage/footer/footer";
import { Section4 } from "../../Components/MainPage/section4/section4";
import { Section5 } from "../../Components/MainPage/section5/section5";
import { Section6 } from "../../Components/MainPage/section6/section6";
import "./FavoritsPage.style";
export const FavoritsPage: React.FC = () =>
    <>
    <Header/>
    <Search/>
    <Section4/>
    <Section5/>
    <Section6/>
    <Footer/>
    </>
    export default FavoritsPage;