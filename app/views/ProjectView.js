import React from 'react'
import {StyleSheet, View, Image, Text, ImageBackground,TouchableOpacity} from 'react-native'
import Images from '../images/ImageList'

export default class ProjectView extends React.Component{
    static navigationOptions = {
        headerTitle:<Text style = {{alignSelf:'center',fontSize:16,color:'black',}}>项目</Text>,
        headerLeft:null,
        headerStyle:{
            height:40,
        }
    }
    render() {
        return <Text>ProjectView</Text>;
      }
}