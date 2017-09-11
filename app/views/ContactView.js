import React from 'react'
import {StyleSheet, View, Image, Text, ImageBackground,TouchableOpacity} from 'react-native'
import Images from '../images/ImageList'

export default class ContactView extends React.Component{
    static navigationOptions = {
        headerTitle:<Text style = {{alignSelf:'center',fontSize:16,color:'black',}}>联系人</Text>,
        headerLeft:null,
        headerStyle:{
            height:40,
        }
    }
    render() {
        return <Text>ContactView</Text>;
      }
}