import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import EstimatePage from "./pages/EstimatePage";
import BidProposalMemberInfoPage from "./pages/BidProposalMemberInfoPage";
import ProfileAndContractsPage from "./pages/ProfileAndContractsPage";
import InformationModificationPage from "./pages/InformationModificationPage";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

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
          {/*<Route path="/MainPage" element={<MainPage/>}></Route>*/}
          <Route path="/EstimatePage" element={<EstimatePage/>}></Route>
          <Route path="/BidProposalMemberInfoPage" element={<BidProposalMemberInfoPage/>}></Route>
          <Route path="/ProfileAndContractsPage" element={<ProfileAndContractsPage/>}></Route> 
          <Route path="/InformationModificationPage" element={<InformationModificationPage/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;
