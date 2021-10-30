import { combineReducers } from "redux";
import newsReducer from "./newsReducer";
import HomePageReducer from "./HomePageReducer";
import sidebarReducer from "./sidebarReducer";
import categoryReducer from "./categoryReducer.";
import tagReducer from "./tagReducer";
import commentReducer from "./commentReducer";
import { newCommentReducer } from "./commentReducer";
import emailNewsLetterReducer from "./emailNewsLetterReducer";

export const reducers = combineReducers({
    newsReducer,
    HomePageReducer,
    sidebarReducer,
    categoryReducer,
    tagReducer,
    commentReducer,
    newCommentReducer,
    emailNewsLetterReducer,
});
