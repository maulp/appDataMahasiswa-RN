import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    viewWrapper:{
        flex:1,
        margin:50
    },
    lihatWrapper:{
        flex:1,
        margin:10
    },
    viewForm:{
        flex:2,
        padding:10
    },
    viewData:{
        flex:4
    },
    textInput:{
        padding:10,
        fontSize:15,
        borderRadius:15,
        borderWidth:1,
        borderColor:'#CCCCCC',
        marginBottom:10,
        backgroundColor:'#dedede'
    },
    viewList:{
        flexDirection:'row',    
        borderBottomWidth:1,
        borderBottomColor:'#dedede',
        marginBottom:15
    },
    textListNama:{
        flex:3,
        fontSize:20,
        fontWeight:'bold'
    },
    textListEdit:{
        color:'blue',
        marginRight:20
    },
    textListDelete:{
        color:'red'
    },
    textListLihat:{
        paddingRight:20,
        color:'green'
    },
    content:{
        borderColor:'black',
        borderWidth:1,
        borderRadius:15,
        padding:10,
        flexDirection:'column',
        justifyContent:'center',
        marginTop:200
    },
    container:{
        flex:1,
        padding:16,
        paddingTop:30,
        backgroundColor:'#fff',
    },
    head:{
        height:40,
        backgroundColor:'#f1f8ff'
    },
    fontDetail:{
        fontSize:25
    },
    cardUtama:{
        margin:5,
        shadowColor:'#470000',
        shadowOffset:{width:0, height:2},
        shadowOpacity:0.2,
        borderRadius:11
    },
    cardView:{
        flex:3,
        flexDirection:'row',
        padding:6
    },
    teks:{fontSize:20}
    // text:{margin:6}
})