import {actionTypes} from './actionTypes.js'


const initState = {
    auth:{
        userLogin:false
    },
    userData:{
        isLoading:false,
        isError:false,
        data:[]
    }
}

export const reducer = (state=initState, action) =>{
    switch (action.type) {
        case actionTypes.USER_LOGIN_REQUEST:
            return {
                ...state,
                auth:{
                    ...state.auth,
                    userLogin:true
                }
        }
        case actionTypes.USER_LOGOUT_REQUEST:
            return {
                ...state,
                auth:{
                    ...state.auth,
                    userLogin:false
                }
        }
        case actionTypes.FETCH_USER_REQUEST: {
            return{
                ...state,
                userData:{
                    ...state.userData,
                    isLoading:true,
                    isError:false
                }
            }
        }
        case actionTypes.FETCH_USER_SUCCESS: {
            return{
                ...state,
                userData:{
                    ...state.userData,
                    isLoading:false,
                    isError:false,
                    data:[...action.payload]
                }
            }
        }
        case actionTypes.FETCH_USER_ERROR: {
            return{
                ...state,
                userData:{
                    ...state.userData,
                    isLoading:false,
                    isError:true
                }
            }
        }

        
    
        default:
            return state;
    }
}