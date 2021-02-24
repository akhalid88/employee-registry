import React from "react";
import "./theader.css";

function Header() {
	return (
		<thead>
			<tr>
				<th>Image</th>
				<th>Name<i class="fas fa-caret-down"></i></th>
				<th>Phone</th>
				<th>Email</th>
				<th>DOB</th>
			</tr>
		</thead>
	);
}

export default Header;