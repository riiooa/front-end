import { View, Text, TouchableOpacity, Button } from 'react-native'
import React, {useState} from 'react'
import { TextInput } from 'react-native-gesture-handler'
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const RegisterScreen = () => {
    const navigation = useNavigation();
    const [nim, setNim] = useState('')
    const [username, setUsername] = useState('')
    const [nama, setNama] = useState('')
    const [password, setPassword] = useState('')
    const handleLogin = async (value) => {
        console.log('data login', value);
        try {
            const response = await axios.post('http://10.10.10.64:3000/users/register',{
                nim: value.nim,
                username: value.username,
                nama: value.nama,
                password: value.password,
            }) 
            console.log('response', response.data)
            if(response.data.status == 200) {
                navigation.navigate('LoginScreen')
            }
        } catch (error) {
            console.log('error', error.message)
            ToastAndroid.show('Masukan data dengan benar', ToastAndroid.SHORT)
        }
    }

  return (
    <View>
      <View>

        <View>
            <Text style={{
                fontSize: 40,
                color: '#0C356A',
                marginTop: 70,
                marginLeft: 60,
                fontWeight: 'bold'
            }}>
                Register
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
            
        }} placeholder='Masukan nim'
            value={nim}
            onChangeText={(e) => setNim(e)}/>
       
    
        <TextInput style={{
            borderColor: '#0C356A',
            borderWidth: 2,
            borderRadius: 13,
            marginBottom: 20,
            
        }} placeholder='Masukan username'
            value={username}
            onChangeText={(e) => setUsername(e)}/>

        <TextInput style={{
            borderColor: '#0C356A',
            borderWidth: 2,
            borderRadius: 13,
            marginBottom: 20,
            
        }} placeholder='Masukan nama'
            value={nama}
            onChangeText={(e) => setNama(e)}/>

        <TextInput style={{
            borderColor: '#0C356A',
            borderWidth: 2,
            borderRadius: 13,
            marginBottom: 50,
            
        }} placeholder='Masukan password'
            value={password}
            onChangeText={(e) => setPassword(e)}/>


        <TouchableOpacity style={{
            width: 100,
            alignSelf: 'center',
        }}>
            
        <  Button  title='Register' 
        // onPress={()=> navigation.navigate('HomeScreen')} 
        onPress={async ()=> {
            await handleLogin ({nim, username, nama, password});
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
            Sudah punya akun? </Text>
        <TouchableOpacity>
            <Text style={{ 
                color: '#0C356A',
                fontWeight: 'bold'}} 
                onPress={() => navigation.navigate('LoginScreen')}>
                Login
            </Text>
        </TouchableOpacity>
        </View>

      </View>

    

      </View>
    </View>
  )
}

export default RegisterScreen