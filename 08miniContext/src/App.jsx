// App.js
import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UserContextProvider from "./context/UserContextProvider";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";

function App() {
  return (
    <>
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>

    </>
  );
}

export default App;
