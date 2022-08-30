import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import Home from "./Pages/HomePage/Home/Home";
import About from "./Pages/HomePage/About/About";
import Services from "./Pages/HomePage/Services/Services";
import Login from "./Pages/Login/Login";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails";
import SignUp from "./Pages/SignUp/SignUp";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>

        <Route
          path="/service/:id"
          element={
            <RequireAuth>
              <ServiceDetails />
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
