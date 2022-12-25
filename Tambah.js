import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import {style} from './Style';
// import Lihat from './Lihat';
import { Colors } from 'react-native/Libraries/NewAppScreen';
class Tambah extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama:'',
      nim:'',
      prodi:'',
      no_telp:'',
      alamat:''
    };
    this.url = "http://192.168.100.161/mhs/mhs.php"
    // this.url = "http://192.168.162.248/mhs/mhs.php"
    // this.url = "http://192.168.170.248/mhs/mhs.php"
    // this.url = "http://192.168.148.248/mhs/mhs.php"
  }
  klikSimpan(){
    if(this.setState.nama == '' || this.setState.nim == '' || this.setState.prodi == '' || this.setState.no_telp == '' || this.setState.alamat == ''){
      alert('gagal tambah data');
    }else{
      var urlAksi = this.url+"/?op=create";
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
            keyboardType='numeric'
            value={this.state.nim}
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
            keyboardType='numeric'
            value={this.state.no_telp}
            onChangeText={(text)=>this.setState({no_telp:text})}></TextInput>
          {/* teks input no telp */}

          {/* teks input alamat*/}
          <TextInput 
            style={style.textInput}
            placeholder="alamat"
            value={this.state.alamat}
            onChangeText={(text)=>this.setState({alamat:text})}></TextInput>
          {/* teks input alamat */}

          <Button title="Simpan"
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
