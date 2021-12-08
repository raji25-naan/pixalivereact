import axios from "axios";

export const API = axios.create({ baseURL: 'http://test.pixalive.me/api/user' })

// User SignUP
export const signUp = (userData) => API.post('/signup', userData);

// User Login
export const socialLogin = (userEmail) => API.post('/social-login', userEmail);
export const userLogin = (userData) => API.post('/login', userData);

// Password reset 
export const forgotPassword = (userInp) => API.post('/forgotpassword', userInp);



