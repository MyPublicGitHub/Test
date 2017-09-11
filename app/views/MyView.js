import React from 'react'
import { StyleSheet, ScrollView, View, Image, Text, ImageBackground, TouchableOpacity } from 'react-native'
import Images from '../images/ImageList'
import GV from '../utils/GlobalVariable'

export default class MyView extends React.Component {
    static navigationOptions = {
        headerTitle: <Text style={{ alignSelf: 'center', fontSize:16,color:'black',}}>我</Text>,
        headerLeft: null,
        headerStyle: {
            height: 40,
        }
    }

    render() {
        return (
            <ScrollView style={styles.background}>
                <View style={styles.container}>
                    <View style={[styles.itemStyle, { marginTop: 20 }]}>
                        <Image style={styles.imageHeader}
                            source={GV.USER_PORTRAIT ? { uri: GV.USER_PORTRAIT } : Images.defaultHead}
                            onLoaded={() => console.log('Image was loaded!')}
                            onError={() => console.log('myView图片加载出错')}
                            resizeMode={'cover'} />
                        <View>
                            <View style={styles.userInfoTop}>
                                <Text style={styles.usernameText}>{GV.USER_NAME}</Text>
                                <Text style={styles.userPostText}>软件工程师</Text>
                            </View>
                            <Text style={styles.userCompanyText}>湖南筑库网信息技术有限公司</Text>
                        </View>
                    </View>

                    <View style={[styles.itemStyle, { marginTop: 20 }]}>
                        <Image style={styles.imageItem}
                            source={Images.myWoDeQiYe}
                            resizeMode={'center'} />
                        <Text style={styles.textItemTitle}>我的企业</Text>
                        <Text style={styles.textItemContent}>切换加入的企业</Text>
                        <Image style={styles.imageRight}
                            source={Images.getInto}
                            resizeMode={'center'} />
                    </View>

                    <View style={[styles.itemStyle]}>
                        <Image style={styles.imageItem}
                            source={Images.myXinShou}
                            resizeMode={'center'} />
                        <Text style={styles.textItemTitle}>新手帮助</Text>
                        <Image style={styles.imageRight}
                            source={Images.getInto}
                            resizeMode={'center'} />
                    </View>

                    <View style={[styles.itemStyle]}>
                        <Image style={styles.imageItem}
                            source={Images.myYiJian}
                            resizeMode={'center'} />
                        <Text style={styles.textItemTitle}>意见反馈</Text>
                        <Image style={styles.imageRight}
                            source={Images.getInto}
                            resizeMode={'center'} />
                    </View>

                    <View style={[styles.itemStyle]}>
                        <Image style={styles.imageItem}
                            source={Images.myTuijian}
                            resizeMode={'center'} />
                        <Text style={styles.textItemTitle}>推荐筑库</Text>
                        <Text style={styles.textItemContent}>分享给好友一起体验</Text>
                        <Image style={styles.imageRight}
                            source={Images.getInto}
                            resizeMode={'center'} />
                    </View>

                    <View style={[styles.itemStyle]}>
                        <Image style={styles.imageItem}
                            source={Images.myKeFu}
                            resizeMode={'center'} />
                        <Text style={styles.textItemTitle}>在线客服</Text>
                        <Text style={styles.textItemContent}>24小时人工客服</Text>
                        <Image style={styles.imageRight}
                            source={Images.getInto}
                            resizeMode={'center'} />
                    </View>

                    <View style={[styles.itemStyle]}>
                        <Image style={styles.imageItem}
                            source={Images.mySheZhi}
                            resizeMode={'center'} />
                        <Text style={styles.textItemTitle}>设置</Text>
                        <Image style={styles.imageRight}
                            source={Images.getInto}
                            resizeMode={'center'} />
                    </View>
                    <View style={styles.viewCall}>
                        <Text style={styles.textCallLeft}>全国服务热线：</Text>
                        <Text style={styles.textCallRight}>400-777-3177</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    
    background: {
        flex: 1,
        //backgroundColor: '#dddddd',
    },

    container: {
        flex: 1,
    },

    itemStyle: {
        backgroundColor: 'white',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:1,
    },

    imageHeader: {
        height: 50,
        width: 50,
        marginRight: 10,
    },

    userInfoTop: {
        flexDirection: 'row',

    },

    usernameText: {
        fontSize: 16,
        color: 'black',
    },

    userPostText: {
        fontSize: 14,
        alignSelf: 'flex-end',
        marginLeft: 10,
    },

    userCompanyText: {
        marginTop: 5,
        fontSize: 14,
    },

    imageItem: {
        height: 20,
        width: 20,
        marginRight: 10,
    },

    textItemTitle: {
        fontSize: 16,
        color: 'black',
        flex: 1,
    },

    textItemContent: {
        fontSize: 14,
    },

    imageRight: {
        height: 10,
        width: 10,
        marginLeft: 5,
    },

    viewCall:{
        marginTop:15,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },

    textCallLeft:{
        fontSize:14,

    },

    textCallRight:{
        fontSize:14,
        color:'blue'
    },
})