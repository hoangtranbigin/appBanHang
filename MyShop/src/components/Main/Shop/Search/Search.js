import React, {Component} from 'react';
import { Button, Animated, Easing } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import SearchView from './SearchView';
import ProductDetail from '../ProductDetail/ProductDetail';

const SearchNavigator = createStackNavigator(
  	{				
		SearchView: {
			screen:	SearchView,
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
  	},
  	{
	    initialRouteName: "SearchView",
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

export default createAppContainer(SearchNavigator);