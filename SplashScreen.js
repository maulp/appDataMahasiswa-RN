import { StackActions } from '@react-navigation/native';
import React, {Component} from 'react';
import { Button, View, Text,StyleSheet, TextInput,Image, ImageBackgroundComponent } from 'react-native';
import Logo from './Logo.png';

class SplashScreen extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    componentDidMount(){
        setTimeout(()=>{
            this.props.navigation.dispatch(StackActions.replace('Dashboard'));
        },5000);
    }

    render(){
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Pendataan Mahasiswa</Text>
                <Image
                source={Logo}/>
                <View>
        </View>

            </View>
        );
    }
}

export default SplashScreen;