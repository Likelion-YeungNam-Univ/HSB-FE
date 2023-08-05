import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import EstimatePage from "./pages/EstimatePage";
import ProfileAndContractsPage from "./pages/ProfileAndContractsPage";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchIdPage from "./pages/SearchIdPage";
import SearchPwPage from "./pages/SearchPwPage";
import ResetPwPage from "./pages/ResetPwPage";
import JoinPage from "./pages/JoinPage";

function App() {
  
  const StyledApp = styled.div`
  {/*
    display: flex;
    flex-direction: column;
    justify-contents: space-between;*/}

  `;

  return (
    <StyledApp>
      <BrowserRouter>
        <Header/>
        <Nav/>
        <Routes>
          <Route path="/" element={<MainPage/>}></Route>
          <Route path="/LoginPage" element={<LoginPage/>}></Route>
          <Route path="/SearchIdPage" element={<SearchIdPage/>}></Route>
          <Route path="/SearchPwPage" element={<SearchPwPage/>}></Route>
          <Route path="/ResetPwPage" element={<ResetPwPage/>}></Route>
          <Route path="/JoinPage" element={<JoinPage/>}></Route>
          <Route path="/EstimatePage" element={<EstimatePage/>}></Route>
          <Route path="/ProfileAndContractsPage" element={<ProfileAndContractsPage/>}></Route> 
        </Routes>
        <Footer/>
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;
