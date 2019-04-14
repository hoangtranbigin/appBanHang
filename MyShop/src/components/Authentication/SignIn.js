import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import signIn from '../../api/signIn';
import global from '../global';
import saveToken from '../../api/saveToken';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    onSignIn() {
        const { email, password } = this.state;
        if(email =='' || password == ''){
            return alert('Please enter all fields')
        }
        signIn(email, password)
            .then(res => {
                global.onSignIn(res.user);
                this.props.navigation.navigate('Main');
                saveToken(res.token);
            })
            .catch(alert('Wrong username or password'));
    }

    render() {
        const { inputStyle, bigButton, buttonText } = styles;
        const { email, password } = this.state;
        return (
            <View style={{paddingLeft: 40, paddingRight: 40}}>
                <TextInput
                    style={inputStyle}
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={text => this.setState({ email: text })}
                />
                <TextInput
                    style={inputStyle}
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={text => this.setState({ password: text })}
                    secureTextEntry
                />
                <TouchableOpacity style={bigButton} onPress={this.onSignIn.bind(this)}>
                    <Text style={buttonText}>SIGN IN NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputStyle: {
        height: 45, backgroundColor:'#fff', borderRadius: 20, marginBottom: 10, paddingLeft: 30, fontSize:15
    },
    bigButton: {
        height:45, borderRadius:20, borderWidth:1, borderColor:'#fff', alignItems:'center',justifyContent:'center'
    },
    buttonText: {
        fontSize:15, fontFamily:'Avenir', fontWeight: '400', color:'#fff'
    }
});