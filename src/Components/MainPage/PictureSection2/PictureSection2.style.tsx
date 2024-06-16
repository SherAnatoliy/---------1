import styled from "styled-components";
export const  SCPictureSection2 = styled.div`

display: flex;
flex-wrap: wrap;
height: 416px;
width: 1280px;
gap: 10px;
margin-top: 24px;
.section_2card{
display: flex;
position: relative;
width:300px;
height:200px;

}
.section_2card img{
    width:300px;
    border-radius: 10px;
}
.section_2card a{
    font-weight:normal;
    /* display: flex;
    z-index: 1;
    color: white;
    width: 300px; */

    position: absolute; /* Добавлено */
    font-size: 20px ;
    font-weight: 900;
    display: flex;
     padding: 10px;
    z-index: 1;
    color: #ffffff;
   
    
    width: 300px;
    height: 200px; /* Добавлено, чтобы ссылка покрывала всю карточку */
    text-decoration: none; /* Опционально: удаление подчеркивания у ссылки */
   
}
.section_2card a:hover{
    text-decoration: underline;
}
`
