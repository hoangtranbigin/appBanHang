import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Dimensions, ImageBackground, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import litteIcon from '../../../../media/temp/little.jpg';
import maxiIcon from '../../../../media/temp/maxi.jpg';
import partyIcon from '../../../../media/temp/party.jpg';

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');
const imageWidth = width-30;
const imageHeight = imageWidth / 900 * 520;
const url = 'http://localhost:8080/api/images/type/'

export default class Category extends Component<Props> {
	constructor(props) {
	    super(props);
	    this.state = {
	    	
	    }
	}
	render() {
		// const { types } = this.props.types;	
		return (
			<View style={{ height: height * 0.3, backgroundColor: '#fff', margin: 10, shadowColor: '#2E272B', shadowOffset: {width:0, height:3}, shadowOpacity: 0.2 }}>
				<View style={{flex:1,justifyContent: 'center', paddingLeft:10 }}>
					<Text style={{fontSize: 20, color:'#AFAFAF'}}>LIST OF CATEGORY</Text>
				</View>
				<View style={{flex:5}}>
					<Swiper>
						{ this.props.types.map(e => (
							<TouchableOpacity onPress={() => this.props.navigation.navigate('ListProduct')} key={e.id}>
								<ImageBackground source={{ uri: `${url}${e.image}` }} style={{ height:imageHeight, width:imageWidth, marginLeft:5, marginRight:5, justifyContent:'center', alignItems: 'center' }} >
									<Text style={{ fontSize:21, fontFamily:'Avenir', color:'#9A9A9A' }}>{e.name}</Text>
								</ImageBackground>
							</TouchableOpacity>
						)) }
					</Swiper>
				</View>
			</View>
		);
	}
}

						
						{/* <TouchableOpacity onPress={() => this.props.navigation.navigate('ListProduct')}> */}
						{/* 	<ImageBackground source={maxiIcon} style={{ height:imageHeight, width:imageWidth, marginLeft:5, marginRight:5,justifyContent:'center', alignItems: 'center' }} > */}
						{/* 		<Text style={{ fontSize:21, fontFamily:'Avenir', color:'#9A9A9A' }}>Maxi dress</Text> */}
						{/* 	</ImageBackground> */}
						{/* </TouchableOpacity> */}
						{/* <TouchableOpacity onPress={() => this.props.navigation.navigate('ListProduct')}> */}
						{/* 	<ImageBackground source={partyIcon} style={{ height:imageHeight, width:imageWidth, marginLeft:5, marginRight:5,justifyContent:'center', alignItems: 'center' }} > */}
						{/* 		<Text style={{ fontSize:21, fontFamily:'Avenir', color:'#9A9A9A' }}>Maxi dress</Text> */}
						{/* 	</ImageBackground> */}
						{/* </TouchableOpacity> */}