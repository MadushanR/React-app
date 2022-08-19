import './App.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Articles from './Pages/Articles';
import ArticlesList from './Pages/ArticlesList';
import NavBar from './NavBar';
import React from 'react';


function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <NavBar/>

    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/Articles" element={<Articles />} />
      <Route path="/ArticlesList" element={<ArticlesList />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
