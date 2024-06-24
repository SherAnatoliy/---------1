import styled from "styled-components";
export const SCSection4 = styled.div`
.section4_main_top{
    position: relative;
    display: flex;
    width: 100%;
    height: 450px;
    margin-top: 60px;
    background-image: url('../../../public/Img/Main/section4/5c307d4a74dc5e10261a675ea1bbc57aw-c4287304772srd_q80.jpg_');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom;
    align-items: center;
    justify-content: center;

}
.section4_main_top::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.251);
    z-index: 1; 
}

.section4_main_top > * {
    position: relative;
    z-index: 2; 
}


.section4_main{
    
    display: flex;
    height: 1280px;
    height: 224px;
    color: white;
    flex-direction: column;
    align-items:center;
    justify-content: space-between;
}
.section4_top{
    font-size: 24px;
    
 
}
.section4_top span  {
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5)
}
.section4_middle{
    display: flex;
    text-align: center;
        font-size: 20px; 
        font-weight: 700;
        width: 528px;
}
.section4_middle span{
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5)
}

.section4_bottom{
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 40px;
    border: 1px solid white;
    background-color: #1A1816;
    width: 130px;
    height: 44px;
    font-size: 16px;
}
.section4_bottom:hover{
    background-color: #1a181600;
}
.section4_bottom a{ 
    color: white;
    text-decoration: none;
}
.section4_bottom a:hover{
  color: rgb(192, 192, 192);
}
.section4_main_bottom{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    height: 432px;
    background-color:  rgba(0, 0, 0, 0.251);
    margin: 0;
}
.section4_bottom_card{
    display: flex;
    flex-direction: column;
   
}
.section4_img img{
    border-top-left-radius: 10px; 
    border-top-right-radius: 10px; 
    width: 300px;
    height: 200px;
}
.section4_card_span{
    text-decoration: underline;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    height: 72px;
    width: 300px;
    overflow: hidden; 
    text-overflow: ellipsis;
    font-weight: 400;
    background-color: white;
    border-bottom-left-radius: 10px; 
    border-bottom-right-radius: 10px; 
    text-align: center;

}
.section4_card_a{
    height: 271px;
    width: 300px;
    text-decoration: none;
    color: black;
}
.section4_span{
    position: absolute;
    color: white;
    background-color: #3a71ca;
    margin-top:10px;
    margin-left: 10px;
    font-size: 16px;
    padding: 5px;
    border-radius: 15px;

}
`