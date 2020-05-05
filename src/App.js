import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar"
import Home from "./components/Home"
import Team from "./components/Team";
import Project from "./components/Project";
import ToolsandTechs from "./components/ToolsandTechs";
import Designs from "./components/Designs";
import Demo from "./components/Demo";
import Improvements from "./components/Improvements";
import Slider from "./components/Slider";
import "./App.css";



function App() {
  return (
    // <div className="container">

    <div>
      <Sidebar />
      <Router>
        {/* <Route exact path="/" component={Home}></Route> */}
        <Route exact path="/slider" component={Slider}></Route>
        <Route exact path="/aboutproject" component={Project}></Route>
        <Route exact path="/tools&techs" component={ToolsandTechs}></Route>
        <Route exact path="/designs" component={Designs}></Route>
        <Route exact path="/demo" component={Demo}></Route>
          <Route exact path="/improvements" component={Improvements}></Route>
      </Router>
      </div>
    // </div>
  );
}

export default App;
