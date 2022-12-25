import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { style } from './Style';

class Lihat extends Component {
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
    this.url = "http://192.168.100.161/mhs/mhs.php"
    // this.url = "http://192.168.162.248/mhs/mhs.php"
  }
  componentDidMount(){
    this.ambilListData()
  }
  async ambilListData(){
    await fetch(this.url)
    .then((response)=>response.json())
    .then((json)=>{
      console.log("hasil :"+JSON.stringify(json.data.result))
      this.setState({listData:json.data.result})
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  async klikDelete(id){
    await fetch(this.url+"/?op=delete&id="+id)
    .then((response)=>response.json())
    .then((json)=>{
      alert('Data berhasil didelete');
      this.ambilListData();
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  render() {
    return (
      <View style={style.lihatWrapper}>
        <View style={style.viewData}> 
        {
          this.setstate.listData.map((val,index)=>(
            <View>{val.id}</View>
          ))
        }
        </View>
      </View>
    );
  }
}

export default Lihat;
