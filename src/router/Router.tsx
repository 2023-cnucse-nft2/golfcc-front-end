import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import MainPage from "../pages/main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<div>Login</div>} />
          <Route path="/publish" element={<div>Publish</div>} />
          <Route path="/transactions" element={<div>transactions</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
