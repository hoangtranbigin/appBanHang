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
					<Collection navigation={navigation} />
					<Category navigation={navigation} types={this.props.types} />
					<TopProduct navigation={navigation} topProducts={this.props.topProducts} />
				</ScrollView>
		);
	}
}
