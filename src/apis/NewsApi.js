import AxiosConfig  from "../AxiosConfig"
 


export const fetchHomePageData = () => AxiosConfig.get('/homepage/');
export const fetchSingleNews = (id) => AxiosConfig.get(`/news/${id}`);
