import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Dimensions, Image, TouchableOpacity } from 'react-native';
import bannerImage from '../../../../media/temp/banner.jpg'
import sp1 from '../../../../media/temp/sp1.jpeg';
import sp2 from '../../../../media/temp/sp2.jpeg';
import sp3 from '../../../../media/temp/sp3.jpeg';
import sp4 from '../../../../media/temp/sp4.jpeg';

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');
const imageWidth = (width-50)/2;
const imageHeight = imageWidth / 361 * 452;
const url = 'http://localhost:8080/api/images/product/'

export default class TopProduct extends Component<Props> {
	constructor(props) {
	    super(props);
	    // const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	    this.state = {
	    	// dataSource: ds.cloneWithRows(this.props.topProducts),
	    }
	}
	componentWillReceiveProps(nextProp){
		const product = nextProp.topProducts
		console.log(product)
	}
	render() {
		return (
			<View style={{ backgroundColor: '#fff', margin: 10, shadowColor: '#2E272B', shadowOffset: {width:0, height:3}, shadowOpacity: 0.2 }}>
				<View style={{ height: 50, justifyContent: 'center', paddingLeft:10 }}>
					<Text style={{ fontSize: 20, color:'#AFAFAF' }}>TOP PRODUCT</Text>
				</View>

				<View style={{ flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' }} >
					{ this.props.topProducts.map(e => (
						<TouchableOpacity onPress={() => this.props.navigation.navigate('ProductDetail',{product:e,name:e.name,id:e.id,price:e.price,color:e.color,material:e.material,description:e.description,images:e.images})} style={{shadowColor: '#2E272B', shadowOffset: {width:0, height:3}, shadowOpacity: 0.2, paddingBottom: 15  }} key={e.id}>
							<Image source={{ uri: `${url}${e.images[0]}` }} style={{ width: imageWidth, height: imageHeight, marginBottom: 5 }} />
							<Text style={{paddingLeft: 10, fontFamily: 'Avenir', color: '#AFAFAF', fontWeight: '500' }}>{e.name.toUpperCase()}</Text>
							<Text style={{ paddingLeft:10, fontFamily: 'Avenir', color:'#662F90' }}>{e.price}$</Text> 
						</TouchableOpacity> 
					)) }
        		</View>
			</View>
		);
	}
}
