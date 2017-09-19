/**? Sample React Native App?
* https://github.com/facebook/react-native?
* @flow? */


"use strict"

import React, { Component } from 'react'
import {
    AppRegistry,
    View,
    Text,
    Picker,
    StyleSheet
} from 'react-native'

var FirstData = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6'
]
var SecondData = [
    '11',
    '22',
    '33',
    '44',
    '55',
    '66'
]
var ThirdData = [
    '111',
    '222',
    '333',
    '444',
    '555',
    '666'
]

// 读取本地json文件(城市选择器,后续更新)
//let jsonData = require('./area.json')

export default class Test extends Component {

    constructor(props) {
        super(props)

        this.state = {

            firstValue: FirstData[0],
            secondValue: SecondData[0],
            thirdValue: ThirdData[0],

        }
    }


    updateFirstValue(language) {

        this.setState({
            firstValue: language,

        })
    }
    updateSecondValue(language) {

        this.setState({
            secondValue: language,

        })
    }
    updateThirdValue(language) {

        this.setState({
            thirdValue: language,

        })
    }


    renderPicker(key, i) {

        console.log(key, i)

        return <Picker.Item key={i} label={key} value={key} />
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.state.firstValue + this.state.secondValue + this.state.thirdValue}</Text>
                <View style={styles.pickerViewContainer}>
                    <Picker style={styles.pickerStyle}
                        selectedValue={this.state.firstValue}
                        onValueChange={(language) => this.updateFirstValue(language)}>
                        {FirstData.map((key, i) => this.renderPicker(key, i))}
                    </Picker>
                    <Picker style={styles.pickerStyle}
                        selectedValue={this.state.secondValue}
                        onValueChange={(language) => this.updateSecondValue(language)}>
                        {SecondData.map((key, i) => this.renderPicker(key, i))}
                    </Picker>
                    <Picker style={styles.pickerStyle}
                        selectedValue={this.state.thirdValue}
                        onValueChange={(language) => this.updateThirdValue(language)}>
                        {ThirdData.map((key, i) => this.renderPicker(key, i))}
                    </Picker>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#F5FCFF'
    },
    text: {
        width: 200,
        height: 60,
        marginTop: 100,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    pickerViewContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 30

    },
    pickerStyle: {
        flex: 1,
    }
})