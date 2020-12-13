import * as types from '../types'
import axios from 'axios';

export const fetchcategories=()=> async dispatch=> {

    return axios.get("https://api.jsonbin.io/b/5fd0a57d516f9d12702a4ace")
        .then(response => {
            return response.data
        })
        .then(data => {
            console.log(data);
            dispatch({
                type: types.GET_CATEGORIES,
                payload: data
            })
        })
        .catch(error => {
            throw (error);
        });
};
