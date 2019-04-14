import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Drawer from 'react-native-drawer';
import Menu from './Menu';
import Shop from './Shop/Shop';
import checkLogin from '../../api/checkLogin';
import getToken from '../../api/getToken';
import global from '../global';

export default class Main extends Component<Props> {
	componentDidMount() {
        getToken()
        .then(token => checkLogin(token))
        .then(res => global.onSignIn(res.user))
        .catch(err => console.log('LOI CHECK LOGIN', err));
    }
   	closeControlPanel = () => {
	    this.drawer.close()
	};
	openControlPanel = () => {
	    this.drawer.open()
	};
  	render() {
	  	const { navigation } = this.props;
	    return (
	    	<Drawer
		        ref={(ref) => this.drawer = ref}
		        content={<Menu navigation={navigation} />}
		        tapToClose
	  			openDrawerOffset={0.5}
		    >
		        <Shop open={this.openControlPanel.bind(this)} navigation={navigation} />
		    </Drawer>
	    );
  	}
}
