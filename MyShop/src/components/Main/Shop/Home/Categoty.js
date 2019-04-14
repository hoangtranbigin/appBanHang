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
	render() {
		if(this.props.types.length == 0){
	        return(
	        	<View><Text>Loading...</Text></View>
	        )
	    } else{
		return (
			<View style={{ paddingBottom: 5, height: height * 0.3, backgroundColor: '#fff', margin: 10, shadowColor: '#2E272B', shadowOffset: {width:0, height:3}, shadowOpacity: 0.2 }}>
				<View style={{flex:1,justifyContent: 'center', paddingLeft:10 }}>
					<Text style={{fontSize: 20, color:'#AFAFAF'}}>LIST OF CATEGORY</Text>
				</View>
				<View style={{height:200}}>
					<Swiper>
						{ this.props.types.map(e => (
							<TouchableOpacity onPress={() => this.props.navigation.navigate('ListProduct',{category:e})} key={e.id}>
								<ImageBackground source={{ uri: `${url}${e.image}` }} style={{ height:imageHeight, width:imageWidth, marginLeft:5, marginRight:5, justifyContent:'center', alignItems: 'center' }} >
									<Text style={{ fontSize:21, fontFamily:'Avenir', color:'#9A9A9A' }}>{e.name}</Text>
								</ImageBackground>
							</TouchableOpacity>
						)) }
					</Swiper>
				</View>
			</View>
		);}
	}
}