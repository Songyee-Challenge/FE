import './App.css';
import { Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Topbar from './components/Topbar';
import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";

function App() {
  return (
    <>
    <GlobalStyle />
      <Topbar/>
      <Page>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
        </Routes>
      </Page>
    </>
  );
}

export default App;

const Page = styled.div`
  margin-top: 15vh;
`;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Dongle-regular', sans-serif;;
  }
`;