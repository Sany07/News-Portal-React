import axios from "axios";

const AxiosConfig = axios.create({
    // baseURL: 'http://127.0.0.1:8000/api/',
    baseURL: "https://itechportal.herokuapp.com/api/",
});
// Alter defaults after instance has been created
// instance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
export default AxiosConfig;
