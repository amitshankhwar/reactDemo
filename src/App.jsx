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
import Login from "./components/Login";
import Parent from "./pages/parent";
import UseRef from "./components/useRef";
import UseMemoExample from "./pages/Memo";
import LazyLoading from "./pages/LazyLoading";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbars />}>
            <Route
              path="/"
              element={
                <Parent>
                  <Home />
                </Parent>
              }
            />
            <Route path="/form" element={<Form />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/fetch" element={<DataFetch />} />
          <Route path="/navbar" element={<Navbars />} />
          <Route path="/useref" element={<UseRef />} />
          <Route path="/usememo" element={<UseMemoExample />} />
          <Route path="/lazyLoading" element={<LazyLoading />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
