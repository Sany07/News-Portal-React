import AxiosConfig  from "../AxiosConfig"
 


export const fetchHomePageData = () => AxiosConfig.get('/homepage/');
export const fetchSingleNews = (slug) => AxiosConfig.get(`/news/${slug}/`);
export const fetchCategoryNews = (slug) => AxiosConfig.get(`/category/${slug}/`);
export const fetchTagNews = (slug) => AxiosConfig.get(`/tag/${slug}/`);
export const fetchSidebarData = () => AxiosConfig.get('/sidebar/');
