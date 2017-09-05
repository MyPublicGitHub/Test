import React from 'react'
import {StyleSheet, View, Image, Text, ImageBackground,TouchableOpacity} from 'react-native'
import Images from '../images/ImageList'

export default class SelectEnterView extends React.Component {
    constructor(props) {
        super(props);
    }
    // 设置header为空
    static navigationOptions = {
        header: null
    };
    //立即登录
    _onPressSign(){
        this.props.navigation.navigate('Login');
    }
    //加入企业
    _onPressJoinEnterprise(){

    }
    //创建企业
    _onProessCreateEnterprise(){

    }
    //甲方监督
    _onPressSupervise(){

    }
    
    render() {

        return (
            <ImageBackground
                source={Images.bg}
                resizeMode={'cover'}
                style={styles.container}>
                <View style={styles.center}>
                    <TouchableOpacity onPress={() =>this._onPressSign()}>
                        <View style={styles.item}>
                            <View>
                                <View style={styles.view3}>
                                    <Image source={Images.sign} style={styles.head}/>
                                    <Text style={styles.textTitle}>立即登录</Text>
                                </View>
                                <Text style={styles.textContent}>已有账号，立即登录使用</Text>
                            </View>
                            <Image source={Images.getInto} style={styles.into}/>
                        </View>
                    </TouchableOpacity>
                    
                    <View style={styles.line}></View>

                    <View style={styles.item}>
                        <View>
                            <View style={styles.view3}>
                                <Image source={Images.joinEnterprise} style={styles.head}/>
                                <Text style={styles.textTitle}>加入企业</Text>
                            </View>
                            <Text style={styles.textContent}>已收到企业代码？请加入企业</Text>
                        </View>
                        <Image source={Images.getInto} style={styles.into}/>
                    </View>

                    <View style={styles.line}></View>

                    <View style={styles.item}>
                        <View>
                            <View style={styles.view3}>
                                <Image source={Images.createEnterprise} style={styles.head}/>
                                <Text style={styles.textTitle}>创建企业</Text>
                            </View>
                            <Text style={styles.textContent}>免费创建新企业或者新的团队</Text>
                        </View>
                        <Image source={Images.getInto} style={styles.into}/>
                    </View>

                    <View style={styles.line}></View>

                    <View style={styles.item}>
                        <View>
                            <View style={styles.view3}>
                                <Image source={Images.supervise} style={styles.head}/>
                                <Text style={styles.textTitle}>甲方监督</Text>
                            </View>
                            <Text style={styles.textContent}>监管施工方？请进入甲方监督</Text>
                        </View>
                        <Image source={Images.getInto} style={styles.into}/>
                    </View>

                </View>
            </ImageBackground >
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    center: {
        backgroundColor: 'white',
        justifyContent: 'center',
        marginLeft:10,
        marginRight:10,
    },
    
    item: {
        flexDirection: 'row',
        margin:10,
        justifyContent: 'space-between',
        alignItems: 'center', 
    },
    
    view3: {
        flexDirection: 'row',
        marginBottom:3,
    },
    
    head: {
        height: 20,
        width: 20,
    },
    textTitle: {
        marginLeft:10,
        fontSize:12,
        color:'black'
    },
    textContent: {
        fontSize:8,
    },
    into: {
        height: 10,
        width: 10,
        alignItems: 'flex-end',
    },
    line: {
        backgroundColor: '#cccccc',
        height:1,
        marginLeft:10,
        marginRight:10,
    }
})