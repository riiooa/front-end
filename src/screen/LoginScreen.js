import { View, Text, Button, TouchableOpacity, ToastAndroid } from 'react-native'
import React, {useState} from 'react'
import { TextInput } from 'react-native-gesture-handler'
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
    const navigation = useNavigation();
    const [nim, setNim] = useState('')
    const [password, setPassword] = useState ('')
    const handleLogin = async (value) => {
        console.log('data login', value);
        try {
            const response = await axios.post('http://10.10.10.64:3000/users/login',{
                nim: value.nim,
                password: value.password,
            }) 
            console.log('response', response.data)
            if(response.data.status == 200) {
                ToastAndroid.show('Login Success', ToastAndroid.SHORT);
                navigation.navigate('HomeScreen')
                AsyncStorage.setItem('nim', value.nim)
                AsyncStorage.setItem('password', value.password)
                AsyncStorage.setItem('nama', response.data.users.nama)
            }
        } catch (error) {
            console.log('error', error.message)
            ToastAndroid.show('Nim atau Password salah', ToastAndroid.SHORT)
        }
    }
  return (
    <View >
      <View>

        <View>
            <Text style={{
                fontSize: 40,
                color: '#0C356A',
                marginTop: 70,
                marginLeft: 60,
                fontWeight: 'bold'
            }}>
                Login
            </Text>
            <Text style={{
                borderBottomWidth: 5,
                borderColor: '#0C356A',
                width: 190,
                marginLeft: 40,
                marginBottom: 30
            }}></Text>
        </View>

      <View style={{
        borderColor: '#0C356A',
        borderWidth: 2,
        borderRadius: 25,
        margin: 25,
        padding: 20,
      }}>
        <TextInput style={{
            borderColor: '#0C356A',
            borderWidth: 2,
            borderRadius: 13,
            marginBottom: 20,
            marginTop: 20,
            
        }} placeholder='Masukan Nim'
           value={nim}
           onChangeText={(e) => setNim(e)}
            />
       
    
        <TextInput style={{
            borderColor: '#0C356A',
            borderWidth: 2,
            borderRadius: 13,
            marginBottom: 90,
            
        }} placeholder='Password'
        value={password}
        onChangeText={(e) => setPassword(e)}
        />


<TouchableOpacity style={{
            width: 100,
            alignSelf: 'center',
            backgroundColor: '#000000'
        }}>
            
        <  Button  title='Login' 
        // onPress={()=> navigation.navigate('HomeScreen')}
        onPress={async ()=> {
            await handleLogin ({nim, password});
        }}

        />
        </TouchableOpacity>




        <View style={{
            alignItems:'center',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10,
            marginBottom: 20
        }} >
        <Text style={{
            color: '#000'
        }}>
            Belum punya akun?  </Text>
        <TouchableOpacity>
            <Text style={{ 
                color: '#0C356A',
                fontWeight: 'bold'}} 
                onPress={() => navigation.navigate('RegisterScreen')}>
                Register
            </Text>
        </TouchableOpacity>
        </View>


      </View>

    

      </View>
    </View>
  )
}



export default LoginScreen