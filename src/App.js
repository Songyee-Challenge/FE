import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Topbar from './components/Topbar';
import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";
import HomePage from './pages/HomePage';
import { useState } from 'react';
import InvitePage from './pages/InvitePage';

function App() {
   const location = useLocation();

  return (
    <>
    <GlobalStyle />
      <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/hello' element={<InvitePage/>}/>
      </Routes>
      {location.pathname !== '/' && location.pathname !== '/hello' &&<Topbar/>}
      <Page>
        <Routes>
          <Route path='/home' element={<HomePage/>}/>
        </Routes>
      </Page>
    </>
  );
}

export default App;

const Page = styled.div`
  margin-top: 120px;
`;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Dongle-regular', sans-serif;;
  }
`;