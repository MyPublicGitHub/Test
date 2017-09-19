"use strict"

import React, { Component } from 'react'
import {
    AppRegistry,
    View,
    Text,
    Picker,
    StyleSheet
} from 'react-native'

// 网络获取的数据，内容必须是简单数据，不可是对象


export default class Test extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pickerValue: '暂无数据',
            data:[]
        }
    }

    //本人项目需要，这句代码可忽略
    static navigationOptions = {
        header: null
    }
    //模拟联网
    componentWillMount(){
        this.setState({
            data : [
                'name1',
                'name2',
                'name3',
                'name4',
                'name5',
            ]
        })
    }
    
    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.text}>{this.state.pickerValue}</Text>

                <Picker style={styles.picker}
                    selectedValue={this.state.pickerValue}
                    mode={'dropdown'}  //'dialog'弹窗 'dropdown'下拉
                    onValueChange={(value) => {
                        this.setState({ pickerValue: value, })
                        if (value == 'name5') {
                           alert('处理数据') 
                        }
                    }}>
                    <Picker.Item label={'请选择'} value={'请选择'} />
                    {this.state.data.map((name) => <Picker.Item label={name} value={name} />)}

                </Picker>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        marginTop: 30,
        backgroundColor: 'red',
        width: 200,
        fontSize: 20,
    },
    picker: {
        marginTop: 30,
        backgroundColor: 'cyan',//给Picker设置背景颜色后，下拉箭头将会消失
        width: 200,
    },
})