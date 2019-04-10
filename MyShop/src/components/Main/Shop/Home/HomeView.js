import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity } from 'react-native';
import Collection from './Collection';
import Category from './Categoty';
import TopProduct from './TopProduct';

export default class HomeView extends Component<Props> {
	render() {
		const { navigation } = this.props;

		return (
				<ScrollView style={{ flex:1, backgroundColor: '#DBDBD8', marginBottom: 18 }}>
					<Collection />
					<Category navigation={navigation} />
					<TopProduct navigation={navigation} />
				</ScrollView>
		);
	}
}