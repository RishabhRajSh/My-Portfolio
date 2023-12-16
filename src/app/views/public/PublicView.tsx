import React from "react";
import { Routes, Route, Navigate, useMatch } from "react-router-dom";
import PublicLayout from "../../layouts/public/PublicLayout";


const PublicView = () => {
  const match = useMatch("/about-me"); // use useMatch instead of useRouteMatch

  return (
    <React.Fragment>
      <PublicLayout>
        <Routes>
          {/* Use Navigate for redirects */}
          <Route path="/" element={<Navigate to="about-me"  />} />
          
        </Routes>
      </PublicLayout>
    </React.Fragment>
  );
};

export default PublicView;
