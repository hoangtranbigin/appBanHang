import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, ListView, RefreshControl } from 'react-native';
import backIcon from '../../../../media/appIcon/backList.png';
import back from '../../../../media/appIcon/back.png';
import getListProduct from '../../../../api/getListProduct';

const url = 'http://localhost:8080/api/images/product/';
function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

export default class ListProduct extends Component {
	constructor(props) {
        super(props);
        const { navigation } = this.props;
	  	const category = navigation.getParam('category', 'some default value');
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            listProducts: ds,
            refreshing: false,
            page: 1,
            category: category
        };
        this.arr = [];
    }
    componentDidMount() {
        const idType = this.state.category.id;
        getListProduct(idType, 1)
        .then(arrProduct => {
            this.arr = arrProduct;
            this.setState({ listProducts: this.state.listProducts.cloneWithRows(this.arr) });
        })
        .catch(err => console.log(err));
    }
  	render() {
  		const {
            container, header, wrapper, backStyle, titleStyle,
            productContainer, productImage, productInfo, lastRowInfo,
            txtName, txtPrice, txtMaterial, txtColor, txtShowDetail
        } = styles;
	  	
	    return (
	      	<View style={{ flex:1, backgroundColor: '#DBDBD8', padding:10, marginTop: 30 }}>
	      		<View style={wrapper}>
	      			<View style={header}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image source={backIcon} style={backStyle} />
                        </TouchableOpacity>
                        <Text style={titleStyle}>{this.state.category.name}</Text>
                        <View style={{ width: 30 }} />
                    </View>
                    <ListView 
                    	removeClippedSubviews={false}
						dataSource={this.state.listProducts}
						renderRow={product =>(
							<View style={{flexDirection:'row', paddingVertical:15, borderTopWidth: 1, borderTopColor: '#F0F0F0'}}>
								<Image source={{ uri: `${url}${product.images[0]}` }} style={{width:100, height:(100 * 452 / 361)}} />
								<View style={{justifyContent: 'space-between',marginLeft:15,flex:1 }}>
									<Text style={{fontFamily:'Avenir', color:"#BCBCBC", fontSize:20,fontWeight:'400'}}>{toTitleCase(product.name)}</Text>
									<Text style={{fontFamily:'Avenir',color:'#B10D65'}}>{product.price}$</Text>
									<Text style={{fontFamily:'Avenir'}}>Material {product.material}</Text>
									<View style={{flexDirection:'row', justifyContent: 'space-between', alignItems: 'center' }}>
										<Text style={{fontFamily:'Avenir',fontSize:13}}>Color {product.color}</Text>
										<View style={{ backgroundColor: product.color.toLowerCase(), height: 14, width: 14, borderRadius: 8 }} />
										<TouchableOpacity onPress={() => this.props.navigation.navigate('ProductDetail',{product:product})}>
											<Text style={{fontFamily:'Avenir',color:"#B10D65", fontSize:10}}>SHOW DETAILS</Text>
										</TouchableOpacity>
									</View>
								</View>
							</View>
						)}
						refreshControl={
                            <RefreshControl 
                                refreshing={this.state.refreshing}
                                onRefresh={() => {
                                    this.setState({ refreshing: true });
                                    const newPage = this.state.page + 1;
                                    const idType = this.state.category.id;
                                    getListProduct(idType, newPage)
                                    .then(arrProduct => {
                                        this.arr = arrProduct.concat(this.arr);
                                        this.setState({ 
                                            listProducts: this.state.listProducts.cloneWithRows(this.arr),
                                            refreshing: false 
                                        });
                                    })
                                    .catch(err => console.log(err));
                                }}
                            />
                        }
                    />
	      		</View>
	      	</View>
	    );
  	}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DBDBD8'
    },
    header: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5
    },
    wrapper: {
        backgroundColor: '#fff',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        margin: 10,
        paddingHorizontal: 10
    },
    backStyle: {
        width: 26,
        height: 26
    },
    productContainer: {
        flexDirection: 'row',
        paddingVertical: 15,
        borderTopColor: '#F0F0F0',
        borderBottomColor: '#FFF',
        borderLeftColor: '#FFF',
        borderRightColor: '#FFF',
        borderWidth: 1
    },
    titleStyle: {
        fontFamily: 'Avenir',
        color: '#B10D65',
        fontSize: 20
    },
    productImage: {
        width: 90,
        height: (90 * 452) / 361
    },
    productInfo: {
        justifyContent: 'space-between',
        marginLeft: 15,
        flex: 1
    },
    lastRowInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    txtName: {
        fontFamily: 'Avenir',
        color: '#BCBCBC',
        fontSize: 20,
        fontWeight: '400'
    },
    txtPrice: {
        fontFamily: 'Avenir',
        color: '#B10D65',
    },
    txtMaterial: {
        fontFamily: 'Avenir'
    },
    txtColor: {
        fontFamily: 'Avenir'
    },
    txtShowDetail: {
        fontFamily: 'Avenir',
        color: '#B10D65',
        fontSize: 11
    }
});