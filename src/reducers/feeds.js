import { GETFEEDS } from "../constants/actionTypes";

export default ( feeds = [], action) => {
    switch(action.type) {
        case GETFEEDS:
            //console.log(action?.data?.feeds);
            return { feeds:action?.data?.feeds};
        default:
            return feeds;    
    }
}
