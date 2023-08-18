import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import EstimatePage from "./pages/EstimatePage";
import BidProposalMemberInfoPage from "./pages/BidProposalMemberInfoPage";
import ProfileAndContractsPage from "./pages/ProfileAndContractsPage";
import InformationModificationPage from "./pages/InformationModificationPage";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchIdPage from "./pages/SearchIdPage";
import SearchPwPage from "./pages/SearchPwPage";
import ResetPwPage from "./pages/ResetPwPage";
import JoinPage from "./pages/JoinPage";
import SendNotePage from "./pages/SendNotePage";
import AfterLoginPage from "./pages/AfterLoginPage";
import FindIdPage from "./pages/FindIdPage";
import EstimateRequestListPage from "./pages/EstimateRequestListPage";
import SearchPage from "./pages/SearchPage";
import CommunityListPage from "./pages/CommunityListPage";
import ServiceNamePage from "./pages/ServiceNamePage";
import ReceivedNotePage from "./pages/ReceivedNotePage";
import QuoteCreationPage from "./pages/QuoteCreationPage";

const StyledApp = styled.div`
  min-width: 1300px;
`;
function App() {

  return (
    <StyledApp>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}></Route>
          <Route path="/AfterLoginPage" element={<AfterLoginPage/>}></Route>
          <Route path="/LoginPage" element={<LoginPage/>}></Route>
          <Route path="/SearchIdPage" element={<SearchIdPage/>}></Route>
          <Route path="/SearchPwPage" element={<SearchPwPage/>}></Route>
          <Route path="/ResetPwPage" element={<ResetPwPage/>}></Route>
          <Route path="/JoinPage" element={<JoinPage/>}></Route>
          <Route path="/SearchPage" element={<SearchPage/>}></Route>
          <Route path="/ServiceNamePage" element={<ServiceNamePage/>}></Route>
          <Route path="/EstimateRequestListPage" element={<EstimateRequestListPage/>}></Route>
          <Route path="/EstimatePage/:id" element={<EstimatePage/>}></Route>
          <Route path="/CommunityListPage" element={<CommunityListPage/>}></Route>
          <Route path="/FindIdPage" element={<FindIdPage/>}></Route>
          <Route path="/BidProposalMemberInfoPage" element={<BidProposalMemberInfoPage/>}></Route>
          <Route path="/ProfileAndContractsPage" element={<ProfileAndContractsPage/>}></Route> 
          <Route path="/InformationModificationPage" element={<InformationModificationPage/>}></Route>
          <Route path="/SendNotePage" element={<SendNotePage/>}></Route>
          <Route path="/ReceivedNotePage" element={<ReceivedNotePage/>}></Route>
          <Route path="/QuoteCreationPage" element={<QuoteCreationPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </StyledApp>
  )
}

export default App;
