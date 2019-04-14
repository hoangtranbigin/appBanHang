import React, {Component} from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Button, Dimensions, Image, StatusBar, TextInput } from 'react-native';
import icLogo from '../../../media/appIcon/ic_logo.png';
import icMenu from '../../../media/appIcon/ic_menu.png';
import global from '../../global';
import search from '../../../api/searchProduct';

const { height } = Dimensions.get('window');

export default class Header extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			txtSearch: ''
		}
	}
	onSearch() {
        const { txtSearch } = this.state;
        this.setState({ txtSearch: '' });
        search(txtSearch)
        .then(arrProduct => global.setArraySearch(arrProduct))
        .catch(err => console.log(err));
    }
	render() {
		return (
			<View style={{ height: height/8, backgroundColor: '#34B089', padding: 10, justifyContent: 'space-around' }}>
				<View style={{flexDirection: 'row', justifyContent: 'space-between', paddingTop: 30 }}>
					<TouchableOpacity onPress={this.props.onOpen}>
						<Image source={icMenu} style={{width: 25, height: 25}} />
					</TouchableOpacity>
					<Text style={{ color:'#fff', fontFamily: 'Avenir', fontSize: 20 }}>Wearing a Dress</Text>
					<View/>
					{/* <Image source={icLogo} style={{width: 25, height: 25}} /> */}
				</View>
				<TextInput 
					style={{ height:height/29, backgroundColor:'#fff', marginTop: 10, paddingLeft: 10 }} 
					placeholder="What do you want to buy?"
                    underlineColorAndroid="transparent"
                    value={this.state.txtSearch}
                    onChangeText={text => this.setState({ txtSearch: text })}
                    onFocus={() => global.gotoSearch()} 
                    onSubmitEditing={this.onSearch.bind(this)}
				/>
			</View>
		);
	}
}