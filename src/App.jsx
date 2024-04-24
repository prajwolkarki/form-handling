import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { createContext } from "react";
export const UserContext = createContext();

function App() {
 let user = "prajwol";
  return (
    <UserContext.Provider value={user}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
