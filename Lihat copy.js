import React, { Component } from 'react';
import { View, Text, FlatList, SafeAreaView} from 'react-native';
import { style } from './Style';

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
      listData:[]
    };
    this.url = "http://192.168.100.161/mhs/mhs.php"
    // this.url = "http://192.168.162.248/mhs/mhs.php"
    // this.url = "http://192.168.170.248/mhs/mhs.php"
    // this.url = "http://192.168.148.248/mhs/mhs.php"
  }
  componentDidMount(){
    this.ambilListData()
  }
  async ambilListData(){
    await fetch(this.url)
    .then((response)=>response.json())
    .then((json)=>{
      // console.log("hasil :"+JSON.stringify(json.data.result));
      this.setState({listData:json.data.result});
      // console.log("hasil :"+JSON.stringify(json.data.result[1].id));
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
          this.state.listData.map((val,index)=>(
            <View style={style.viewList} key={index}>
                <Text style={style.textListNama}>{index+1+". "}{val.nama}</Text>
              <View style={{flexDirection:'row'}}>
              <Text style={style.textListLihat} onPress={()=>this.props.navigation.navigate('Detail', {id:(val.id),nama:(val.nama),prodi:(val.prodi), nim:(val.nim), alamat:(val.alamat),no_telp:(val.no_telp)})}>Detail</Text>
              <Text style={style.textListEdit} onPress={()=>this.props.navigation.navigate('Update', {id:(val.id),nama:(val.nama),prodi:(val.prodi), nim:(val.nim), alamat:(val.alamat),no_telp:(val.no_telp)})}>Update</Text>
              {/* <Text style={style.textListEdit} onPress={()=>this.props.navigation.navigate('Update',{id:(val.id)})}>Update</Text> */}
              <Text style={style.textListDelete} onPress={()=>this.klikDelete(val.id)}>Delete</Text>
              </View>
            </View>
          ))
        }
        </View>
      </View>
    );
  }
}

export default Lihat;
