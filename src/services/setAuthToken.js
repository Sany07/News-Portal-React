import axios from "axios";

const setAuthToken = (token) => {
    if (token) {
        axios.defaults.headers.common["Authorization"] = token;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
};
// export default function authHeader() {
//   const user = JSON.parse(localStorage.getItem("user"));

//   if (user && user.accessToken) {

//     // return { Authorization: "Bearer " + user.accessToken };

//   } else {
//     return {};
//   }
// }
export default setAuthToken;
