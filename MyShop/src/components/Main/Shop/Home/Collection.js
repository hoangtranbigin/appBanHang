import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Dimensions, Image } from 'react-native';
import bannerImage from '../../../../media/temp/banner.jpg'

const { height } = Dimensions.get('window');
export default class Collection extends Component<Props> {
	render() {
		return (
			<View style={{ height: height * 0.3, backgroundColor: '#fff', margin: 10, shadowColor: '#2E272B', shadowOffset: {width:0, height:3}, shadowOpacity: 0.2 }}>
				<View style={{flex:1,justifyContent: 'center', paddingLeft:10 }}>
					<Text style={{fontSize: 20, color:'#AFAFAF'}}>SPRING COLLECTION</Text>
				</View>
				<Image source={bannerImage} style={{flex:5, width:'auto', margin:5}} />
			</View>
	);
	}
}
