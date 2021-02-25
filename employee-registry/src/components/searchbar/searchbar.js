import React from "react";
import "./searchbar.css";

function SearchBar(props) {
	return (
		<div>
			<input
				value={props.searchTerm}
				onChange={props.handleInputChange}
				type="search"
				placeholder="Search"
				className="searchbar"
			/>
		</div>
	);
}

export default SearchBar;