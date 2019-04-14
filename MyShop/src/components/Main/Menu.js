import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import profileIcon from '../../media/temp/profile.png';
import global from '../global';
import saveToken from '../../api/saveToken';

export default class Menu extends Component<Props> {
	constructor(props) {
	    super(props);
	    this.state = {
	      	user: null,
	    }
	    global.onSignIn = this.onSignIn.bind(this)
	}
	onSignIn(user){
		this.setState({ user: user })
	}
	onSignOut() {
        this.setState({ user: null });
        saveToken('');
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
				<Text style={{ color:'#fff', fontSize:16, alignSelf: 'center', marginTop:-16, marginBottom:15, fontFamily:'Avenir' }}>{this.state.user ? this.state.user.name : ''}</Text>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('OrderHistory')} style={{ backgroundColor:'#fff', width: 173, height: 40, borderRadius: 5, justifyContent: 'center', alignItems:'center', marginBottom:10 }}>
					<Text style={{ color:'#34B089', fontSize:15,fontFamily:'Avenir' }}>Order history</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('ChangeInfo',{user:this.state.user})} style={{ backgroundColor:'#fff', width: 173, height: 40, borderRadius: 5, justifyContent: 'center', alignItems:'center', marginBottom:10  }}>
					<Text style={{ color:'#34B089', fontSize:15,fontFamily:'Avenir' }}>Change info</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={this.onSignOut.bind(this)} style={{ backgroundColor:'#fff', width: 173, height: 40, borderRadius: 5, justifyContent: 'center', alignItems:'center' }}>
					<Text style={{ color:'#34B089', fontSize:15,fontFamily:'Avenir' }}>Sign out</Text>
				</TouchableOpacity>
			</View>
		)
		const mainJSX = this.state.user ? loginJSX : logoutJSX;
		return (
			<View style={{ flex:1, backgroundColor: '#34B089', borderRightWidth: 2, borderColor: '#fff', alignItems: 'center' }}>
				<Image source={profileIcon} style={{ width: 125, height: 125, borderRadius: 62, marginTop:40, marginBottom: 20 }} />
				{ mainJSX }
			</View>
		);
	}
}