import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PublicLayout from "../../layouts/public/PublicLayout";
import AboutMePage from "./pages/about-me/AboutMePage";

const PublicView = () => {
  return (
    <React.Fragment>
      <AboutMePage />
      {/* <PublicLayout>
      
        <Routes>
          <Route path="/public/*" element={<Navigate to="/public/about-me" />} />
          
          <Route path="/public/about-me" element={<AboutMePage />} />
        </Routes>
      </PublicLayout> */}
    </React.Fragment>
  );
}

export default PublicView;
