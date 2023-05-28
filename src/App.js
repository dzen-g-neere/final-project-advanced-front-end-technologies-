import { useState } from "react";
import Form from "./Components/Form.js";
import Table from "./Components/Table/Table.js";

import "./Styles/App.css";
import logo from "./Assets/Images/duck_cropped.png";

import arr from './Data/participants.json';
import SearchBar from "./Components/SearchBar.js";
import CategoryBar from "./Components/CategoryBar.js";

import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import ToDoApp from "./Components/ToDoApp.js";
import AreaChecker from "./Components/AreaChecker.js";
import ClassES6 from "./Components/ClassES6.js";
import { ThemeProvider } from './Theme/ThemeContext';


function App() {

  return (
    <ThemeProvider>
    <Router>
      <Link to='/todoapp'>ToDo</Link>
      <br></br>
      <Link to='/areacheckerapp'>AreaChecker</Link>
      <br></br>
      <Link to='/classES6'>ClassES6</Link>
      <br></br>
    
      <Routes>
      <Route path='/todoapp' element={<ToDoApp/>} />
      <Route path='/areacheckerapp' element={<AreaChecker/>} />
      <Route path='/classES6' element={<ClassES6/>} />
      </Routes>
      </Router>
      </ThemeProvider>
  );
}

export default App;
