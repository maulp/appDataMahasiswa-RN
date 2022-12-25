import { TabRouter, validatePathConfig } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, FlatList, SafeAreaView} from 'react-native';
import { style } from './Style';
import Lihat from './Lihat';

class Detail extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        nama:'',
        nim:'',
        prodi:'',
        no_telp:'',
        alamat:'',
        listData:[]
    };
    // this.url = "https://192.168.100.161/mhs/mhs.php"
    // this.url = "http://192.168.162.248/mhs/mhs.php"
    // this.url = "http://192.168.170.248/mhs/mhs.php"
    this.url = "http://192.168.148.248/mhs/mhs.php"
  }
  
  // componentDidMount(){
  //   this.ambilListData()
  // }
  // async ambilListData(){
  //   await fetch(this.url)
  //   .then((response)=>response.json())
  //   .then((json)=>{
  //     // console.log("hasil: "+json.data.result)
  //     // this.setState({listData:json.data.result})
  //     console.log("hasil : "+data);
  //   })
  //   .catch((error)=>{
  //     console.log(error);
  //   })
  // }
  render() {
    return (
      <View style={style.viewWrapper}>
        <View style={style.content}>
        {/* <Text style={style.fontDetail}>id : {this.props.route.params.id}</Text> */}
        <Text style={style.fontDetail}>Nama : {this.props.route.params.nama}</Text>
        <Text style={style.fontDetail}>Nim : {this.props.route.params.nim}</Text>
        <Text style={style.fontDetail}>Prodi : {this.props.route.params.prodi}</Text>
        <Text style={style.fontDetail}>No. Telp : {this.props.route.params.no_telp}</Text>
        <Text style={style.fontDetail}>Alamat : {this.props.route.params.alamat}</Text>
        </View>
      </View>
    );
  }
}

export default Detail;
