import { GETPEOPLE } from "../constants/actionTypes";

export default (trendingPeople = [], action) => {
    switch(action.type) {
        case GETPEOPLE:
            //console.log(action?.data?.trendingPeople);
            return {trendingPeople:action?.data?.trendingPeople};
        default:
            return trendingPeople;    
    }
}
