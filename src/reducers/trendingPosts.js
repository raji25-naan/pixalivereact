import { TRENDPOST } from "../constants/actionTypes";

export default (trendingPost = [], action) => {
    switch (action.type) {
        case TRENDPOST:
            console.log(action?.data?.feeds);
            return { trendingPost: action?.data?.feeds };
        default:
            return trendingPost;
    }
}
