'use strict';
import * as types from '../actions/ActionTypes';
// 初始状态 
const initialState = {
    status: 'init', // init,doing,done 
    isSuccess: false,
    user: null,
    tokenCode:null,
}
export default function loginIn(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_IN_INIT: // 初始状态 
            return Object.assign({}, state, {
                status: 'init',
                isSuccess: true,
                user: null
            });
        case types.LOGIN_IN_DOING: // 正在登录 
            return Object.assign({}, state, {
                status: 'doing',
                isSuccess: true,
                user: null
            });
        case types.LOGIN_IN_DONE: // 登录完成 
            return Object.assign({}, state, {
                status: 'done',
                isSuccess: false,
                user: action.user,
                tokenCode : action.tokenCode,
            })
        default: return state;
    }
}