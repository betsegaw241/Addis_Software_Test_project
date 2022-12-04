import styled from "styled-components";
export const StyledNavigationBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 10%;
  background-color: #476f76;
 

  p {
    margin-left: auto;
    margin: 0px;
    color: white;
    font-size: 40px;
  }
  a {
    underline: none;
    color: white;
    border : 1px solid white;
    font-size: larger;
    text-decoration: none;
    background-color: transparent;
    margin-right: 20px;
     padding:5px;
    border-radius: 5px;
:hover {
  background-color:#d7dadb;
  color:black;
}
  }
  
  
  
`;
