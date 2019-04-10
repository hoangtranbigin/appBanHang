import React, {Component} from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Button, Dimensions, Image, StatusBar, TextInput } from 'react-native';
import icLogo from '../../../media/appIcon/ic_logo.png';
import icMenu from '../../../media/appIcon/ic_menu.png'

const { height } = Dimensions.get('window');

export default class Header extends Component<Props> {
	render() {
		return (
			<View style={{ height: height/8, backgroundColor: '#34B089', padding: 10, justifyContent: 'space-around' }}>
				<View style={{flexDirection: 'row', justifyContent: 'space-between', paddingTop: 30 }}>
					<TouchableOpacity onPress={this.props.onOpen}>
						<Image source={icMenu} style={{width: 25, height: 25}} />
					</TouchableOpacity>
					<Text style={{ color:'#fff', fontFamily: 'Avenir', fontSize: 20 }}>Wearing a Dress</Text>
					<Image source={icLogo} style={{width: 25, height: 25}} />
				</View>
				<TextInput style={{ height:height/29, backgroundColor:'#fff', marginTop: 10, paddingLeft: 10 }} placeholder="What do you to buy?" />
			</View>
		);
	}
}