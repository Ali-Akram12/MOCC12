import {   Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from '@rneui/themed'
import { MaterialCommunityIcons  } from '@expo/vector-icons'; 
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';



const LoginScreen = () => {
  const navigation = useNavigation();
  const [visible, setvisible] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  
  return (
        <View style={{backgroundColor:"white"}}>
         <KeyboardAwareScrollView showsVerticalScrollIndicator={false} enableAutomaticScroll>
        <View style={{alignItems:"center", backgroundColor:"white", height:300, justifyContent:"center"}}>
        <View>
        <Image style={{width:54, height:64, marginTop:40}}source={require('../assets/iMAGES/image.png')} />
        </View>
            <Text style={{fontWeight:"bold", fontSize:25,paddingTop:10}}>Login</Text>
            <Text  style={{paddingTop:10}}>Login to continue with this app</Text>
        </View>
        <View style={{backgroundColor:"#F5F5F5", borderRadius:50, height:500 , paddingBottom:10}}>
      
        <View style={styles.inputContainer}>
            <Text style={{marginLeft:30, fontWeight:"bold",  marginTop:30}}>Email</Text>
            <TextInput 
            style={styles.input}
            placeholder='Enter your email'
            type="text"
            value={email}
            onChangeText ={(email) =>setEmail(email)}
            />

            <Text style={{marginLeft:30, fontWeight:"bold",  marginTop:30}}>Password</Text>
            <TextInput 
            style={styles.input}
            placeholder='Enter your password'
            value={password}
            onChangeText ={(password) => setPassword(password)}
            secureTextEntry={visible}
            maxLength={8}
            />
            <TouchableOpacity 
             onPress={()=>{
            setvisible(!visible)
            }}
            style={{position:"absolute", right:20, marginTop:180}}>
            <MaterialCommunityIcons 
            name={!visible ? 'eye' : 'eye-off'}
            size={25} 
            color="lightgray" 
            />
    </TouchableOpacity>

            <TouchableOpacity>
            <Button 
            onPress={() =>navigation.navigate("Dash")}
                    buttonStyle={{
                        backgroundColor: "#0096FF",
                        borderRadius: 30,
                        borderColor:'#D8D9D5',
                        borderWidth:0.8,
                        height:50,
                        marginTop:50

                    }}
                    titleStyle={{ color: 'white', marginHorizontal: 20 }}
                    title='LOGIN'
                />
                </TouchableOpacity>
           </View> 
          
        </View>
        </KeyboardAwareScrollView>
        </View>
  )
}

export default LoginScreen
const styles = StyleSheet.create({
  inputContainer: {
    marginLeft: 30,
    marginTop: 10,
    marginRight:30,
  
    
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#D8D8D8",
    borderRadius: 30,
    paddingLeft: 30,
    marginTop:10,
    backgroundColor:"white"
    /* Add other styles as needed */
  },
  but:{
    height:60
  }
})