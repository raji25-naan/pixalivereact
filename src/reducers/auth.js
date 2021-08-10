import { SIGNUP, LOGIN, GETUSER, AUTH } from "../constants/actionTypes";
import { getUserInfo } from "../actions/userInfo";
import axios from "axios";

const authReducer = async(state= {authData: null}, action) => {
    
    switch(action.type) {
        case AUTH:
             localStorage.setItem('profile', JSON.stringify({ ...action?.data }));  
             console.log(action?.data)           
             getUserInfo();
            return { ...state, authData: action?.data };
        default:
            return state;
    }
 };

 export default authReducer;