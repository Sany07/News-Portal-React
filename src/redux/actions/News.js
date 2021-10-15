import { FETCH_SINGLE_NEWS } from './actionTypes'
import * as api from '../../apis/NewsApi'




export const getSingleNews = (id) => async (dispatch) => {
    console.log(id);
    const response = await api.fetchSingleNews(id);
    console.log(response);
    dispatch({ type: FETCH_SINGLE_NEWS, payload: response });
    

};
