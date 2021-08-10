import { GETUSER } from "../constants/actionTypes";

export default (userInfo = {}, action) => {
    switch(action.type) {
        case GETUSER:
            localStorage.setItem('userDetail', JSON.stringify({ ...action?.data }));  
            return { userInfo : action?.data };
        default:
            return userInfo;    
    }
}