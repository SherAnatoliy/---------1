import styled from "styled-components";
export const SCSection5 = styled.div`
.section5_top {
    display: flex;
    width: 100%;
  }

  .section5_top_left,
  .section5_top_right {
    width: 50%;
  }
  
  .section5_top_left img {
    width: 100%;
    height: auto;
  }
  .section5_top_right{
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    padding: 50px;
  }
  .section5_top_right_span1{
    font-size: 32px;
    line-height: 40px;
    font-weight: 700;
  }
  .section5_top_right_span2{
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    margin: 9px 0 27px;
  }
  .section5_top_right_bottom{
    position: absolute;
    margin-right: 50px;
    margin-top:450px;
   
  }
  .section5_top_right_a{
    display: flex;
    text-decoration: none;
    border: 1px solid black;
    width: 225px;
    border-radius: 20px;
    
    color: white;
    background-color: black;
    
}
  .section5_top_right_a span{
    padding: 10px 24px;
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    
  }
  .section5_top_right_bottom button{
    border-radius: none;
    border: 0;
    background-color: white;
  }
.section5_top_right_bottom span{
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    text-decoration: underline;
    background-color: white;
}
.section5_bottom{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}
.section5_bottom_left,
  .section5_bottom_right {
    width: 50%;
  }
  .section5_bottom_right img {
    width: 100%;
    height: auto;
  }
  .section5_bottom_left{
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    padding: 50px;}

    .section5_bottom_left h3{
       font-size: 32px;
       line-height: 40px;
       font-family: 700;
    }
    .section5_bottom_left span{
        font-size: 20px;
        line-height: 32px;
        font-weight: 400;
    }
    .section5_bottom_left p{
        margin: 10px 0 30px;
    }
    .section5_bottom_left input{
        width: 455px;
        height: 58px;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        border: 1px solid  #b1b1b1;
        border-right: none;
    }
    .section5_Seacrh_enter {
        background-color:#ffffff00 ;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 48px;
        position: absolute;
        margin-top: -53px;
        margin-left: 360px ;
        border-radius: 50%;
        border: none;
        }
        .section5_Seacrh_enter,.section5_Search_delete{
            outline: none;
        }
        .section5_Seacrh_enter img{
            width:30px;
            height:30px;
            transition: filter 0.3s;
        }
        .section5_Seacrh_enter:hover img {
        filter: brightness(0.8); 
         }
        .section5_Search_delete{
            display: flex;
            position: absolute;   
            align-items: center;
            justify-content: center;
            background-color:#ffffff00 ;
            width: 40px;
            height: 48px;
            border: none;
            margin-top: -53px;
            margin-left: 400px ;
        }
        .section5_Search_delete img{
            width:15px;
            height:15px;
        }
`