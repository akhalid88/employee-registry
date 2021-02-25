import axios from "axios";

export default {
  getEmployees: function () {
    return new Promise((resolve, reject) => {
      axios.get("https://randomuser.me/api/?results=100").then((res) => {
        const users = res.data.results;
        const results = users.map((user) => {
          //Format user dob to MM/DD/YYYY format
          let birthday = user.dob.date.split("T");
          birthday = birthday[0].split("-")
					birthday = birthday[1] + "/" + birthday[2] + "/" + birthday[0];

          return {
            name: `${user.name.first} ${user.name.last}`,
            email: user.email,
            image: user.picture.thumbnail,
            phone: user.phone,
            dob: birthday
          };
        });
        resolve(results);
      }).catch((err) => reject(err));
    });
  }
};