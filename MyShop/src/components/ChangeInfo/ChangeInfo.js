import React, { Component } from 'react';
import {
    View, TouchableOpacity, Text, Image, StyleSheet, TextInput, Alert
} from 'react-native';
import backSpecial from '../../media/appIcon/backs.png';
import icBack from '../../media/appIcon/back_white.png';
import getToken from '../../api/getToken';
import changeInfoApi from '../../api/changeInfo';
import global from '../global';

export default class ChangeInfo extends Component {
    constructor(props) {
        super(props);
        const { navigation } = this.props;
        const user = navigation.getParam('user', 'some default value');
        this.state = { 
            txtName: user.name, 
            txtAddress: user.address, 
            txtPhone: user.phone 
        };
    }
    onSuccess() {
        Alert.alert(
            'Notice',
            'Update info successfully',
            [
                { text: 'OK', onPress: () =>this.props.navigation.goBack() }
            ],
            { cancelable: false }
        );
    }
    change(){
        const {txtName, txtAddress, txtPhone} = this.state;
        getToken()
        .then(token => changeInfoApi(token, txtName, txtPhone, txtAddress))
        .then(user => {
            this.onSuccess();
            global.onSignIn(user);
        })
        .catch()
    }
    render() {
        const {
            wrapper, header, headerTitle, backIconStyle, body,
            signInContainer, signInTextStyle, textInput
        } = styles;

        return (
            <View style={wrapper}>
                <View style={header}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image source={icBack} style={backIconStyle} />
                    </TouchableOpacity>
                    <Text style={headerTitle}>User Infomation</Text>
                    <View/>
                </View>
                <View style={body}>
                    <TextInput
                        style={textInput}
                        placeholder="Enter your name"
                        autoCapitalize="none"
                        value={this.state.txtName}
                        onChangeText={text => this.setState({ ...this.state, txtName: text })}
                    />
                    <TextInput
                        style={textInput}
                        placeholder="Enter your address"
                        autoCapitalize="none"
                        value={this.state.txtAddress}
                        onChangeText={text => this.setState({ ...this.state, txtAddress: text })}
                    />
                    <TextInput
                        style={textInput}
                        placeholder="Enter your phone number"
                        autoCapitalize="none"
                        value={this.state.txtPhone}
                        onChangeText={text => this.setState({ ...this.state, txtPhone: text })}
                    />
                    <TouchableOpacity style={signInContainer} onPress={this.change.bind(this)}>
                        <Text style={signInTextStyle}>CHANGE YOUR INFOMATION</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: '#fff' },
    header: { marginTop:30,flex: 1, backgroundColor: '#2ABB9C', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 10 },// eslint-disable-line
    headerTitle: { fontFamily: 'Avenir', color: '#fff', fontSize: 20 },
    backIconStyle: { width: 30, height: 30 },
    body: { flex: 10, backgroundColor: '#F6F6F6', justifyContent: 'center' },
    textInput: {
        height: 45,
        marginHorizontal: 20,
        backgroundColor: '#FFFFFF',
        fontFamily: 'Avenir',
        paddingLeft: 20,
        borderRadius: 20,
        marginBottom: 20,
        borderColor: '#2ABB9C',
        borderWidth: 1
    },
    signInTextStyle: {
        color: '#FFF', fontFamily: 'Avenir', fontWeight: '600', paddingHorizontal: 20
    },
    signInContainer: {
        marginHorizontal: 20,
        backgroundColor: '#2ABB9C',
        borderRadius: 20,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch'
    },
    signInStyle: {
        flex: 3,
        marginTop: 50
    }
});