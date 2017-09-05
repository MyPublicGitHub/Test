import React, {
    AsyncStorage
} from 'react-native';
import Toast,{DURATION} from 'react-native-easy-toast';  //引入Toast控件
export default class AsyncStorageUtils {

    // 登录用户名
    static AS_KEY_USERACCOUNT = 'AS_KEY_USERACCOUNT';
    static AS_KEY_PASSWORD = 'AS_KEY_PASSWORD';

    /**
     * 获取
     * @param key
     * @returns {Promise<T>|*|Promise.<TResult>}
     */
    static getItem(key) {
        return AsyncStorage.getItem(key).then((value) => {
            const jsonValue = JSON.parse(value);
            return jsonValue;
        });
     

        // return AsyncStorage.getItem(key, (error, value) => {
        //     if (!error) {
        //         if (value !== '' && value !== null) {
        //             const jsonValue = JSON.parse(value);
        //             return jsonValue;
        //         } else {
        //             return '';
        //         }
        //     } else {
        //         return '';
        //     }
        // })

    }

    /**
     * 保存
     * @param key
     * @param value
     * @returns {*}
     */
    static setItem(key, value) {
        return AsyncStorage.setItem(key, JSON.stringify(value));
    }

    /**
     * 更新
     * @param key
     * @param value
     * @returns {Promise<T>|Promise.<TResult>}
     */
    static update(key, value) {
        return DeviceStorage.get(key).then((item) => {
            value = typeof value === 'string' ? value : Object.assign({}, item, value);
            return AsyncStorage.setItem(key, JSON.stringify(value));
        });
    }

    /**
     * 删除
     * @param key
     * @returns {*}
     */
    static removeItem(key) {
        return AsyncStorage.removeItem(key);
    }

    /**
     * 清空所有本地存储
     */
    static clear() {
        return AsyncStorage.clear();
    }
}
