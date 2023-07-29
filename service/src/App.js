import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/Header";
import EstimatePage from "./pages/EstimatePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          {/*<Route path="/" element={<HomePage/>}></Route>*/}
          <Route path="/EstimatePage" element={<EstimatePage/>}></Route>
          {/*<Route path="/GuestBookPage" element={<GuestBookPage/>}></Route>*/}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
