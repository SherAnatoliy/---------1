import { SCSearch } from "./Search.style";


export const Search = () => {
   
    return(
        <SCSearch>
             <section className="Search">
            
        <div className="search">
            <h1>The #1 site real estate professionals trust<sup>*</sup></h1>
            <div className="Search_top">
            <a href="">Buy</a>
            <a href="">Rent</a>
            <a href="">Sell</a>
            <a href="">Pre-approval</a>
            <a href="">Just sold</a>
            <a href="">Home value</a>
            </div>
            <div className="Search_bottom">
                <input type="text" className="Search_input" />
                <button className="Search_delete"><img src="../../../public/Img/Main/cross_u6k2vj2ibjve.svg" alt="" /></button>
                <button className="Seacrh_enter"><img src="../../../public/Img/Main/search_ssrbk50vdc29.svg" alt="" /></button>
            </div>
            
        </div>
        </section>
        </SCSearch>
    )
}