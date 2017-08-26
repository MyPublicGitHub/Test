import React from 'react'
import {StyleSheet, View, Image} from 'react-native'
import Images from '../images/ImageList'

export default class SplashView extends React.Component {
    constructor(props) {
        super(props);
    }
    // 设置header为空
    static navigationOptions = {
        header: null
    };
    _paramsToLastPage() {
        const {navigate, goBack, state} = this.props.navigation;
        // 在第二个页面,在goBack之前,将上个页面的方法取到,并回传参数,这样回传的参数会重走render方法
        // state.params.callback('从SplashView界面回传的数据');
        goBack(null);
    }
    componentDidMount() {
        this.timer = setTimeout(() => {
            this.props.navigation.navigate('SelectEnter',
                {
                    callback: (data) => {
                        alert('splashView callback: ' + data)
                        this._paramsToLastPage();
                    }
                }
            );
        }, 1000);
    };

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    };

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={Images.splash}/>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    image: {
        width: 400,
        height: 100,
        marginBottom: 40
    }
})