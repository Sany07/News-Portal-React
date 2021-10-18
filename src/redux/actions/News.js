import { FETCH_SINGLE_NEWS, FETCH_SIDEBAR_DATA, 
FETCH_SINGLE_CATEGORY_DATA, FETCH_SINGLE_TAG_DATA } from './actionTypes'
import * as api from '../../apis/NewsApi'

export const getSingleNews = (slug) => async (dispatch) => {
    console.log('slugggg--', slug);
    
    try {
        const response = await api.fetchSingleNews(slug);
        dispatch({ type: FETCH_SINGLE_NEWS, payload: response });
    } 
    catch (error) {
      console.log(error);
    }

};


export const GetSidebarData = (slug) => async (dispatch) => {

// console.log('slugggg--', slug);
    try {

    const response = await api.fetchSidebarData();
    dispatch({ type: FETCH_SIDEBAR_DATA, payload: response });
    } catch (error) {
      console.log('error');
    }

};

export const GetSingleTagData = (slug) => async (dispatch) => {
console.log(slug);
    try {

    const response = await api.fetchTagNews(slug);
    dispatch({ type: FETCH_SINGLE_TAG_DATA, payload: response });
    } catch (error) {
      console.log('error');
    }

};

export const GetSingleCategoryData = (slug) => async (dispatch) => {
    try {

    const response = await api.fetchCategoryNews(slug);
    dispatch({ type: FETCH_SINGLE_CATEGORY_DATA, payload: response });
    } catch (error) {
      console.log('error');
    }

};
