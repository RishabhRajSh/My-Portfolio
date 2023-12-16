import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PublicView from "./views/public/PublicView";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/public" />} />
        <Route path="/public/*" element={<Navigate to="./about-me" />} />
        <Route path="/public" element={<PublicView />} />
      </Routes>
    </Router>
  );
};

export default App;
