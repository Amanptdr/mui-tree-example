import React from "react";
// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FileExplorerContainer from "../Containers/FileExplorerContainer";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FileExplorerContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;