import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Campaings from "./pages/Campaings";
import AlterCampaings from "./pages/AlterCampaing";
import CreateCampaings from "./pages/CreateCampaings";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <div className="container mt-2" style={{ marginTop: 40 }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/campaign/" element={<Campaings />} />
          <Route path="/alter-campaing/" element={<AlterCampaings />} />
          <Route path="/create-campaing/" element={<CreateCampaings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
