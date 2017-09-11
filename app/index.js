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

import MainScreenNavigator from './navigator/MainScreenNavigator'

import TestView from './test/test'

const Index = StackNavigator({
    Splash:{screen:SplashView},
    SelectEnter:{screen:SelectEnterView},
    Login:{screen:LoginView},
    Main:{screen:MainScreenNavigator},
    Test:{screen:TestView},
})


export default Index
