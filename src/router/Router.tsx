import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "../components/layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<div>gd</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
