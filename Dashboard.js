import * as React from 'react';
import { Button, View, Text,StyleSheet, TextInput } from 'react-native';

const Dashboard=({navigation})=>{
    return(
        <View style={style.container}>
        <Text style={{marginBottom:20}}>Details Screen</Text>

        <View style={style.btn}>
        <Button
        style={style.btn}
        title="Cari Data"
        onPress={() => navigation.navigate('CariData')}/>
        </View>

        <View style={style.btn}>
        <Button 
        style={style.btn}
        title="Lihat Data" 
        onPress={() => navigation.navigate('LihatData')} />
        </View>

        <View style={style.btn}>
        <Button
        style={style.btn}
        title="Tambah Data"
        onPress={() => navigation.navigate('TambahData')}/>
        </View>
  </View>
);
};

const style = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        borderColor:'black',
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center'
    },
    btn:{
        marginBottom:10,
        color:'gray',
        tintColor:'blue',
        width:200
    }
})
export default Dashboard;