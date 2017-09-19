'use strict';

import * as types from './ActionTypes.js';
import Api from '../../api/Api'


// 执行登录 
export function doLogin(username, password) {
    return dispatch => {
        dispatch(isLogining());

        var url = Api.access;
        var header = {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userAccount: username,
                userPassword: password,
                appKey: 'IOS#12134',
            })
        }
        fetch(url, header)
            .then((response) => {
                return response.json()
            })
            .then((responseJson) => {

                if (responseJson.statusCode == '0000') {

                    //AsUtils.setItem(AsUtils.AS_KEY_USERACCOUNT, this.state.username);
                    //AsUtils.setItem(AsUtils.AS_KEY_PASSWORD, this.state.password);

                    // GV.ACCESS_TOKEN = responseJson.tokenCode;
                    // GV.USER_NAME = responseJson.returnData.userName;
                    // GV.USER_PORTRAIT = responseJson.returnData.userHeadImg;
                    // GV.COMPANYNAME = responseJson.returnData.companyName;
                    // console.log(GV.ACCESS_TOKEN)
                    // this.props.navigation.navigate('Main')
                    dispatch(loginSuccess(false, responseJson));
                } else {
                    dispatch(loginSuccess(false, null));
                }
            })
            .catch((error) => {
                dispatch(loginSuccess(false, null));
                alert(error)
            })
    }
}
// 正在登录 
function isLogining() {
    return {
        type: types.LOGIN_IN_DOING
    }
}
// 登录完成 
function loginSuccess(isSuccess, response) {
    
    return {
        type: types.LOGIN_IN_DONE,
        isSuccess: isSuccess,
        user: response.returnData,
        tokenCode:response.tokenCode,
    }
}