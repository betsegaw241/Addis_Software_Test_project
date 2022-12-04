import styled from "styled-components";
import { layout } from 'styled-system';
export const StyledForm = styled.div`

${layout}

 display:flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;

h1{
  color:#0E5E6F;
}
  input,
  select {
    width: 100%;
    display: inline-block;
    border: 1px solid #cbcbcb;
    border-radius: 4px;
    box-sizing: border-box;
    ouline: none;
    font-size: small;
    :focus {
      background-color: lightblue;
  }
  }
 
  select{
    width: 100%;
    margin: 8px 0;
    padding: 10px 15px;

  }
  input {
    width: 100%;
    
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    color: black;
    border-radius: 4px;
    cursor: pointer;
   
    
  }

  button {
    width: 90px;
    height: 40px;
    cursor:pointer;
    
    background-color: #3A8891;
    color: white;
    font-size: large;
    border-radius: 4px;
    :hover{
      background-color:#d7dadb;
      color:black;
    }
  }
  p {
    color: red;
    padding: 0px;
    margin: 0px;
    font-size: small;
  }
  select {
    background-color: white;
   
  }


`;
