import {actionTypes} from './actionTypes.js'
import axios from 'axios';

export const getUserData = (name,page=1,per_page=5) => async (dispatch,getState) => {
    dispatch({
        type:actionTypes.FETCH_USER_REQUEST
    })
    const payload = {
        url:`https://api.github.com/search/repositories?q=${name}&page=${page}&per_page=${per_page}`,
        mathod:'get'
    }
    try {
        const {data} = await axios(payload)
        dispatch({
            type:actionTypes.FETCH_USER_SUCCESS,
            payload:data.items
        })
    } catch (error) {
        console.error(error)
        dispatch({
            type:actionTypes.FETCH_USER_ERROR
        })
    }
}

export const authUserLogin = () => {
    
    return {
        type:actionTypes.USER_LOGIN_REQUEST
    }
}

export const authUserLogout = () => {
    return {
        type:actionTypes.USER_LOGOUT_REQUEST
    }
}