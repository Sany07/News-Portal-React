import { combineReducers } from "redux";
import HomePageReducer from "./HomePageReducer";
import {newsReducer} from "./newsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {categoryReducer} from "./categoryReducer.";
import {tagReducer} from "./tagReducer";
import {commentReducer} from "./commentReducer";
import { newCommentReducer } from "./commentReducer";
import emailNewsLetterReducer from "./emailNewsLetterReducer";
import { registerReducer, loginReducer,logOutReducer } from "./authReducer";
import { topProgressBar } from "./topLoadingReaducer";

export const reducers = combineReducers({
    newsReducer,
    HomePageReducer,
    sidebarReducer,
    categoryReducer,
    tagReducer,
    commentReducer,
    newCommentReducer,
    emailNewsLetterReducer,
    registerReducer,
    loginReducer,
    logOutReducer,
    topProgressBar,
});
