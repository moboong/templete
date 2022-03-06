import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./component/Frame";
import ViewSysMas from "./component/nonshare/sysMas/ViewSysMas"
import ViewPassMas from "./component/nonshare/passMas/ViewPassMas"
import NotFound from "./component/nonshare/contentspage/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/sysMas" element={<ViewSysMas />} />
          <Route exact path="/passMas" element={<ViewPassMas />} />
          <Route exact path="/passAplyMas" element={<Dashboard />} />
          <Route exact path="/rootCertMas" element={<Dashboard />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
