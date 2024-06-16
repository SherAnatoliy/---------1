import styled from "styled-components";
export const SCSearch = styled.div`
.Search{
    display: flex;
    width: 100vw;
    justify-content: center;
    align-items: center;
    height: 450px;
    margin-top: 1px;
    /* position: fixed; */
    background-image: url('../../../public/Img/Main/ocr.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom;

}
.search {
    text-align: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    z-index: 2; 
    padding: 20px; 
    display: flex;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
    
}
.Search_top a, .Search_bottom input, .Search_bottom button {
    color: white; 
}
.search h1{
    text-shadow: rgba(0,0,0,0.25) 0 1px 3px;
    display: flex;
    width: 596px;
    font-size: 56px;
    font-weight: 700;
    line-height: 64px;
    color: #FFFFFF;
    position: relative;
    margin-bottom: 32px;
}
.search h1 sup{
    position: absolute;
    top: 40%;
    left: 87%;
    font-size: 0.6em; 
    color: #FFFFFF; 
}
.Search_top{
   display: flex;
   margin-bottom: 25px;
   
}
.Search_top a{
    color: #FFFFFF;
    padding:  12px 16px;
    flex-direction: none;
    text-decoration: none;
}
.Search_top a:hover{
    color:#bdbdbdf9;
        border-bottom: 4px solid #FFFF; 
        padding-bottom:7px;
}
.Search_bottom input{
    color: #000000;
    font-size: 16px;
}
.Search_input{
    color: #000000;
    width: 575px;
    height: 48px;
    border-radius: 30px;
}

.Seacrh_enter {
    background-color:#ffffff00 ;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    position: absolute;
    top: 80.5%;
    left: 87%;
    border-radius: 50%;
    border: none;
    }
    .Seacrh_enter,.Search_delete{
        outline: none;
    }
    .Seacrh_enter img{
        width:30px;
        height:30px;
        transition: filter 0.3s;
    }
    .Seacrh_enter:hover img {
    filter: brightness(0.8); 
     }
    .Search_delete{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color:#ffffff00 ;
        width: 40px;
        height: 48px;
        position: absolute;   
        top: 80.5%;
        left: 82%;
        border: none;
    }
    .Search_delete img{
        width:15px;
        height:15px;
    }
` 