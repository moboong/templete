import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Frame from "./component/Frame";
import SignIn from "./component/pages/SignIn";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/*" element={<Frame />} />
          <Route path="/signIn" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
