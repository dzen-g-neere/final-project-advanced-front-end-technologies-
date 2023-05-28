import { useState } from "react";
import Form from "./Form.js";
import Table from "./Table/Table.js";

import "../Styles/App.css";
import logo from "../Assets/Images/duck_cropped.png";

import arr from '../Data/participants.json';
import SearchBar from "./SearchBar.js";
import CategoryBar from "./CategoryBar.js";

import React, { useContext } from 'react';
import { ThemeContext } from "../Theme/ThemeContext";
import Header from '../Theme/Header';


function ToDoApp() {
  const { theme } = useContext(ThemeContext);
  const [participants, setParticipants] = useState(arr);
  const [filterName, setFilterName] = useState("");
  const [filterActiveStatus, setFilterActiveStatus] = useState(0);

  const changeParticipant = (newParticipant) => {
    setParticipants((participants) => {
      let participantsNew = participants.filter(
        (participant) => participant.id !== newParticipant.id
      );
      return [...participantsNew, newParticipant];
    });
  };

  const deleteParticipant = (index) => {
    setParticipants((participants) =>
      participants.filter((participant) => participant.id !== index)
    );
  };

  const addParticipant = (newParticipant) => {
    setParticipants((participants) => {
      newParticipant.id = participants.length + 1;
      newParticipant.active = true;
      let participantsNew = [...participants];
      return [...participantsNew, newParticipant];
    });
  };

  const filterParticipant = (newFilterName) => {
    setFilterName(newFilterName);
    console.log("filterParticipant " + newFilterName + " " + filterName);
  };

  const filterActive = (status) => {
    setFilterActiveStatus(status);
    console.log("filterActive " + status + " " + filterName);
  };

  return (
    <div className="ToDoApp" style={{ backgroundColor: theme === 'light' ? '#ffffff' : '#454545' }}>
    <Header></Header>
      <div className="header">
        <img src={logo} alt="" />
        <h1 className="table-title">Dmitrii Zalevskii Software</h1>
      </div>
      <div className="content">
        <h1 className="table-title">TODO List</h1>
        <Form arr={participants} addParticipant={addParticipant} />
        <SearchBar arr={participants} filterParticipant={filterParticipant} />
        <Table
          arr={(filterName.length > 0) ? participants.filter((participant) => participant.task.toLowerCase().includes(filterName.toLowerCase())) : participants}
          changeParticipant={changeParticipant}
          deleteParticipant={deleteParticipant}
        />
      </div>
    </div>
  );
}

export default ToDoApp;


