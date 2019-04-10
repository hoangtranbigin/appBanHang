import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Drawer from 'react-native-drawer';
import Menu from './Menu';
import Shop from './Shop/Shop';

export default class Main extends Component<Props> {
   	closeControlPanel = () => {
	    this.drawer.close()
	};
	openControlPanel = () => {
	    this.drawer.open()
	};
	// clickLogIn () {
	//   	// alert('123')
	//   	this.props.navigation.navigate('Authentication', {thamso:'hello'})
	// }
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
