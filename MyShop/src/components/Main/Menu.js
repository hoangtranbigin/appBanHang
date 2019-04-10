import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import profileIcon from '../../media/temp/profile.png'

export default class Menu extends Component<Props> {
	constructor(props) {
	    super(props);
	    this.state = {
	      	isLogIn: false,
	    }
	}
	render() {
		const logoutJSX = (
			<View>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('Authentication')} style={{ backgroundColor:'#fff', paddingHorizontal: 60, height: 40, borderRadius: 5, justifyContent: 'center', alignItems:'center' }}>
					<Text style={{ color:'#34B089', fontSize:15,fontFamily:'Avenir' }}>Sign in</Text>
				</TouchableOpacity>
			</View>
		)
		const loginJSX =(
			<View>
				<Text style={{ color:'#fff', fontSize:18, alignSelf: 'center', marginTop:-18, marginBottom:15, fontFamily:'Avenir' }}>Hoang Tran</Text>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('OrderHistory')} style={{ backgroundColor:'#fff', width: 173, height: 40, borderRadius: 5, justifyContent: 'center', alignItems:'center', marginBottom:10 }}>
					<Text style={{ color:'#34B089', fontSize:15,fontFamily:'Avenir' }}>Order history</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('ChangeInfo')} style={{ backgroundColor:'#fff', width: 173, height: 40, borderRadius: 5, justifyContent: 'center', alignItems:'center', marginBottom:10  }}>
					<Text style={{ color:'#34B089', fontSize:15,fontFamily:'Avenir' }}>Change info</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{ backgroundColor:'#fff', width: 173, height: 40, borderRadius: 5, justifyContent: 'center', alignItems:'center' }}>
					<Text style={{ color:'#34B089', fontSize:15,fontFamily:'Avenir' }}>Sign out</Text>
				</TouchableOpacity>
			</View>
		)
		const mainJSX = this.state.isLogIn ? loginJSX : logoutJSX;
		return (
			<View style={{ flex:1, backgroundColor: '#34B089', borderRightWidth: 2, borderColor: '#fff', alignItems: 'center' }}>
				<Image source={profileIcon} style={{ width: 125, height: 125, borderRadius: 62, marginTop:40, marginBottom: 20 }} />
				{ mainJSX }
			</View>
		);
	}
}