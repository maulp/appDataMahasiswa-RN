import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import {style} from './Style';
// import Lihat from './Lihat';
import { Colors } from 'react-native/Libraries/NewAppScreen';
class Tambah extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama:this.props.route.params.nama,
      nim:this.props.route.params.nim,
      prodi:this.props.route.params.prodi,
      no_telp:this.props.route.params.no_telp,
      alamat:this.props.route.params.alamat,
      idEdit:null
    };
    // this.url = "http://192.168.100.161/mhs/mhs.php"
    // this.url = "http://192.168.162.248/mhs/mhs.php"
    // this.url = "http://192.168.170.248/mhs/mhs.php"
    this.url = "http://192.168.212.248/mhs/mhs.php"
  }
  klikSimpan(){
    if(this.setState.nama == '' || this.setState.nim == '' || this.setState.prodi == '' || this.setState.no_telp == '' || this.setState.alamat == ''){
      alert('gagal tambah data');
    }else{
      var urlAksi = this.url+"/?op=update&id="+this.props.route.params.id;
      alert('berhasil update data');
    }
    fetch(urlAksi,{
      method:'post',
      headers:{
        'Content-Type':'application/x-www-form-urlencoded'
      },
      body:"nama="+this.state.nama+"&nim="+this.state.nim+"&prodi="+this.state.prodi+"&no_telp="+this.state.no_telp+"&alamat="+this.state.alamat
    })
    .then((response)=>response.json())
    .then((json)=>{
      this.setState({nama:''});
      this.setState({nim:''});
      this.setState({prodi:''});
      this.setState({no_telp:''});
      this.setState({alamat:''});
    })
  }
  // async klikEdit(id){
  //   await fetch(this.url+"/?op=update&id="+id)
  //   .then((response)=>response.json())
  //   .then((json)=>{
  //     this.setState({nama:json.data.result[0].nama});
  //     this.setState({alamat:json.data.result[0].nim});
  //     this.setState({alamat:json.data.result[0].prodi});
  //     this.setState({alamat:json.data.result[0].no_telp});
  //     this.setState({alamat:json.data.result[0].alamat});
  //     this.setState({idEdit:id})
  //   })
  // }
  render() {
    return (
      <View style={style.viewWrapper}>
        <View style={style.viewForm}>
          {/* teks input nama */}
          <TextInput 
            style={style.textInput}
            placeholder="masukkan nama"
            value={this.state.nama}
            onChangeText={(text)=>this.setState({nama:text})}></TextInput>
          {/* teks input nama */}

            {/* teks input nim */}
            <TextInput 
            style={style.textInput}
            placeholder="masukkan nim"
            value={this.state.nim}
            keyboardType='numeric'
            onChangeText={(text)=>this.setState({nim:text})}></TextInput>
            {/* teks input nim */}

          {/* teks input prodi */}
          <TextInput 
            style={style.textInput}
            placeholder="prodi"
            value={this.state.prodi}
            onChangeText={(text)=>this.setState({prodi:text})}></TextInput>
          {/* teks input prodi */}

            {/* teks input no telp */}
          <TextInput 
            style={style.textInput}
            placeholder="masukkan no telp"
            value={this.state.no_telp}
            keyboardType='numeric'
            onChangeText={(text)=>this.setState({no_telp:text})}></TextInput>
          {/* teks input no telp */}

          {/* teks input alamat*/}
          <TextInput 
            style={style.textInput}
            placeholder="alamat"
            value={this.state.alamat}
            onChangeText={(text)=>this.setState({alamat:text})}></TextInput>
          {/* teks input alamat */}

          <Button title="Update"
          onPress={()=>this.klikSimpan()}
          ></Button>
          
          <View style={{marginTop:10, Colors:'red'}}>
          <Button title='Lihat Data'
          onPress={()=>this.props.navigation.navigate("Lihat")}></Button>
          </View>
        </View>
      </View>
    );
  }
}

export default Tambah;
