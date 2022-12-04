import styled from "styled-components";
import { layout } from "styled-system";
export const StyledListItem = styled.div`
  ${layout}

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  flex-wrap: wrap;
  width: 100%;
  @media (min-width: 630px) {
    width: 70%;
    font-size: large;
  }
  @media (max-width: 400px) {
    font-size: small;
  } 
 
  h1 {
    color: #0e5e6f;
  }

  table {
    font-family: Times New Roman, Georgia, Garamond;
    border-collapse: collapse;
    width: 100%;

    margin-bottom: 100px;
  }

  table td,
  table th {
    border: none;
    padding: 4px;
  }

  table tr:hover {
    background-color: #ddd;
  }

  table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #3a8891;
    color: white;
  }

  button {
   
  
    background-color: transparent;
    margin-left: 5px;
    font-size: medium;
    border-radius: 4px;
border:1px solid  #cdcdcd;
    :hover {
      background-color: #57777c;
      cursor: pointer;
      color: red;
      
      
    }
  }
  a {
    color: black;
    text-decoration: none;
  }
`;
