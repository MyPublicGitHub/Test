import React from 'react'
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity, ToastAndroid ,Modal} from 'react-native'
import Images from '../images/ImageList'
import * as Progress from 'react-native-progress';

import { connect } from 'react-redux';
import { doLogin } from '../redux/actions/LoginAction';


class LoginView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '18260025092',
            password: '00000000',
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
        const { dispatch, login } = this.props;
        console.log('_onPressLogin')
        if (this._isNull() == false) {
            dispatch(doLogin(this.state.username, this.state.password));
            if (login.user != null) {
                this.props.navigation.navigate('Main')
            }
        }
    }

    componentDidMount() {

    }


    render() {
        const { dispatch, login } = this.props;
        return login.isSuccess ?
            (
                <View style={styles.load}>
                    <Progress.CircleSnail style={styles.progress} color={['red', 'green', 'blue', 'black', 'yellow']} size={30} />
                    <Text>正在加载...</Text>
                </View>
            )
            : 
            (
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

                        <TouchableOpacity onPress={() => this._onPressLogin(dispatch)}>
                            <View style={styles.viewLogin}>
                                <Text style={styles.textLogin}>登录</Text>
                            </View>
                        </TouchableOpacity>

                        <View onPress={() => alert('忘记密码？')} style={styles.viewForgetPassword}>
                            <Text style={styles.textForgetPassword}>忘记密码？</Text>
                        </View>
                    </View>

                </View>
            )
    }

}


function mapStateToProps(state) {
    const { login } = state;
    return {
        login
    }
}

export default connect(mapStateToProps)(LoginView)

var fontSize = 16;
const styles = StyleSheet.create({

    progress: {
        margin: 10,
        alignSelf: 'center',

    },

    background: {
        flex: 1,
        backgroundColor: 'white',
    },

    container: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
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
        height: 100,
        width: 100,
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
        height: 1,
        backgroundColor: '#cccccc',
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
        fontSize: 12,
    },

    load: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }

})
