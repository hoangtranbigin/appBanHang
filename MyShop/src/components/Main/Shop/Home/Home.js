import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity } from 'react-native';
import Collection from './Collection';
import Category from './Categoty';
import TopProduct from './TopProduct';

export default class HomeView extends Component<Props> {
	render() {
		const { navigation } = this.props;
		// const { types } = this.props.types;	
		return (
				<ScrollView style={{ flex:1, backgroundColor: '#DBDBD8', marginBottom: 18 }}>
					<Collection />
					<Category navigation={navigation} types={this.props.types} />
					<TopProduct navigation={navigation} topProducts={this.props.topProducts} />
				</ScrollView>
		);
	}
}
// import React, {Component} from 'react';
// import { Button, Animated, Easing } from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation';
// import HomeView from './HomeView';
// import ProductDetail from '../ProductDetail/ProductDetail';
// import ListProduct from '../ListProduct/ListProduct';
// 
// const HomeNavigator = createStackNavigator(
//   	{				
// 		HomeView: {
// 			screen:	HomeView,
// 			navigationOptions:{
// 				header: null,
// 				headerTitle: 'asd',
// 			    headerLeft: (
// 			      <Button
// 			        onPress={() => alert('This is a button!')}
// 			        title="Info"
// 			        color="red"
// 			      />
// 			    ),
// 			}
// 		},
// 		ListProduct: {
// 			screen:	ListProduct,
// 			navigationOptions:{
// 				header: null,
// 			}
// 		},
// 		ProductDetail: {
// 			screen:	ProductDetail,
// 			navigationOptions:{
// 				header: null,
// 			}
// 		},
//   	},
//   	{
// 	    initialRouteName: "HomeView",
// 	    transitionConfig: () => ({
// 		      transitionSpec: {
// 		        duration: 300,
// 		        easing: Easing.out(Easing.poly(4)),
// 		        timing: Animated.timing,
// 		      },
// 	      	screenInterpolator: sceneProps => {
//                 const {layout, position, scene} = sceneProps;
//                 const {index} = scene;
// 
//                 const width = layout.initWidth;
//                 const translateX = position.interpolate({
//                     inputRange: [index - 1, index, index + 1],
//                     outputRange: [width, 0, 0],
//                 });
// 
//                 const opacity = position.interpolate({
//                     inputRange: [index - 1, index - 0.99, index],
//                     outputRange: [0, 1, 1],
//                 });
// 
//                 return {opacity, transform: [{translateX: translateX}]};
//             },
// 	    })
// 	}
// );
// 
// export default createAppContainer(HomeNavigator);