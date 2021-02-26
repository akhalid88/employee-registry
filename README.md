f# Employee Registry  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 
###### This readme has been procedurally generated 
![Banner](readme/banner.png)
-----------------------
## Table of Contents
1. [Description](#description)
2. [Deployed link](#deployed-link)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Code snippets](#code-snippets)
6. [Licenses](#licenses)
7. [Contributing](#contributing)
8. [Built With](#built-with)
9. [Questions](#questions)

-----------------------
## Description
An employee directory using React. Filter employess by search and also sort by name or date of birth.

![Main](readme/gif.gif)
-----------------------
## Deployed link
https://akhalid88.github.io/employee-registry/

-----------------------
## Installation
To install dependencies run the following command:

```
npm install
```

-----------------------
## Usage
To use this repo you will need a working knowledge of React. 

To run this tool use the following command.

```
npm start
```
-----------------------
## Code snippets

Having passed the user array to the table component, I ran into an issue where when searching for a user, the original state would lose the filtered out users so I needed to create a duplicate of the users without changing the original state. I set newUsers to the state of users and then if there was a search term, I would perform the filtering. Then I pass newusers regardless if there is a search term or not to the table rows. 

```javascript
let newUsers = props.users;
if (props.searchTerm) {
	newUsers = newUsers.filter(user => user.name.toLowerCase().includes(props.searchTerm.toLowerCase()));
}
```

Instead of sorting by column at the table level, I made use of React states to handle sorting of the name and date of birth columns. First I needed a state to keep track of whether the column is sorted or not and in which direction. 

```javascript
  const [sorter, setSorter] = useState("");
  const [dobSorter, setDobSorter] = useState("");
```

Each of the state getters can have 1 of 3 values. 'Ascending', 'descending', and "". The empty string is there for the initial load of the page where the page is not sorted and is only used on initial page load.Then based on the sort order of the column, I set the users to the appropriate sorting order. 

```javascript
const handleSortUsers = event => {
	let sortOrder = event.target.getAttribute("data-value");

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
```

FUTURE UPDATE: Plan to consolidate handleSortUsers and handleSortDob into a single function

-----------------------
## Licenses
This project uses a [MIT License](https://opensource.org/licenses/MIT). 

-----------------------
## Contributing
If you would like to contribute, you will need to know React.

-----------------------
## Built With

- React
- Axios
- Deployed with gh-pages

-----------------------
## Questions
Created by Muhammad A Khalid

If you have any questions you can reach me at the following email: [akhalid.code@gmail.com	](mailto:akhalid.code@gmail.com	)

Follow my other work at GitHub: https://github.com/akhalid88/
