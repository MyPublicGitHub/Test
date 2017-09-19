import React from 'react'
import { StyleSheet, ScrollView, View, Image, Text, ImageBackground, TouchableOpacity, FlatList, Picker } from 'react-native'
import Images from '../images/ImageList'


var Dimensions = require('Dimensions');//获取屏幕的宽高 
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;

class ProjectView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            onTouchTitle: false,
            headerTitleText: '暂无可选择项目',
            Datas: [],
            firstValue: FirstData[0],
        };
    }

    static navigationOptions = {
        // headerTitle:
        // <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center', }}>

        //     <TouchableOpacity style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center', marginLeft: 40, }}>
        //         <Text style={{ alignSelf: 'center', fontSize: 16, color: 'black', }}>暂无可选择项目</Text>
        //     <Image source={Images.change} style={{ width: 20, height: 20, padding: 10, }} resizeMode={'center'} />
        //     </TouchableOpacity>

        // <TouchableOpacity style={{ padding: 10, width: 40, }}>
        //     <Image source={Images.add} style={{ width: 18, height: 15, }} resizeMode={'center'} />
        // </TouchableOpacity>

        // </View>,
        // headerLeft: null,
        // headerStyle: {
        //     height: 40,
        // },
        header: null
    }

    updateFirstValue(value) {

        this.setState({
            firstValue: value,

        })
        if (value == '更多') {
            alert('跳转到更多')
        }
    }

    render() {
        return (
            <View style={Styles.background}>
                < View style={{ height: 40 }}>
                    <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center', marginLeft: 40, }}>

                        {/* <TouchableOpacity onPress={this._onPressTitle()} style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center', marginLeft: 40, }}>
                            <Text style={{ alignSelf: 'center', fontSize: 16, color: 'black', }}>{this.state.headerTitleText}</Text>
                            <Image source={Images.change} style={{ width: 20, height: 20, padding: 10, }} resizeMode={'center'} />
                        </TouchableOpacity> */}
                        <Picker
                            mode={'dropdown'}
                            style={{ flex: 1 }}
                            selectedValue={this.state.firstValue}
                            onValueChange={(value) => this.updateFirstValue(value)}>
                            {FirstData.map((key, i) => this.renderPicker(key, i))}
                            <Picker.Item label={'更多'} value={'更多'} />
                        </Picker>

                        <TouchableOpacity style={{ padding: 10, width: 40, justifyContent: 'flex-end' }}>
                            <Image source={Images.add} style={{ width: 18, height: 15, }} resizeMode={'center'} />
                        </TouchableOpacity>

                    </View>
                </View >
                <ScrollView>
                    <Image style={Styles.imageBanner} source={Images.pjBanner} resizeMode={'contain'} />
                    <View style={Styles.viewTop}>

                        <View style={Styles.viewTopItem}>
                            <Text style={Styles.textItemNumber}>1</Text>
                            <Text style={Styles.textItem}>我的审批</Text>
                        </View>
                        <View style={Styles.viewTopItem}>
                            <Text style={Styles.textItemNumber}>2</Text>
                            <Text style={Styles.textItem}>我的任务</Text>
                        </View>

                        <View style={Styles.viewTopItem}>
                            <Text style={Styles.textItemNumber}>3</Text>
                            <Text style={Styles.textItem}>我的日志</Text>
                        </View>

                    </View>

                    <View style={Styles.view} />

                    <FlatList
                        data={this.state.Datas}
                        style={Styles.flastList}
                        numColumns={4}
                        renderItem={this._renderFlatListItem}
                    />
                </ScrollView>
            </View>
        )
    }
    renderPicker(key, i) {

        console.log(key, i)
        return <Picker.Item label={key} value={key} />
    }
    _renderFlatListItem = ({ item }) =>
        <TouchableOpacity onPress={item.onPress}>
            <View style={Styles.viewRow}>
                <Image source={item.img} style={Styles.imageItem} />
                <Text style={Styles.textItem}>{item.name}</Text>
            </View>
        </TouchableOpacity>


    componentDidMount() {
        this._getModuleDefault()
        for (var index = 0; index < 5; index++) {
            var row = (
                <Text key={index}>123</Text>
            )
            rows.push(row)
        }
    }

    _getModuleDefault() {
        var data = []
        //OA模块数据是固定的
        var data0 = { name: '外勤签到', img: Images.oaWQQD, onPress: () => alert('外勤签到') }
        var data1 = { name: '考勤打卡', img: Images.oaKQDK }
        var data2 = { name: '审批', img: Images.oaSP }
        var data3 = { name: '日志', img: Images.oaRZ }
        var data4 = { name: '任务', img: Images.oaRW }
        var data5 = { name: '公告', img: Images.oaGG }
        var data6 = { name: '证书', img: Images.oaZS }
        var data7 = { name: '印章', img: Images.oaYZ }
        var data8 = { name: '资产', img: Images.oaZC }
        //把数据添加到办公子模块
        data.push(data0)
        data.push(data1)
        data.push(data2)
        data.push(data3)
        data.push(data4)
        data.push(data5)
        data.push(data6)
        data.push(data7)
        data.push(data0)
        data.push(data1)
        data.push(data2)
        data.push(data3)
        data.push(data4)
        data.push(data5)
        data.push(data6)
        data.push(data7)
        data.push(data0)
        data.push(data1)
        data.push(data2)
        data.push(data3)
        data.push(data4)
        data.push(data5)
        data.push(data6)
        data.push(data7)

        this.setState({
            Datas: data
        })

    }
    _initItem() {

    }
}
var FirstData = [
    '111',
    '222',
    '333',
    '444',
    '555',
]
var rows = [];
export default ProjectView

const Styles = StyleSheet.create({

    background: {
        flex: 1,
        backgroundColor: 'white'
    },

    imageBanner: {
        width: ScreenWidth,
        //height: ScreenHeight / 3,
        height: (ScreenWidth * 246) / 750,
        backgroundColor: 'cyan'
    },

    view: {
        backgroundColor: '#999999',
        height: 10,
    },

    viewTop: {
        paddingTop:10,
        flexDirection: 'row',
        paddingBottom:10,
    },

    viewTopItem: {
        width: ScreenWidth / 3,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },

    textItemNumber: {
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#999999',
        paddingLeft: 12,
        paddingTop: 6,
        paddingRight: 12,
        paddingBottom: 6,
        borderRadius: 8,
        alignSelf: 'center',
    },

    textItem: {
        fontSize: 12,
    },

    flatList: {
        flex: 1,
        marginTop:10,
    },

    viewRow: {
        justifyContent: 'center',
        alignItems: 'center',
        width: ScreenWidth / 4,
        padding: 10,
    }, 

    imageItem: {
        height: 40,
        width: 40,
    },

    textItem: {
        textAlignVertical: 'center',
        color: '#5C5C5C',
        fontSize: 12,
    },
})