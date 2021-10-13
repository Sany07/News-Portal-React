import axios from "axios";

const AxiosConfig = axios.create({
    baseURL: 'https://itechportal.herokuapp.com/api/',
});
// Alter defaults after instance has been created
// instance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
export default AxiosConfig;


