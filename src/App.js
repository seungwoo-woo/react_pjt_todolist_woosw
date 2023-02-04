import { createGlobalStyle } from 'styled-components';
import { Reset } from "styled-reset";

import './App.css';
import MainPage from "./components/pages/MainPage";


const GlobalStyle = createGlobalStyle`

  /* 글로벌(공통) 스타일 */
  body {
    background: #F4F0E5;
  }
`;


function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />      
      <MainPage>
      </MainPage>
    </>
  );
}

export default App;
