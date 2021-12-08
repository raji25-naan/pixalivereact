import { GETFEEDS, TRENDPOST, SETCATEGORY } from '../constants/actionTypes';
import { API } from '../api';


const profile = JSON.parse(localStorage.getItem('profile'));
let id = profile?.user?._id;
let token = profile?.token;

//Home Feeds 
export const getFeeds = () => async (dispatch) => {
    try {

        const { data } = await API.get(
            `/feeds?user_id=${id}`, { headers: { "token": `Bearer ${token}` } }
        )
        dispatch({ type: GETFEEDS, data });
    } catch (error) {
        console.log(error)
    }
}


// Explore Tab (Trending Posts)
export const getTrendingPost = () => async (dispatch) => {
    try {
        const { data } = await API.get(
            `/trending_post?user_id=${id}`, { headers: { "token": `Bearer ${token}` } }
        )
        if (data?.success) {
            dispatch({ type: TRENDPOST, data });
        }

    } catch (error) {
        console.log(error)
    }
}


// Explore Tab(Trending Posts by Category)
export const getPostByCategories = (String, loop) => async (dispatch) => {
    try {
        console.log(String, loop)
        const { data } = await API.get(
            `/trending_postByCategory?category_name=${String}&loop=${loop}`, { headers: { "token": `Bearer ${token}` } }
        )

        dispatch({ type: TRENDPOST, data });
        console.log("By Category", data);

    } catch (error) {
        console.log(error)
    }
}


