import { combineReducers } from 'redux';
import { LOG_USER_OUT, 
         GET_BALANCE,
         GET_USER_INFO,
         LOG_IN } from './actions';
import axios from 'axios';

function paymo(state = {}, action) {
    switch (action.type) {
        case LOG_USER_OUT:
            return Object.assign({}, state, {
                isLoggedIn: false,
                globalFeed: {},
                userFeed: {},
                balance: null,
                userInfo: {}
            })
        case GET_BALANCE:
            console.log('payload', action.payload)
            return Object.assign({}, state, { 
                balance: action.payload
            })
        case GET_USER_INFO:
            console.log('reducer get user info', action.payload)
            return Object.assign({}, state, {
                user: action.payload
            })
        case LOG_IN: 
           return Object.assign({}, state, {
               isLoggedIn: true,
               loggedInUser: action.payload
           })
        default:
            return state
    }
}

// const paymo = combineReducers({
//     paymo
// })

export default paymo