import React, { useEffect, useState } from "react";
import './App.css';
import API from "./utils/API";

import Navbar from "./components/navbar/navbar";
import SearchBar from "./components/searchbar/searchbar";
import Table from "./components/table/table";

function App() {

  //Hooks
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sorter, setSorter] = useState("");
  const [dobSorter, setDobSorter] = useState("");

  //Use Effect
  useEffect(() => {
    loadUsers();
  }, [])

  //Functions
  const loadUsers = () => {
    API.getEmployees().then((users) => {
      setUsers(users)
      console.log(users)
    })
      .catch(err => console.log(err));
  };

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSortUsers = event => {
    let sortOrder = event.target.getAttribute("data-value");

    //sort ascending/descending/default
    if (sortOrder === "descending") {
      setUsers(users.sort((a, b) => (a.name > b.name) ? 1 : -1));
      setSorter("ascending");
    } else if (sortOrder === "ascending") {
      setUsers(users.sort((a, b) => (a.name < b.name) ? 1 : -1));
      setSorter("descending");
    } else {
      setUsers(users.sort((a, b) => (a.name > b.name) ? 1 : -1));
      setSorter("ascending");
    }
  };

  const handleSortDob = event => {
    let sortOrder = event.target.getAttribute("data-value");

    //sort ascending/descending/default
    if (sortOrder === "descending") {
      setUsers(users.sort((a, b) => (a.dob > b.dob) ? 1 : -1));
      setDobSorter("ascending");
    } else if (sortOrder === "ascending") {
      setUsers(users.sort((a, b) => (a.dob < b.dob) ? 1 : -1));
      setDobSorter("descending");
    } else {
      setUsers(users.sort((a, b) => (a.dob > b.dob) ? 1 : -1));
      setDobSorter("ascending");
    }
  };
  //Return
  return (
    <div className="App">
      <Navbar />
      <SearchBar
        handleInputChange={handleInputChange}
        results={searchTerm}
      />
      <Table
        handleSortUsers={handleSortUsers}
        sorter={sorter}
        handleSortDob={handleSortDob}
        dobSorter={dobSorter}
        users={users}
        searchTerm={searchTerm}
      />
    </div>
  );
}

export default App;