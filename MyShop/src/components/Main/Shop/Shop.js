import React, {Component} from 'react';
import { Text, View, Button, Dimensions, TouchableOpacity, StatusBar, Image } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Header from './Header';
import homeIconS from '../../../media/appIcon/home.png'
import homeIcon from '../../../media/appIcon/home0.png'
import cartIconS from '../../../media/appIcon/cart.png'
import cartIcon from '../../../media/appIcon/cart0.png'
import searchIconS from '../../../media/appIcon/search.png'
import searchIcon from '../../../media/appIcon/search0.png'
import contactIconS from '../../../media/appIcon/contact.png'
import contactIcon from '../../../media/appIcon/contact0.png'

const { height } = Dimensions.get('window');

export default class Shop extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			selectedTab:'home',
			types: [],
			topProducts: [],
			cartArray:[]
		}
	}

	componentDidMount(){
		fetch('http://localhost:8080/api/')
		.then(res => res.json())
		.then(resJSON => {
			const {type, product} = resJSON;
			console.log(resJSON)
			this.setState({ types: type, topProducts: product });
		})
		// .catch(er){
		// 	console.log(er)
		// }
	}

	openMenu(){
		const { open } = this.props;
		open();
	}
	render() {
		const { navigation } = this.props;
		return (
			<View style={{ flex:1 }}>
				<StatusBar hidden />
				<Header onOpen={this.openMenu.bind(this)} />

				<TabNavigator tabBarStyle={{ paddingBottom:18, height: height/12 }} >
					<TabNavigator.Item
						selected={this.state.selectedTab === 'home'}
						title="Home"
						renderIcon={() => <Image source={homeIcon} style={{ width:25, height: 25 }} />}
						renderSelectedIcon={() => <Image source={homeIconS} style={{ width:25, height: 25 }} />}
						onPress={() => this.setState({ selectedTab: 'home' })}
						selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
					>
						<Home types={this.state.types} topProducts={this.state.topProducts} navigation={navigation} />
					</TabNavigator.Item>
					
					<TabNavigator.Item
						selected={this.state.selectedTab === 'cart'}
						title="Cart"
						renderIcon={() => <Image source={cartIcon} style={{ width:25, height: 25 }} />}
						renderSelectedIcon={() => <Image source={cartIconS} style={{ width:25, height: 25 }} />}
						badgeText="1"
						onPress={() => this.setState({ selectedTab: 'cart' })}
						selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
					>
						<Cart cartArray={this.state.cartArray} />
					</TabNavigator.Item>

					<TabNavigator.Item
						selected={this.state.selectedTab === 'contact'}
						title="Search"
						renderIcon={() => <Image source={searchIcon} style={{ width:25, height: 25 }} />}
						renderSelectedIcon={() => <Image source={searchIconS} style={{ width:25, height: 25 }} />}
						// badgeText="1"
						onPress={() => this.setState({ selectedTab: 'contact' })}
						selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
					>
						<Search />
					</TabNavigator.Item>
					
					<TabNavigator.Item
						selected={this.state.selectedTab === 'search'}
						title="Contact"
						renderIcon={() => <Image source={contactIcon} style={{ width:25, height: 25 }} />}
						renderSelectedIcon={() => <Image source={contactIconS} style={{ width:25, height: 25 }} />}
						// badgeText="1"
						onPress={() => this.setState({ selectedTab: 'search' })}
						selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
					>
						<Contact />
					</TabNavigator.Item>
				</TabNavigator>
			</View>
		);
	}
}
