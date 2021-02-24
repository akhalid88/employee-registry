import React from "react";
// import logo from './logo.svg';
import './App.css';

import Navbar from "./components/navbar/navbar";
// import Wrapper from "./components/wrapper/wrapper";
import SearchBar from "./components/searchbar/searchbar";
import Table from "./components/table/table";
// import Header from "./components/theader/theader";
// import Row from "./components/trow/trow";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <Table />
    </div>
  );
}

export default App;
