import { Route, Routes } from "react-router-dom";
import AboutMePage from "./pages/about-me/AboutMePage";
import PublicLayout from "../../layouts/public/PublicLayout";
import React from "react";

const PublicView = () => {
  return (
    <React.Fragment>
      <PublicLayout>
        <Routes>
          <Route path="/about-me" element={<AboutMePage />} />
        </Routes>
      </PublicLayout>
    </React.Fragment>
  );
}

export default PublicView;