import styled from "styled-components";
export const SCHeader = styled.div`

.header{
    border-bottom: 1px solid rgb(184, 184, 184);
    display: flex;
    width: 100vw;
    height: 50px;
    align-items: center;
    justify-content: center;
    padding: 0 16px;
    img {
        height: 50px;
        width: 150px;
    }
}

.headerA1{
    display: flex;
    align-items: center;
    height: 50px;
    padding-left: 24px;
    
}
.headerA1 a{
    text-decoration: none;
    height: 100%;
    padding: 0 8px;
    color: rgb(26, 24, 22);
    
}

.headerA1_left a:hover{
    border-bottom: 2px solid #000; 
    padding-bottom:15px;
}
.headerA1_left{
    font-size: 14px;
    font-weight: 500;
}
.headerA1_right{
    display: flex;
    flex-wrap: nowrap;
    margin-left: 60px;
    margin-right: 87px;
    font-size: 16px;  
    text-decoration: underline;
}
.headerA1_right_left{
    margin-right: 16px;
}
.header_LoginSign{
   
 box-sizing:border-box;
  display: flex;  
  flex-wrap: nowrap;
}
.header_LoginSign{
    display: flex;
    align-items: center;
}
.header_login{
    padding: 0 16px;
}
.header_login a{
    font-size: 14px;
    font-weight: 400;
    color: rgb(26, 24, 22);
}
.header_login a:hover{
    border-bottom: 2px solid #000; 
    padding-bottom:15px;
}
    .header_sigh {
        display: flex;
        align-items: center;
        border: 1px solid black; 
        border-radius: 40px; 
        background-color: rgb(26, 24, 22);
        color: rgb(255, 255, 255);
        height: 36px;
        width: 92.34px;
        padding: 0 16px;
        font-size: 16px;
      }
      .headerA1 a:hover,
      .header_login a:hover {
          
          color: rgb(26, 24, 22);}



`

