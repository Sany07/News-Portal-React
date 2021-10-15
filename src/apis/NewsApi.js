import AxiosConfig  from "../AxiosConfig"
 


export const fetchHomePageData = () => AxiosConfig.get('/homepage/');
export const fetchSingleNews = (slug) => AxiosConfig.get(`/news/${slug}/`);
