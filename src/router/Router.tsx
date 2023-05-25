import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import LoginPage from "../pages/login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LoginPage />} />
          <Route path="/publish" element={<div>Publish</div>} />
          <Route path="/transactions" element={<div>transactions</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
