import React, {Component} from 'react'

import {
    AppRegistry,
    StyleSheet,
    View,
    TextInput,
    AsyncStorage,
    Text
} from 'react-native';
import Toast,{DURATION} from 'react-native-easy-toast';  //引入Toast控件
//AsyncStorage是以键值对的形式保存数据 ，诸如安卓中SharedPreferences一样
const AS_KEY = "as_key";
export default class AsyncStoreDemo extends Component {
    constructor(props) {
        super(props);
    }

    //保存数据
    asSave() {
        AsyncStorage.setItem(AS_KEY, this.text)
    }

    //查询保存的数据
    asQuery() {
        AsyncStorage.getItem(AS_KEY, (error, result) => {
            if (!error) {
                if (result !== '' && result !== null) {
                    this.toast.show('查询到的内容是：' + result, DURATION.LENGTH_SHORT);
                } else {
                    this.toast.show('未找到指定保存的内容！', DURATION.LENGTH_SHORT);
                }
            } else {
                this.toast.show('查询数据失败', DURATION.LENGTH_SHORT);
            }
        })
    }

    //删除已经保存的数据
    asDelete() {
        AsyncStorage.removeItem(AS_KEY, (error) => {
            if (!error) {
                this.toast.show('删除数据成功', DURATION.LENGTH_SHORT);
            } else {
                this.toast.show('删除数据失败', DURATION.LENGTH_SHORT);
            }
        })
    }

    render() {
        return (<View style={styles.container}>
            <TextInput style={styles.edit}
                //文字内容发生改变调用方法
                       onChangeText={text=>this.text=text}/>
            <View style={styles.child}>
                <Text style={styles.text}
                      onPress={()=>{
                          this.asSave()
                      }}>保存</Text>
                <Text style={styles.text}
                      onPress={()=>{
                          this.asQuery()
                      }}>查询</Text>
                <Text style={styles.text} onPress={()=>{
                    this.asDelete()
                }}>删除</Text>
            </View>
            <Toast ref={toast=>{
                this.toast=toast
            }}/>
        </View>);
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:60
    },
    child: {
        flexDirection: 'row'
    },
    edit: {
        fontSize: 20,
        borderWidth: 1,
        borderColor: '#d1d1d1',
        margin: 10,
        paddingLeft: 5,
        height: 45,
        borderRadius:3
    },
    text: {
        fontSize: 20,
        color: '#333',
        marginLeft: 15
    }
});