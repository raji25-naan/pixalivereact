import { GETUSER, GETPEOPLE, SUGGESTFRIEND } from '../constants/actionTypes';
import axios from 'axios';
import { API } from '../api';
import Swal from 'sweetalert2';

export const getUserInfo = () => async (dispatch) => {
    try {

        const profile = JSON.parse(localStorage.getItem('profile'));
        let id = profile?.user?._id;
        let token = profile?.token;
        const { data } = await API.get(
            `/userInfo?user_id=${id}`, { headers: { "token": `Bearer ${token}` } }
        )

        dispatch({ type: GETUSER, data })

    } catch (error) {
        console.log(error)
    }
}

export const getTrendingPeople = () => async (dispatch) => {
    try {

        const profile = JSON.parse(localStorage.getItem('profile'));
        let id = profile?.user?._id;
        let token = profile?.token;
        const { data } = await API.get(
            `/trendingPeople?user_id=${id}`, { headers: { "token": `Bearer ${token}` } }
        )

        dispatch({ type: GETPEOPLE, data })

    } catch (error) {
        console.log(error)
    }
}

export const getSuggestedFriends = () => async (dispatch) => {
    try {

        const profile = JSON.parse(localStorage.getItem('profile'));
        let id = profile?.user?._id;
        let token = profile?.token;
        const { data } = await API.get(
            `/trendingPeople?suggestion=true`, { headers: { "token": `Bearer ${token}` } }
        )

        dispatch({ type: SUGGESTFRIEND, data })

    } catch (error) {
        console.log(error)
    }
}
