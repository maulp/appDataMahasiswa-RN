import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity} from 'react-native';
import { style } from './Style';
import {Card, TextInput} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';

class Lihat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:'',
      nama:'',
      nim:'',
      prodi:'',
      no_telp:'',
      alamat:'',
      listData:[],
      userFiltered:[]
    };
    // this.url = "http://192.168.100.161/mhs/mhs.php"
    // this.url = "http://192.168.162.248/mhs/mhs.php"
    // this.url = "http://192.168.170.248/mhs/mhs.php"
    this.url = "http://192.168.234.248/mhs/mhs.php"
  }
  componentDidMount(){
    this.ambilListData()
  }
  async ambilListData(){
    await fetch(this.url)
    .then((response)=>response.json())
    .then((json)=>{
      // console.log("hasil :"+JSON.stringify(json.data.result));
      // console.log("hasil :"+JSON.stringify(json.data.result[1].id));
      this.setState({listData:json.data.result});
      this.setState({userFiltered:json.data.result});
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
  cariData(textToSearch){
    this.setState({
      userFiltered:this.state.listData.filter(i=>
        i.nama.toLowerCase().includes(textToSearch.toLowerCase()))
    })
  }
  render() {
    return (
      <ScrollView style={style.lihatWrapper} refreshControl={refreshing}>
        <View style={style.viewData}>
        <TextInput onChangeText={text=>this.cariData(text)} style={{backgroundColor:'white', marginBottom:15}} placeholder='Cari Data' autoFocus/>
          {
            this.state.userFiltered.map((val,index)=>(
              <Card style={style.cardUtama} key={val.id} onPress={()=>this.props.navigation.navigate('Detail', {id:(val.id),nama:(val.nama),prodi:(val.prodi), nim:(val.nim), alamat:(val.alamat),no_telp:(val.no_telp)})}>
                <View style={style.cardView}>
                  <Text style={[style.teks, {flex:2}]}>{index+1+". "}{val.nama}</Text>
                  <View style={{flexDirection:'row', alignItems:'flex-end', flex:1}}>
                    <TouchableOpacity style={{flexDirection:'row'}}>
                    <AntDesign style={{marginRight:20, paddingLeft:20}} name='edit' size={27} color='green' onPress={()=>this.props.navigation.navigate('Update', {id:(val.id),nama:(val.nama),prodi:(val.prodi), nim:(val.nim), alamat:(val.alamat),no_telp:(val.no_telp)})}/>
                    <AntDesign name='delete' size={27} color='red' onPress={()=>this.klikDelete(val.id)}/>
                    </TouchableOpacity>
                  </View>
                </View>
              </Card>
            ))
          }
        </View>
      </ScrollView>
    );
  }
}

export default Lihat;
