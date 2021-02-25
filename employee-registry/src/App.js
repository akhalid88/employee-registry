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

  //Use Effect
  useEffect(() => {
    loadUsers();
  }, [])

  // useEffect(() => {
  //   if (searchTerm) {
  //     loadUsersByName();
  //   }
  // }, [searchTerm])

  //Functions
  const loadUsers = () => {
    API.getEmployees().then((users) => {
      setUsers(users)
      console.log(users)
    })
      .catch(err => console.log(err));
  };

  // const loadUsersByName = () => {
  //   //write filter such that state reflects searchTerm
  //   setUsers(users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase())));
  //   console.log(users);
  // };


  const handleInputChange = event => {
    // console.log(event.target.value);
    setSearchTerm(event.target.value);
    // console.log(searchTerm);
  };

  //Return
  return (
    <div className="App">
      <Navbar />
      <SearchBar
        handleInputChange={handleInputChange}
        results={searchTerm}
      />
      <Table users={users} searchTerm={searchTerm} />
    </div>
  );
}

export default App;


// return (
//     <div className="App">
//       <NavBar />
//       <SearchBar />
//       <Wrapper>
//         <Table>
//           <Row />
//         </Table>
//       </Wrapper>
//     </div>
// )