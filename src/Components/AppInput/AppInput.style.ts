import styled from "styled-components"; 

interface IStyledInputProps { 
  $isError:boolean 
} 
export const SCAppInput = styled.input<IStyledInputProps>` 
 


    display: flex;
    width: 320px;
    height: 52px;
    padding: 0 16px;
    background-color: #ffff;
    border-radius: 10px;
    margin-bottom: 16px;
    border: 1px solid #b1b1b1;
    font-weight: lighter;



`