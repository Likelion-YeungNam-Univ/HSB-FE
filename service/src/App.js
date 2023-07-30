import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import EstimatePage from "./pages/EstimatePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Nav/>
        <Routes>
          {/*<Route path="/" element={<HomePage/>}></Route>*/}
          <Route path="/MainPage" element={<MainPage/>}></Route>
          <Route path="/EstimatePage" element={<EstimatePage/>}></Route>
          {/*<Route path="/GuestBookPage" element={<GuestBookPage/>}></Route>*/}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
