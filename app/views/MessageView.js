import React from 'react'
import {StyleSheet, View, Image, Text, ImageBackground,TouchableOpacity} from 'react-native'
import Images from '../images/ImageList'

 class MessageView extends React.Component{
  static navigationOptions = {
    headerTitle:<Text style = {{alignSelf:'center',fontSize:16,color:'black',}}>消息</Text>,
    headerLeft:null,
    headerStyle:{
        height:40,
    }
}
    render() {
        return <Text>MessageView</Text>;
      }
}

export default MessageView