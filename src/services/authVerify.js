import jwt_decode from "jwt-decode";
import store from "../store";
import { LOGIN_SUCCESS, LOGOUT } from "../redux/actions/actionTypes";

export const authVerify = () => {
    if (localStorage.ItechJWT) {
        // setAuthToken(localStorage.ItechJWT);
        const decoded = jwt_decode(localStorage.ItechJWT);
        // console.log(decoded);
        store.dispatch({ type: LOGIN_SUCCESS, payload: decoded });
        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) {
            store.dispatch({ type: LOGOUT });
        }
    }
};
