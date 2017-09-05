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
import LoginView from './views/LoginView'


const Index = StackNavigator({
    Splash:{screen:SplashView},
    SelectEnter:{screen:SelectEnterView},
    Login:{screen:LoginView},
})

export default Index
