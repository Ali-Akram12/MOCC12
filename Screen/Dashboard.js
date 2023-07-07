import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';  
import { Avatar } from '@rneui/themed';
import { Entypo } from '@expo/vector-icons';
 

const Dashboard = () => {
    const [isclicked, setIsClicked] = useState(false);
    const [province, setProvince] = useState("ALL");
    const [convention, setConvention] = useState("ALL");
    const [Year, setYear] = useState("ALL");
    const [month, setMonth] = useState("ALL");
    const [isclicked1, setIsClicked1] = useState(false);
    const [isclicked2, setIsClicked2] = useState(false);
    const [isclicked3, setIsClicked3] = useState(false);
    const [isclicked4, setIsClicked4] = useState(false);
  return (
  <View style={{flex:1, backgroundColor:"white"}}>
  <View style={{padding:50, flexDirection:"row", justifyContent:"space-between"}}>
    <Text style={{fontWeight:"bold", fontSize:25}}>Dashboard</Text>
    <Ionicons style={{marginLeft:70, marginTop:5}} name="notifications-outline" size={24} color="black" />
    <View style={{width:20, height:20}}>
    <Avatar
        rounded
        source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm6vtzXRPC1hYFrjchRuMg1YML98HGbA9ptw&usqp=CAU"}}
    />
    </View>
    </View>
    <View style={{ marginLeft:25, marginRight:25, borderRadius:5,  borderColor: '#8e8e8e',backgroundColor:"#F5F5F5"}}>
    <View style={styles.dropdown}>
    <Ionicons name="ios-color-filter" size={24} color="lightgray" />
        <Text style={{marginRight:100, color:"lightgray"}}>Select Filter</Text>
        <TouchableOpacity
        onPress={() => {
            setIsClicked(!isclicked);
        }}
        >
        {isclicked?(
        <Entypo name="chevron-small-up" size={30} color="gray" />
        ) : (
            <Entypo name="chevron-small-down" size={30} color="gray" />
        )}
        </TouchableOpacity>
    </View>
    
    {isclicked?
   <View style={styles.dropdownarea}> 
       <View style={{padding:10}}>
       <Text style={{fontWeight:"bold"}}>Province</Text>
       <View style={{height:50, backgroundColor:"white", marginTop:5, flexDirection:"row",justifyContent:"space-between"}}>
       <Text style={{padding:10,color:"lightgray"}}>{province}</Text>
       <TouchableOpacity
       onPress={() => {
            setIsClicked1(!isclicked1);
        }}
       >
       {isclicked1?(
        <Entypo name="chevron-small-up" size={30} color="gray" />
        ) : (
            <Entypo name="chevron-small-down" size={30} color="gray" />
        )}
        </TouchableOpacity>
       
       </View>
       </View>


       <View style={{padding:10}}>
       <Text style={{fontWeight:"bold"}}>Convention</Text>
       <View style={{height:50, backgroundColor:"white", marginTop:5, flexDirection:"row",justifyContent:"space-between"}}>
       <Text style={{padding:10 ,color:"lightgray"}}>{convention}</Text>
       <TouchableOpacity
       onPress={() => {
            setIsClicked2(!isclicked2);
        }}
       >
       {isclicked2?(
        <Entypo name="chevron-small-up" size={30} color="gray" />
        ) : (
            <Entypo name="chevron-small-down" size={30} color="gray" />
        )}
        </TouchableOpacity>
       
       </View>
       </View>


       <View style={{padding:10}}>
       <Text style={{fontWeight:"bold"}}>Year</Text>
       <View style={{height:50, backgroundColor:"white", marginTop:5, flexDirection:"row",justifyContent:"space-between"}}>
       <Text style={{padding:10,color:"lightgray"}}>{Year}</Text>
       <TouchableOpacity
       onPress={() => {
            setIsClicked3(!isclicked3);
        }}
       >
       {isclicked3?(
        <Entypo name="chevron-small-up" size={30} color="gray" />
        ) : (
            <Entypo name="chevron-small-down" size={30} color="gray" />
        )}
        </TouchableOpacity>
       
       </View>
       </View>

       <View style={{padding:10}}>
       <Text style={{fontWeight:"bold"}}>Month</Text>
       <View style={{height:50, backgroundColor:"white", marginTop:5, flexDirection:"row",justifyContent:"space-between"}}>
       <Text style={{padding:10,color:"lightgray"}}>{month}</Text>
       <TouchableOpacity
       onPress={() => {
            setIsClicked4(!isclicked4);
        }}
       >
       {isclicked4?(
        <Entypo name="chevron-small-up" size={30} color="gray" />
        ) : (
            <Entypo name="chevron-small-down" size={30} color="gray" />
        )}
        </TouchableOpacity>
       
       </View>
       </View>
        </View>: null}
        </View>
  </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
    dropdown:{
    //    borderWidth:0.5,
    //    borderRadius:5,
       width: '100%',
       height: 50,
       borderColor: '#8e8e8e',
       alignSelf: 'center',
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: "center",
       paddingLeft: 15,
       paddingRight: 15,
       
    },
    dropdownarea:{
        width: "90%",
        marginTop:20,
        height: 400,
        borderRadius:10,
        alignSelf:"center"

    },
})