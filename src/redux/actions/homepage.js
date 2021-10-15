import { FETCH_HOMEPAGE } from './actionTypes'
import * as api from '../../apis/NewsApi'




export const getHomepageData = () => async (dispatch) => {
    try {
      const response = await api.fetchHomePageData();
      // const response = await axios.get("http://127.0.0.1:8000/api/homepage/")
      dispatch({ type: FETCH_HOMEPAGE, payload: response });
    } catch (error) {
      console.log('error');
    }

};
