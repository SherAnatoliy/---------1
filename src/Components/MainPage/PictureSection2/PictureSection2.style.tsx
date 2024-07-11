import styled from "styled-components";
export const  SCPictureSection2 = styled.div`

display: flex;
flex-wrap: wrap;
height: 1500px;
width: 1280px;
gap: 10px;
margin-top: 24px;
margin-bottom: 100px;
.section_2card{
border: 1px solid #3b3b3b22;
border-radius: 5px;
display: flex;
position: relative;
width:300px;
height:280px;
background-color: #3b3b3b22;
}
.section_2card {
    display: flex;
}
.section_2card img{
    display: flex;
    width: 300px;
    height: 80%;
}
.section_2card span {
display: flex;
position: absolute;
}
.section_2card a{
    font-weight:normal;
    display: flex;
    z-index: 1;
    color: white;
    width: 300px;

    position: absolute;
    font-size: 20px ;
    font-weight: 900;
    display: flex;
     padding: 10px;
    z-index: 1;
    color: #ffffff;
   
    
    width: 300px;
    height: 280px; 
    text-decoration: none; 
   
}
.section_2card a:hover{
    text-decoration: underline;
}
.section_2card_info {
    top: 80%;
    display: flex;
    position: absolute;


}
.section_2card_button{
    display: flex;

    position: absolute;
    width: 30px;
    height: 30px;

    left: 88%;
    z-index: 2;
    justify-content: center;
    align-items: center;
    background-color: #5656567e;
    border-radius: 10px;
    border: none;
}


.section_2card_button.gray {
  background-color: #ffffff8f;
}

.section_2card_button.red {
  background-color: #00000071;
}

`
