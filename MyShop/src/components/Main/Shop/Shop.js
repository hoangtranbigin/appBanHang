import React, {Component} from 'react';
import { Text, View, Button, Dimensions, TouchableOpacity, StatusBar, Image } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home/Home';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Header from './Header';
import global from '../../../components/global';
import homeIconS from '../../../media/appIcon/home.png'
import homeIcon from '../../../media/appIcon/home0.png'
import cartIconS from '../../../media/appIcon/cart.png'
import cartIcon from '../../../media/appIcon/cart0.png'
import searchIconS from '../../../media/appIcon/search.png'
import searchIcon from '../../../media/appIcon/search0.png'
import contactIconS from '../../../media/appIcon/contact.png'
import contactIcon from '../../../media/appIcon/contact0.png'
import initData from '../../../../src/api/initData'
import saveCart from '../../../../src/api/saveCart'
import getCart from '../../../../src/api/getCart'

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
		global.addProductToCart = this.addProductToCart.bind(this)
		global.incrQuantity = this.incrQuantity.bind(this);
        global.decrQuantity = this.decrQuantity.bind(this);
        global.removeProduct = this.removeProduct.bind(this);
        global.gotoSearch = this.gotoSearch.bind(this);
	}

	gotoSearch(){
		this.setState({ selectedTab: 'search' });
	}

	addProductToCart(product){
		var checkExist = false;
		if(!this.state.cartArray.length){
			this.setState({ cartArray: this.state.cartArray.concat({product: product, quantity: 1}) }, () => saveCart(this.state.cartArray))
		}
		else{
			this.state.cartArray.map(e => {
				if (e.product.id == product.id) {
					checkExist = true;
					return alert('This product is already in the cart');
				}
			})
			if (checkExist == false) {
				this.setState({ cartArray: this.state.cartArray.concat({product: product, quantity: 1}) }, () => saveCart(this.state.cartArray))
			}
		}
	}

	incrQuantity(productId) {
        const newCart = this.state.cartArray.map(e => {
            if (e.product.id !== productId) return e;
            return { product: e.product, quantity: e.quantity + 1 };
        });
        this.setState({ cartArray: newCart }, 
            () => saveCart(this.state.cartArray)
        );
    }

    decrQuantity(productId) {
        const newCart = this.state.cartArray.map(e => {
            if (e.product.id !== productId || e.quantity == 0 ) return e;
            return { product: e.product, quantity: e.quantity - 1 };
        });
        this.setState({ cartArray: newCart }, 
            () => saveCart(this.state.cartArray)
        );
    }

    removeProduct(productId) {
        const newCart = this.state.cartArray.filter(e => e.product.id !== productId);
        this.setState({ cartArray: newCart }, 
            () => saveCart(this.state.cartArray)
        );
    }

	componentDidMount(){
		initData()
		.then(resJSON => {
			const {type, product} = resJSON;
			console.log(resJSON)
			this.setState({ types: type, topProducts: product });
		})
		getCart()
		.then(cartArray => this.setState({ cartArray }))
	}

	openMenu(){
		const { open } = this.props;
		open();
	}
	render() {
		const { navigation } = this.props;
		return (
			<View style={{ flex:1, backgroundColor: '#DBDBD8' }}>
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
						badgeText={this.state.cartArray.length}
						onPress={() => this.setState({ selectedTab: 'cart' })}
						selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
					>
						<Cart navigation={navigation} cartArray={this.state.cartArray} />
					</TabNavigator.Item>

					<TabNavigator.Item
						selected={this.state.selectedTab === 'search'}
						title="Search"
						renderIcon={() => <Image source={searchIcon} style={{ width:25, height: 25 }} />}
						renderSelectedIcon={() => <Image source={searchIconS} style={{ width:25, height: 25 }} />}
						// badgeText="1"
						onPress={() => this.setState({ selectedTab: 'search' })}
						selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
					>
						<Search navigation={navigation} />
					</TabNavigator.Item>
					
					{/* <TabNavigator.Item */}
					{/* 	selected={this.state.selectedTab === 'contact'} */}
					{/* 	title="Contact" */}
					{/* 	renderIcon={() => <Image source={contactIcon} style={{ width:25, height: 25 }} />} */}
					{/* 	renderSelectedIcon={() => <Image source={contactIconS} style={{ width:25, height: 25 }} />} */}
					{/* 	// badgeText="1" */}
					{/* 	onPress={() => this.setState({ selectedTab: 'contact' })} */}
					{/* 	selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }} */}
					{/* > */}
					{/* 	<Contact /> */}
					{/* </TabNavigator.Item> */}
				</TabNavigator>
			</View>
		);
	}
}
