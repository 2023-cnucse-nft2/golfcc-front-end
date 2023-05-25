import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "../layout";
import LoginPage from "../pages/login";
import PublishPage from "../pages/publish";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LoginPage />} />
          <Route path="/publish" element={<PublishPage />} />
          <Route path="/transactions" element={<div>transactions</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
