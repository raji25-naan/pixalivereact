import { SUGGESTFRIEND } from "../constants/actionTypes";

export default (suggestedFriends = [], action) => {
    switch(action.type) {
        case SUGGESTFRIEND:
            //console.log(action?.data?.trendingPeople);
            return { suggestedFriends:action?.data?.trendingPeople};
        default:
            return suggestedFriends;    
    }
}
