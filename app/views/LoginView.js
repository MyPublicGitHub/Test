import React from 'react'
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import Images from '../images/ImageList'
import * as Progress from 'react-native-progress';
import AsUtils from '../utils/AsyncStorageUtils'

export default class LoginView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isLoading: false
        };
    }
    // 设置header为空
    static navigationOptions = {
        header: null
    };

    _onPressHome() {
        // this.props.navigation.navigate('SelectEntry');
        const { navigate, goBack, state } = this.props.navigation;
        // 在第二个页面,在goBack之前,将上个页面的方法取到,并回传参数,这样回传的参数会重走render方法
        // state.params.callback('从LoginView界面回传的数据');
        goBack(null);
        AsUtils.clear();
    }

    _isNull() {
        if (this.state.username === '' || this.state.username === null) {
            ToastAndroid.show('账号不能为空!', ToastAndroid.SHORT);
            return true;
        }
        if (this.state.password === '' || this.state.password === null) {
            ToastAndroid.show('密码不能为空!', ToastAndroid.SHORT);
            return true;
        }
        return false;
    }

    _onPressLogin() {
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
                    userAccount: this.state.username,
                    userPassword: this.state.password,
                    appKey: 'Android#123456',
                })
            }
            this.setState({
                isLoading: true
            })

            fetch(url, header)
                .then((response) => {
                    return response.json()
                })
                .then((responseJson) => {

                    if (responseJson.statusCode == '0000') {
                        ToastAndroid.show('登录成功!', ToastAndroid.SHORT);
                        AsUtils.setItem(AsUtils.AS_KEY_USERACCOUNT, this.state.username);
                        AsUtils.setItem(AsUtils.AS_KEY_PASSWORD, this.state.password);
                    } else {
                        //alert(responseJson.statusDesc + 'response')
                        ToastAndroid.show('登录shibai !' + responseJson.statusDesc, ToastAndroid.SHORT);
                    }

                })
                .catch((error) => {
                    alert(error)
                })

            this.setState({
                isLoading: false
            })
        }
    }

    componentDidMount() {

        //alert(AsUtils.getItem(AsUtils.AS_KEY_USER_NAME))

        AsUtils.getItem(AsUtils.AS_KEY_USERACCOUNT).then((value) => {
            this.setState({
                username: value
            })

        });
        AsUtils.getItem(AsUtils.AS_KEY_PASSWORD).then((value) => {
            this.setState({
                password: value
            })

        });

        if (this.state.username !== '' && this.state.password !== '') {
            this._onPressLogin();
        }
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.load}>
                    <Progress.CircleSnail style={{ margin: 10, alignSelf: 'center' }} color={['red', 'green', 'blue', 'black', 'yellow']} size={30} />
                    <Text>正在加载...</Text>
                </View>
            )
        }
        return (
            <View style={styles.background}>

                <View style={styles.container}>

                    <View style={styles.viewTitle}>
                        <TouchableOpacity onPress={() => this._onPressHome()}>
                            <Text style={styles.textTitle}>首页</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewLogo}>
                        <Image style={styles.imageLogo} source={Images.logo} resizeMode='center' />
                    </View>

                    <View style={styles.viewItem}>
                        <Text style={styles.textItem}>账号</Text>
                        <TextInput style={styles.textInputItem}
                            underlineColorAndroid={"transparent"}
                            keyboardType={'phone-pad'}
                            maxLength={11}
                            value={this.state.username}
                            onChangeText={(text) => this.setState({ username: text })}
                            placeholder={'请输入手机号'} />
                    </View>

                    <View style={styles.line} />

                    <View style={styles.viewItem}>
                        <Text style={styles.textItem}>密码</Text>
                        <TextInput style={styles.textInputItem}
                            underlineColorAndroid="transparent"
                            secureTextEntry={true}
                            value={this.state.password}
                            onChangeText={(text) => this.setState({ password: text })}
                            placeholder={'请输入登录密码'} />
                    </View>

                    <View style={styles.line} />

                    <TouchableOpacity onPress={() => this._onPressLogin()}>
                        <View style={styles.viewLogin}>
                            <Text style={styles.textLogin}>登录</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.viewForgetPassword}>
                        <Text style={styles.textForgetPassword}>忘记密码？</Text>
                    </View>
                </View>

            </View>
        )
    }

}
var fontSize = 12;
const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'white',
    },

    container: {
        margin: 10,
    },

    viewTitle: {
        alignItems: 'flex-end',

    },

    textTitle: {
        color: 'blue',
        fontSize: fontSize,
        paddingLeft: 10,
    },

    viewLogo: {
        alignItems: 'center',
        margin: 30,
    },

    imageLogo: {
        height: 60,
        width: 60,
    },

    viewItem: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    textItem: {
        fontSize: fontSize,
        color: 'black',
    },
    textInputItem: {
        fontSize: fontSize,
        flex: 1,
        marginLeft: 10,
        padding: 0,
    },

    line: {
        height: 0.5,
        backgroundColor: 'black',
        marginTop: 10,
    },

    viewLogin: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        marginTop: 20,
        padding: 10,
    },

    textLogin: {
        color: 'white',
        fontSize: fontSize,
    },

    viewForgetPassword: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textForgetPassword: {
        fontSize: 8,
    },

    load: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})