import React, { useEffect, useState } from "react";
import './App.css';
import API from "./utils/API";

import Navbar from "./components/navbar/navbar";
import SearchBar from "./components/searchbar/searchbar";
import Table from "./components/table/table";
// import Wrapper from "./components/wrapper/wrapper";
// import Header from "./components/theader/theader";
// import Row from "./components/trow/trow";

function App() {

  //Hooks
  const [users, setUsers] = useState([]);

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
  }

  //Return
  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <Table
        users={users}
        // name={users.name}
        // image={users.image}
        // email={users.email}
        // phone={users.phone}
        // dob={users.dob}
      />
    </div>
  );
}

export default App;
