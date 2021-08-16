import { SIGNUP, AUTH } from '../constants/actionTypes';
import * as api from '../api';
import axios from 'axios';
import Swal from 'sweetalert2';
import { getUserInfo, getTrendingPeople, getSuggestedFriends } from './userInfo';
import { getFeeds } from './feeds';

//Action Creators

// New User SignUp
export const signUp = (userData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(userData);
        if (data?.success) {

            dispatch({ type: AUTH, data })

            //dispatch(getUserInfo());

            history.push('/')

            Swal.fire({
                icon: 'success',
                iconColor: '#f9751c',
                title: data?.message + ' Please login',
                showConfirmButton: false,
                //timer: 1800
            })

            localStorage.clear();

        } else {
            Swal.fire({
                icon: 'error',
                title: data?.message,
                showConfirmButton: false,
                //timer: 1800
            })
            //localStorage.clear();
        }
    } catch (error) {
        console.log(error)
    }
}

// Existing User Login via google / facebook Auth
export const socialLogin = (email, history) => async (dispatch) => {
    try {
        const { data } = await api.socialLogin(email);
        if (data?.success) {

            dispatch({ type: AUTH, data })

            dispatch(getUserInfo());

            dispatch(getTrendingPeople());

            dispatch(getSuggestedFriends());

            dispatch(getFeeds());

            localStorage.setItem('phone', false);

            history.push('/Home')

        } else {
            Swal.fire({
                icon: 'error',
                title: data?.message,
                showConfirmButton: false,
                //timer: 2000
            })

            history.push('/signup')

            Swal.fire({
                icon: 'success',
                iconColor: '#f9751c',
                title: data?.message,
                showConfirmButton: false,
                //timer: 2500
            })
        }
    } catch (error) {
        console.log(error)
    }
}

// user Login
export const userLogin = (userData, history) => async (dispatch) => {
    try {
        const { data } = await api.userLogin(userData);
        if (data?.success) {

            dispatch({ type: AUTH, data })


            dispatch(getUserInfo());

            dispatch(getTrendingPeople());

            dispatch(getSuggestedFriends());

            dispatch(getFeeds());

            history.push('/Home');

            // Swal.fire({
            //     icon: 'success',
            //     iconColor: '#f9751c',
            //     title: data?.message,
            //     showConfirmButton: false,
            //     //timer: 2500
            // })

        } else {
            Swal.fire({
                icon: 'error',
                title: data?.message,
                showConfirmButton: false,
                timer: 2000
            })
        }
    } catch (error) {
        console.log(error)
    }
}
