import React from 'react'
import {StyleSheet, View, Image, Text, ImageBackground} from 'react-native'
import Images from '../images/ImageList'

export default class SelectEnterView extends React.Component {

    // 设置header为空
    static navigationOptions = {
        header: null
    };

    render() {

        return (
            <ImageBackground
                source={Images.bg}
                resizeMode={'cover'}
                style={styles.container}>
                <View style={styles.center}>
                    //条目
                    <View style={styles.view}>
                        //内容
                        <View style={styles.view}>
                            //左
                            <View style={styles.viewText}>
                                <View style={styles.viewText}>
                                    <Image source={Images.bg} style={styles.image}/>
                                    <Text>立即登录</Text>
                                </View>
                                <Text>已有帐号，可立即登录使用</Text>
                            </View>
                            //又
                            <Image source={Images.bg} style={styles.image}/>
                        </View>
                        //线
                        <View style = {styles.line}/>
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
        alignItems: 'center'
    },
    center: {
        backgroundColor: 'white'
    },
    view: {
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    image: {
        height: 50,
        width: 50,
        backgroundColor: 'white'
    },
    viewText: {
        backgroundColor: 'white'
    },
    line: {
        backgroundColor: 'black',
        height:2
    }
})