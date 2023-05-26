import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "../layout";
import LoginPage from "../pages/login";
import PublishPage from "../pages/publish";
import TransactionPage from "../pages/transaction";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LoginPage />} />
          <Route path="/publish" element={<PublishPage />} />
          <Route path="/transactions" element={<TransactionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
