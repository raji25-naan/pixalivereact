import { GETFEEDS } from '../constants/actionTypes';
import { API } from '../api';

export const getFeeds = () => async (dispatch) => {
    try {
        const profile = JSON.parse(localStorage.getItem('profile'));
        let id = profile?.user?._id;
        let token = profile?.token;
        const { data } = await API.get(
            `/feeds?user_id=${id}&offset=20`, { headers: { "token": `Bearer ${token}` } }
        )
        dispatch({ type: GETFEEDS, data });
    } catch (error) {
        console.log(error)
    }
}
