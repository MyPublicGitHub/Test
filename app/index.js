import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    NavigationTab,
    StatusBar,
}from 'react-native'
import {StackNavigator,TobNavigator} from 'react-navigation'
import SplashView from './views/SplashView'
import SelectEnterView from './views/SelectEnterView'

const Index = StackNavigator({
    Splash:{screen:SplashView},
    SelectEnter:{screen:SelectEnterView},
})

export default Index
