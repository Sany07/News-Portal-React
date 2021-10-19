import { FETCH_NEWS_COMMENT } from './actionTypes'
import * as api from '../../apis/NewsApi'



export const getNewsComments = (id) => async (dispatch) => {
    try {

    const response = await api.fetchNewsComments(id);
    console.log('response', response);
    dispatch({ type: FETCH_NEWS_COMMENT, payload: response });
    } catch (error) {
      console.log('error');
    }

};
