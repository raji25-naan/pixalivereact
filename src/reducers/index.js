import { combineReducers } from "redux";

import auth from './auth';
import userInfo from "./userInfo";
import trendingPeople from "./trendingPeople";
import suggestedFriends from "./suggestedFriends";
import feeds from "./feeds";
import trendingPosts from "./trendingPosts";
import setCategory from "./setCategory";
export default combineReducers({ auth, userInfo, trendingPeople, suggestedFriends, feeds, trendingPosts, setCategory });