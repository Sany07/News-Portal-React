import AxiosConfig from "../AxiosConfig";

export const register = (userData) => AxiosConfig.post(`/account/register/`, userData);
export const login = (userData) => AxiosConfig.post(`/account/login/`, userData);
