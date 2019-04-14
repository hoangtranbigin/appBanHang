import React, {Component} from 'react';
import { Button, Animated, Easing } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Main from './Main/Main';
import OrderHistory from './OrderHistory/OderHistory';
import Menu from './Main/Menu';
import Shop from './Main/Shop/Shop';
import Home from '../components/Main/Shop/Home/Home';
import Cart from '../components/Main/Shop/Cart/Cart';
import Category from '../components/Main/Shop/Home/Categoty';
import ListProduct from '../components/Main/Shop/ListProduct/ListProduct';
import ProductDetail from '../components/Main/Shop/ProductDetail/ProductDetail';
import SignIn from '../components/Authentication/SignIn';

const MainNavigator = createStackNavigator(
  	{				
		Main: {
			screen:	Main,
			navigationOptions:{
				header: null,
				headerTitle: 'asd',
			    headerLeft: (
			      <Button
			        onPress={() => alert('This is a button!')}
			        title="Info"
			        color="red"
			      />
			    ),
			}
		},
		Authentication: {
			screen:	Authentication,	
			navigationOptions:{
				header: null,
			}	
		},
		ChangeInfo: {
			screen:	ChangeInfo,	
			navigationOptions:{
				header: null,
			}	
		},
		OrderHistory: {
			screen:	OrderHistory,	
			navigationOptions:{
				header: null,
			}	
		},
		Shop: {
			screen:	Shop,	
			navigationOptions:{
				header: null,
			}	
		},
		Menu: {
			screen:	Menu,	
			navigationOptions:{
				header: null,
			}	
		},
		Home: {
			screen:	Home,	
			navigationOptions:{
				header: null,
			}	
		},
		Category: {
			screen:	Category,	
			navigationOptions:{
				header: null,
			}	
		},
		ListProduct: {
			screen:	ListProduct,	
			navigationOptions:{
				header: null,
			}	
		},
		ProductDetail: {
			screen:	ProductDetail,	
			navigationOptions:{
				header: null,
			}	
		},
		Cart: {
			screen:	Cart,	
			navigationOptions:{
				header: null,
			}	
		},
		SignIn: {
			screen:	SignIn,	
			navigationOptions:{
				header: null,
			}	
		},
  	},
  	{
	    initialRouteName: "Main",
	    transitionConfig: () => ({
		      transitionSpec: {
		        duration: 300,
		        easing: Easing.out(Easing.poly(4)),
		        timing: Animated.timing,
		      },
	      	screenInterpolator: sceneProps => {
                const {layout, position, scene} = sceneProps;
                const {index} = scene;

                const width = layout.initWidth;
                const translateX = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [width, 0, 0],
                });

                const opacity = position.interpolate({
                    inputRange: [index - 1, index - 0.99, index],
                    outputRange: [0, 1, 1],
                });

                return {opacity, transform: [{translateX: translateX}]};
            },
	    })
	}
);

export default createAppContainer(MainNavigator);