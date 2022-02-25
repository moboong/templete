import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Page1 from "./contents/Dashboard";
import Page2 from "./contents/Dashboard";
import NotFound from "./contents/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/menu1/*" element={<Page1 />} />
          <Route path="/menu2/*" element={<Page2 />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
