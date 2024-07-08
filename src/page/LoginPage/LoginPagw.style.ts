import styled from "styled-components"

export const SCLoginPage = styled.div`
body{
    display: flex;
justify-content: center;

}
.LoginPage{

    display: flex;
    justify-content: center; 
    align-items: center; 
    min-height: 100vh; 
    padding: 0 80px;
    border-radius: 10px; 
    flex-direction: column;
}
.main{
    padding: 0 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.login_header img{
    width: 176.69px;
    height: 22px;
    display: flex;
    text-align: center;
    justify-content: center;
    flex-direction: column;  
}

.login_header{
    width: 400px;
    padding: 40px 40px 24px;
    display: flex;
    text-align: center;
    justify-content: center;
    flex-direction: column;  
    align-items: center;
}
.login_h1{
    margin: 24px 0 16px;
    font-size: 24px;
    font-weight: bold;
    color: black;
}
.login{
    width: 320px;
    padding: 0 40px 40px;
    display: flex;
    text-align: center;
    justify-content: center;
    flex-direction: column;  
    align-items: center;

}
.login a:hover {
    color: black; 
}


    .password_main {
  display: flex;
  justify-content:center ;
  align-items: center; /* Выравнивание по вертикали */
  width: 320px;
  height: 52px;
  
}

#password-input {
    margin-bottom: 0;
  flex: 1; /* Занимает всю доступную ширину */
  height: 52px; /* Задаем высоту поля ввода */
  border-radius: 0;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-right: none;
}
.toggle-password-button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    border-right: none;
    width: 40px;
    height: 52px; 
    border: 1px solid #b1b1b1;
    border-left: none;
    background-color: white; 

}


.toggle-password-button img {
  width: 20px;
  height: auto;
  opacity: 0.5;
  transition: opacity 0.2s ease;

}
.toggle-password-button {
  position: relative; 
}
.toggle-password-button.show::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 1px;
  background-color: #b1b1b1;
  transform: translate(-50%, -50%) rotate(140deg);
}


.login_a{
    text-decoration: underline;
    align-self: flex-start; 
    display: flex;
    color: black;
    margin-top: 16px;
    margin-bottom: 16px
}

.login_a a:hover{
    color: black;
}

.Login_button{
    width: 320px;
    height: 52px;
    background-color: black;
    color: white;
    margin-top: 24px;
}
.login_span{
    align-self: flex-start; 
}
.login_span span{
    gap: 3px;
    display: flex;
    padding: 24px 0 0;
   
}

.login_span a{
    color: black;
    text-decoration: underline;
}


.login_footer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
   
}

.Footer_login{ 
    border-top: 1px solid rgb(184, 184, 184);
    display: flex;
    justify-content: center; 
    align-items: center; 
    height: 100%; 
    width: calc(100vw - 40px);
    padding: 20px;
    flex-direction: column;
}
.Footer_login a{
    color: black;
    text-decoration: underline;
}
.Footer_login a:hover{
    color: black;
}
.footer_a a{ 
    font-size: 14px;
    display: inline-flex;
    margin-right: 1.125rem; 
    color: black;
}
.footer_a a:hover{
color: black; 
}
.footer_p{
    font-size: 10px;
display: flex;
flex-direction: initial;
justify-content: center;
}
.footer_p a{
    display: flex;
    justify-content: center;
    align-items: center;
    
}

`