import React, { useState } from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Counter from "./components/Counter";
import Form from "./components/Form";
import NewForm from "./components/NewForm";
import DataFetch from "./components/DataFetch";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Navbars from "./components/Navbars";
import About from "./components/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/h" element={<Navbars />}>
            <Route path="/home" element={<Home />} />
            <Route path="/form" element={<Form />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="/fetch" element={<DataFetch />} />
          <Route path="/navbar" element={<Navbars />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
