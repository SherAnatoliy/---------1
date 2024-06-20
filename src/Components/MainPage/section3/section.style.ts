import styled from "styled-components";
export const SCSection3 = styled.div`

.section_3 h2{
margin: 0 0 24px 0;
}
.section3_button{
    display: flex;
    gap: 10px;
}
.section3_button button{
font-size: 16px;
color: black;
border-radius: 40px;
font-weight: 500;
padding: 12px 16px;
height: 48px;
margin:0;

}
.my-button{
    background-color: white;
    color: black;
}
.my-button:hover{
background-color: #d3d3d3;
}
.my-button.active {
    background-color: black;
    color: white;
  }

  .my-button.active:hover {
    background-color: #877e7e;
  }
.section3_cards{
    display: flex;
    height: 266px;
}
.section3_card {
    display: flex;
    justify-content: space-between; /* или другое значение в зависимости от ваших требований */
    width: 100%; /* или другое значение в зависимости от ваших требований */
    height: 266px;
}
  .section3_1card,
.section3_2card,
.section3_3card {
    display: none; /* По умолчанию скрываем все карточки */
    width: 1280px;
    height: 266px;
    flex-wrap: wrap;
}

.section3_1card.active,
.section3_2card.active,
.section3_3card.active {
    display: flex; /* Показываем только активную карточку */
    width: 1280px;
    height: 266px;
    flex-wrap: wrap;
    margin-top: 24px;
     
}
.section3_card1{
    display:flex;
    width: 415.99px;
    height: 266px;
}
.section3_card2{
    display:flex;
    width: 415.99px;
    height: 266px;
}

.section3_card3{
    display:flex;
    width: 415.99px;
    height: 266px; 
}
.section3_card{
    display: flex;
   
}


.section3_card1, .section3_card2, .section3_card3{
    display: flex;
    flex-direction: column;
    width: 383.99px;
    margin: 8px;
    padding: 16px;
    height: 234px;
    border: 1px solid gainsboro;
    border-radius: 10px;
    box-sizing: border-box;
}

.section3_card1, .section3_card2, .section3_card3 {
    display: flex;
}
.section_card_top{
    display: flex;
    height: 48px;
    
}
.section_card_top h3{
width: 318.66px;
font-size: 16.38px;

}
.section_card_top img{
    width: 48px;
}
.section_card_top{
    display: flex;
}
.section_card_top p{
 width: 366.66px;   
 font-size: 16px;
 
}

.section3_card_bottom {
    font-weight: bold;
    text-decoration: underline;
    font-size: 16px;
    margin-top: auto; 
}

.section3_card11 {
    display: flex;
    flex-direction: column;
    width: auto;
    height: 100%;
    text-decoration: none;
    color: black;
}

`