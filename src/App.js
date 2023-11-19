import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Topbar from "./components/Topbar";
import styled from "styled-components";
import HomePage from "./pages/HomePage";
import InvitePage from "./pages/InvitePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import MyChallenge from "./pages/MyChallenge";
import MyMission from "./pages/MyMission";
import MyReview from "./pages/MyReview";
import MyInfo from "./pages/MyInfo";
import SongChallenge from "./pages/SongChallenge";

function App() {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/hello" element={<InvitePage />} />
      </Routes>
      {location.pathname !== "/" && location.pathname !== "/hello" && (
        <>
        <Topbar />
      <Page>
        <Routes>
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/home/songchallenge" element={<SongChallenge />} />
          <Route path="/my" element={<MyChallenge />}>
            <Route path="/my/mission" element={<MyMission />} />
            <Route path="/my/review" element={<MyReview />} />
            <Route path="/my/info" element={<MyInfo />} />
          </Route>
        </Routes>
      </Page>
      </>
    )}
    </>
  );
}

export default App;

const Page = styled.div`
  margin-top: 120px;
`;
