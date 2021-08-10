import { FORGOT } from '../constants/actionTypes';
import * as api from '../api';
import Swal from 'sweetalert2';


export const forgotPassword = (userData, history) => async(dispatch) => {
    try {
        const { data } = await api.forgotPassword(userData);
        if(data?.success) {
            localStorage.clear();

            //dispatch({ type: FORGOT, data })

            //history.push('/')
        } else {
            Swal.fire({
                icon: 'error',
                title: data?.message,
                showConfirmButton: false,
                //timer: 1800
              })
            localStorage.clear();
        }
    } catch (error) {
        console.log(error)
    }
}