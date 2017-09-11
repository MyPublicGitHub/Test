"use strict";
import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { TabNavigator } from 'react-navigation'

import Images from '../images/ImageList'

import MessageView from '../views/MessageView'
import WorksView from '../views/WorksView'
import ProjectView from '../views/ProjectView'
import ContactView from '../views/ContactView'
import MyView from '../views/MyView'

const resizeMode = 'center'; //resizeMode enum('cover', 'contain', 'stretch', 'repeat', 'center')

const MainScreenNavigator = TabNavigator({
    Message: {
        screen: MessageView,
        navigationOptions: {
            tabBarLabel: '消息',
            tabBarIcon: ({ tintColor, focused }) => (<Image
                style={styles.icon}
                source={focused ? Images.messageLight : Images.message}
                resizeMode={resizeMode} />)
        }
    },
    Works: {
        screen: WorksView,
        navigationOptions: {
            tabBarLabel: '工作台',
            tabBarIcon: ({ tintColor, focused }) => (<Image
                style={styles.icon}
                source={focused ? Images.workstLight : Images.works}
                resizeMode={resizeMode}
            />)
        }
    },
    Project: {
        screen: ProjectView,
        navigationOptions: {
            tabBarLabel: '项目',
            tabBarIcon: ({ tintColor, focused }) => (<Image
                style={styles.icon}
                source={focused ? Images.projectLight : Images.project}
                resizeMode={resizeMode}
            />)
        }
    },
    Contact: {
        screen: ContactView,
        navigationOptions: {
            tabBarLabel: '联系人',
            tabBarIcon: ({ tintColor, focused }) => (<Image
                style={styles.icon}
                source={focused ? Images.contactLight : Images.contact}
                resizeMode={resizeMode}
            />)
        }
    },
    My: {
        screen: MyView,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({ tintColor, focused }) => (<Image
                style={styles.icon}
                source={focused ? Images.myLight : Images.my}
                resizeMode={resizeMode}
            />)
        }
    },
}, {
        tabBarPosition: 'bottom',//设置tab在下方
        animationEnabled: true,
        lazy: true,
        backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
        cardStack: {
            gesturesEnabled: true
        },
        tabBarOptions: {
            activeTintColor: '#34b0ff', // 文字和图片选中颜色
            inactiveTintColor: '#999', // 文字和图片未选中颜色
            showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
            showLabel: true,
            pressColor: '#6c6dff',
            pressOpcity: '0.5',
            //iconStyle: { width: 20, height: 20, },//设置后图片显示不完整    
            style: {
                backgroundColor: '#fff', // TabBar 背景色
                height: 54
            },
            indicatorStyle: {
                height: 0, // 如TabBar下面显示有一条线，可以设高度为0后隐藏
            },
            labelStyle: {
                fontSize: 10, // 文字大小
                // color: '#000',如果指出设置颜色，会覆盖activeTintColor、inactiveTintColor设置
            }
        }
    })

const styles = StyleSheet.create({
    icon: {
        height: 24,
        width: 24,
        margin:0,
    },
})
export default MainScreenNavigator