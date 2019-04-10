import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity, Image } from 'react-native';
import backIcon from '../../../../media/appIcon/backList.png';
import sp1 from '../../../../media/temp/sp1.jpeg';

export default class ListProduct extends Component<Props> {
  render() {
    return (
      	<View style={{ flex:1, backgroundColor: '#DBDBD8', padding:10, marginTop: 30 }}>
      		<ScrollView style={{ padding:5,paddingHorizontal: 10,backgroundColor:"#fff", marginBottom:15, shadowColor: '#2E272B', shadowOffset: {width:0, height:3}, shadowOpacity: 0.2 }}>
				<View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',paddingBottom:10 }}>
					<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
						<Image source={backIcon} style={{width:26, height:26}} />
					</TouchableOpacity>
					<Text style={{fontFamily:'Avenir', fontSize:20,color:'#B10D65'}}>Party Dress</Text>
					<View style={{width:26}} />
	        	</View>
					
	        	<View style={{flexDirection:'row', paddingVertical:15, borderTopWidth: 1, borderTopColor: '#F0F0F0'}}>
	        		<Image source={sp1} style={{width:100, height:(100 * 452 / 361)}} />
	        		<View style={{justifyContent: 'space-between',marginLeft:15,flex:1 }}>
	        			<Text style={{fontFamily:'Avenir', color:"#BCBCBC", fontSize:20,fontWeight:'400'}}>Lace Sleeve Si</Text>
	        			<Text style={{fontFamily:'Avenir',color:'#B10D65'}}>117$</Text>
	        			<Text style={{fontFamily:'Avenir'}}>Material silk</Text>
	        			<View style={{flexDirection:'row', justifyContent: 'space-between', alignItems: 'center' }}>
	        				<Text style={{fontFamily:'Avenir',}}>Color RoyalBlue</Text>
	        				<View style={{backgroundColor:'cyan', width:15,height:15,borderRadius: 7}} />
	        				<TouchableOpacity><Text style={{fontFamily:'Avenir',color:"#B10D65", fontSize:11}}>SHOW DETAILS</Text></TouchableOpacity>
	        			</View>
	        		</View>
	        	</View>

	        	<View style={{flexDirection:'row', paddingVertical:15, borderTopWidth: 1, borderTopColor: '#F0F0F0'}}>
	        		<Image source={sp1} style={{width:100, height:(100 * 452 / 361)}} />
	        		<View style={{justifyContent: 'space-between',marginLeft:15,flex:1 }}>
	        			<Text style={{fontFamily:'Avenir', color:"#BCBCBC", fontSize:20,fontWeight:'400'}}>Lace Sleeve Si</Text>
	        			<Text style={{fontFamily:'Avenir',color:'#B10D65'}}>117$</Text>
	        			<Text style={{fontFamily:'Avenir'}}>Material silk</Text>
	        			<View style={{flexDirection:'row', justifyContent: 'space-between', alignItems: 'center' }}>
	        				<Text style={{fontFamily:'Avenir',}}>Color RoyalBlue</Text>
	        				<View style={{backgroundColor:'cyan', width:15,height:15,borderRadius: 7}} />
	        				<TouchableOpacity><Text style={{fontFamily:'Avenir',color:"#B10D65", fontSize:11}}>SHOW DETAILS</Text></TouchableOpacity>
	        			</View>
	        		</View>
	        	</View>

	        	<View style={{flexDirection:'row', paddingVertical:15, borderTopWidth: 1, borderTopColor: '#F0F0F0'}}>
	        		<Image source={sp1} style={{width:100, height:(100 * 452 / 361)}} />
	        		<View style={{justifyContent: 'space-between',marginLeft:15,flex:1 }}>
	        			<Text style={{fontFamily:'Avenir', color:"#BCBCBC", fontSize:20,fontWeight:'400'}}>Lace Sleeve Si</Text>
	        			<Text style={{fontFamily:'Avenir',color:'#B10D65'}}>117$</Text>
	        			<Text style={{fontFamily:'Avenir'}}>Material silk</Text>
	        			<View style={{flexDirection:'row', justifyContent: 'space-between', alignItems: 'center' }}>
	        				<Text style={{fontFamily:'Avenir',}}>Color RoyalBlue</Text>
	        				<View style={{backgroundColor:'cyan', width:15,height:15,borderRadius: 7}} />
	        				<TouchableOpacity><Text style={{fontFamily:'Avenir',color:"#B10D65", fontSize:11}}>SHOW DETAILS</Text></TouchableOpacity>
	        			</View>
	        		</View>
	        	</View>

	        	<View style={{flexDirection:'row', paddingVertical:15, borderTopWidth: 1, borderTopColor: '#F0F0F0'}}>
	        		<Image source={sp1} style={{width:100, height:(100 * 452 / 361)}} />
	        		<View style={{justifyContent: 'space-between',marginLeft:15,flex:1 }}>
	        			<Text style={{fontFamily:'Avenir', color:"#BCBCBC", fontSize:20,fontWeight:'400'}}>Lace Sleeve Si</Text>
	        			<Text style={{fontFamily:'Avenir',color:'#B10D65'}}>117$</Text>
	        			<Text style={{fontFamily:'Avenir'}}>Material silk</Text>
	        			<View style={{flexDirection:'row', justifyContent: 'space-between', alignItems: 'center' }}>
	        				<Text style={{fontFamily:'Avenir',}}>Color RoyalBlue</Text>
	        				<View style={{backgroundColor:'cyan', width:15,height:15,borderRadius: 7}} />
	        				<TouchableOpacity><Text style={{fontFamily:'Avenir',color:"#B10D65", fontSize:11}}>SHOW DETAILS</Text></TouchableOpacity>
	        			</View>
	        		</View>
	        	</View>
        	</ScrollView>
      	</View>
    );
  }
}	