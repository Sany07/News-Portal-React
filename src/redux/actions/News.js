import { FETCH_SINGLE_NEWS } from './actionTypes'
import * as api from '../../apis/NewsApi'

export const getSingleNews = (slug) => async (dispatch) => {

const initialstate = {
    isloading : false

}
console.log('slugggg', slug);
    try {

    const response = await api.fetchSingleNews(slug);
    dispatch({ type: FETCH_SINGLE_NEWS, payload: response });
    } catch (error) {
      console.log(error);
    }

};
