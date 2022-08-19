import "./App.css";
import HomePage from "./Pages/HomePage";
import { Link, Outlet } from "react-router-dom";
import Articles from "./Pages/Articles";
import ArticlesList from "./Pages/ArticlesList";
import NavBar from "./NavBar";
import React from "react";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
