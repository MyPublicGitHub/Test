import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    AsyncStorage
} from 'react-native';

//用户信息填写组件
export default class AsyncStoreDemo extends Component {
    //构造函数
    constructor(props) {
        super(props);
        this.state = {name: '', phone: ''};
    }

    //页面的组件渲染完毕（render）之后执行
    componentDidMount(){
        var _that = this;

        //需要查询的键值
        var keys = ["name","phone"];
        //根据键数组查询保存的键值对
        AsyncStorage.multiGet(keys, function(errs, result){
            //如果发生错误，这里直接返回（return）防止进入下面的逻辑
            if(errs){
                return;
            }

            //得到的结果是二维数组（result[i][0]表示我们存储的键，result[i][1]表示我们存储的值）
            _that.setState({
                name: (result[0][1]!=null)?result[0][1]:'',
                phone: (result[1][1]!=null)?result[1][1]:''
            });
        });
    }

    //组件渲染
    render() {
        return (
            <View style={styles.flex}>
                <View style={styles.row}>
                    <View style={styles.head}>
                        <Text style={styles.label}>姓名</Text>
                    </View>
                    <View style={styles.flex}>
                        <TextInput style={styles.input}
                                   value={this.state.name}
                                   onChangeText={(name) => this.setState({name})}/>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.head}>
                        <Text style={styles.label}>电话</Text>
                    </View>
                    <View style={styles.flex}>
                        <TextInput style={styles.input}
                                   value={this.state.phone}
                                   onChangeText={(phone) => this.setState({phone})}/>
                    </View>
                </View>
                <View style={styles.row}>
                    <Text style={styles.btn} onPress={this.save.bind(this)}>保存</Text>
                    <Text style={styles.btn} onPress={this.clear.bind(this)}>清除</Text>
                </View>
            </View>
        );
    }

    //保存数据
    save() {
        //设置多项
        var keyValuePairs = [['name', this.state.name], ['phone', this.state.phone]]
        AsyncStorage.multiSet(keyValuePairs, function(errs){
            if(errs){
                //TODO：存储出错
                return;
            }
            alert('数据保存成功!');
        });
    }

    //清除数据
    clear() {
        var _that = this;
        AsyncStorage.clear(function(err){
            if(!err){
                _that.setState({
                    name: "",
                    phone: ""
                });
                alert('存储的数据已清除完毕!');
            }
        });
    }
}

//默认应用的容器组件
class App extends Component {
    render() {
        return (
            <View style={[styles.flex, styles.topStatus]}>
                <UserInfo></UserInfo>
            </View>
        );
    }
}

//样式定义
const styles = StyleSheet.create({
    flex:{
        marginTop:0,
        flex: 1,
    },
    topStatus:{
        marginTop:25,
    },
    row:{
        marginTop:70,
        flexDirection:'row',
        height:45,
        marginBottom:10
    },
    head:{
        width:70,
        marginLeft:5,
        backgroundColor:'#23BEFF',
        height:45,
        justifyContent:'center',
        alignItems: 'center'
    },
    label:{
        color:'#fff',
        fontSize:15,
        fontWeight:'bold'
    },
    input:{
        height:45,
        borderWidth:1,
        marginRight: 5,
        paddingLeft: 10,
        borderColor: '#ccc'
    },
    btn:{
        flex:1,
        backgroundColor:'#FF7200',
        height:45,
        textAlign:'center',
        color:'#fff',
        marginLeft:5,
        marginRight:5,
        lineHeight:45,
        fontSize:15,
    },
});