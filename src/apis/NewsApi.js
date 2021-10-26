import AxiosConfig from "../AxiosConfig";

export const fetchHomePageData = () => AxiosConfig.get("/homepage/");
export const fetchSingleNews = (slug) => AxiosConfig.get(`/news/${slug}/`);
export const fetchCategoryNews = (slug) =>
    AxiosConfig.get(`/category/${slug}/`);
export const fetchTagNews = (slug) => AxiosConfig.get(`/tag/${slug}/`);
export const fetchSidebarData = () => AxiosConfig.get("/sidebar/");
export const fetchNewsComments = (id) => AxiosConfig.get(`comments/${id}/`);
// export const createNewsComments = (comment) =>
//     AxiosConfig.post(`/comments/`, comment);
export const emailNewsLetterSubscription = (email) =>
    AxiosConfig.post("email-subscription/", { email });

// .then(response => {
// return response;
// })
// .catch(err => console.log('dd'));

export const createNewsComments = (comment) => {
    AxiosConfig.post(`/comments/`, comment)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
};
