import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import Images from '../images/ImageList'


var name = '';
var pass = '';

export default class SplashView extends React.Component {
    constructor(props) {
        super(props);
    }
    // 设置header为空
    static navigationOptions = {
        header: null
    };
    _paramsToLastPage() {
        const { navigate, goBack, state } = this.props.navigation;
        // 在第二个页面,在goBack之前,将上个页面的方法取到,并回传参数,这样回传的参数会重走render方法
        // state.params.callback('从SplashView界面回传的数据');
        goBack(null);
    }
    
    componentDidMount() {
        this.timer = setTimeout(() => { this.props.navigation.navigate('SelectEnter') }, 1000);
    };
    componentWillMount(){
        // AsUtils.getItem(AsUtils.AS_KEY_USERACCOUNT).then((value) => {
        //     name=value
        //     if (name !== '') {
        //         this._autoLogin(name, pass);
        //     } else {
        //         alert(name)
                
        //     }
        // });
        // AsUtils.getItem(AsUtils.AS_KEY_PASSWORD).then((value) => {
        //     pass= value
            
        // });
        
    }
    _autoLogin(username, password) {
        //alert("zhanghao:" + this.state.username + ":mima:" + this.state.password)
        if (this._isNull() == false) {
            var url = 'http://api.test.zhu-ku.com/zhuku/ws/system/auth/access';
            var header = {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userAccount: username,
                    userPassword: password,
                    appKey: 'Android#123456',
                })
            }

            fetch(url, header)
                .then((response) => {
                    return response.json()
                })
                .then((responseJson) => {

                    if (responseJson.statusCode == '0000') {
                        ToastAndroid.show('登录成功', ToastAndroid.SHORT);
                        AsUtils.setItem(AsUtils.AS_KEY_USERACCOUNT, username);
                        AsUtils.setItem(AsUtils.AS_KEY_PASSWORD, password);
                        this.props.navigation.navigate('Main')
                    } else {
                        //alert(responseJson.statusDesc + 'response')
                        //ToastAndroid.show('登录失败：' + responseJson.statusDesc, ToastAndroid.SHORT);
                        this.props.navigation.navigate('SelectEnter')
                    }
                })
                .catch((error) => {
                    //alert(error)
                    this.props.navigation.navigate('SelectEnter')
                })
        }
    }
    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    };

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={Images.splash} />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    image: {
        width: 400,
        height: 100,
        marginBottom: 40
    }
})