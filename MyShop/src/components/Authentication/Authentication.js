import React, {Component} from 'react';
import { Text, View, Button, TouchableOpacity, Image, ImageBackground, StyleSheet, TextInput } from 'react-native';
import icLogo from '../../media/appIcon/ic_logo.png';
import icBack from '../../media/appIcon/back_white.png'
import bg from '../../media/temp/bg.jpeg'

export default class Authentication extends Component<Props> {
	constructor(props) {
	    super(props);
	    this.state = {
	      	isSignin: true,
	    }
	}
	signIn(){
		this.setState({ isSignin:true })
	}
	signUp(){
		this.setState({ isSignin:false })
	}
	render() {
		const signinJSX = (
			<View style={{paddingLeft: 40, paddingRight: 40}}>
				<TextInput style={{ height: 45, backgroundColor:'#fff', borderRadius: 20, marginBottom: 10, paddingLeft: 30, fontSize:15 }} placeholder='Enter your email' />
				<TextInput style={{ height: 45, backgroundColor:'#fff', borderRadius: 20, marginBottom: 10, paddingLeft: 30, fontSize:15 }} placeholder='Enter your password' />
				<TouchableOpacity style={{ height:45, borderRadius:20, borderWidth:1, borderColor:'#fff', alignItems:'center',justifyContent:'center' }}>
					<Text style={{fontSize:15, fontFamily:'Avenir', fontWeight: '400', color:'#fff' }}>SIGN IN</Text>
				</TouchableOpacity>
			</View>
		)
		const signupJSX = (
			<View style={{paddingLeft: 40, paddingRight: 40}}>
				<TextInput style={{ height: 45, backgroundColor:'#fff', borderRadius: 20, marginBottom: 10, paddingLeft: 30, fontSize:15 }} placeholder='Enter your name' />
				<TextInput style={{ height: 45, backgroundColor:'#fff', borderRadius: 20, marginBottom: 10, paddingLeft: 30, fontSize:15 }} placeholder='Enter your email' />
				<TextInput style={{ height: 45, backgroundColor:'#fff', borderRadius: 20, marginBottom: 10, paddingLeft: 30, fontSize:15 }} placeholder='Enter your password' />
				<TextInput style={{ height: 45, backgroundColor:'#fff', borderRadius: 20, marginBottom: 10, paddingLeft: 30, fontSize:15 }} placeholder='Re-Enter your password' />
				<TouchableOpacity style={{ height:45, borderRadius:20, borderWidth:1, borderColor:'#fff', alignItems:'center',justifyContent:'center' }}>
					<Text style={{fontSize:15, fontFamily:'Avenir', fontWeight: '400', color:'#fff' }}>SIGN UP</Text>
				</TouchableOpacity>
			</View>
		)
		const mainJSX = this.state.isSignin ? signinJSX : signupJSX;
		return (
			<ImageBackground source={bg} style={{width: '100%', height: '100%' }}>
				<View style={{ position: 'absolute', top: 0, left:0, height: '100%', width: '100%', backgroundColor: 'rgba(36,36,36,0.8)', justifyContent: 'space-between' }}>
					<View style={{flexDirection: 'row', paddingTop: 50, justifyContent: 'space-around'  }}>
						<TouchableOpacity onPress={() => this.props.navigation.navigate('Main')}>
							<Image source={icBack} style={{width: 25, height: 25}} />
						</TouchableOpacity>
						<Text style={{ color:'#fff', fontFamily: 'Avenir', fontSize: 20 }}>Wearing a Dress</Text>
						<Image source={icLogo} style={{width: 25, height: 25}} />
					</View>
					
					{mainJSX}

					<View style={{ flexDirection:'row', width: 300, alignSelf: 'center', marginBottom:30 }}>
						<TouchableOpacity onPress={() => this.signIn()} style={{ backgroundColor:'#fff', flex: 1, borderBottomLeftRadius: 20, borderTopLeftRadius: 20, alignItems:'center', paddingVertical: 15, marginRight:1 }}>
							<Text style={ this.state.isSignin ? styles.active : styles.inactive }>SIGN IN</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => this.signUp()} style={{ backgroundColor:'#fff', flex: 1, borderBottomRightRadius: 20, borderTopRightRadius: 20, alignItems:'center', paddingVertical: 15, marginLeft:1 }}>
							<Text style={ !this.state.isSignin ? styles.active : styles.inactive  }>SIGN UP</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ImageBackground>
			
		);
	}
}

const styles = StyleSheet.create({
    inactive:{
    	color: '#D7D7D7', fontSize:15, fontFamily:'Avenir'
    },
    active:{
    	color: '#3EBA77', fontSize:15, fontFamily:'Avenir'
    }
});