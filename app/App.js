import Routes from './navigator/Routes'
import {Provider} from 'react-redux'
import Store from './redux/store/Store'
import React, {Component} from 'react';

const store = Store();

class App extends React.Component{
    render() {
		return (
			<Provider store={store}>
				<Routes />
			</Provider >
		)
	}
}

export default App