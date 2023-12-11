import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity, ToastAndroid } from 'react-native'
import React, {useEffect, useState} from 'react'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AccountScreen = () => {

  const [nim, setNim] = useState('')
  const [nama, setNama] = useState('')
  const [passwordLama, setPasswordLama] = useState('')
  const [passwordBaru, setPasswordBaru] = useState('')
  const [KonfigurasiSandi, setKonfigurasiSandi] = useState('')


 
  const [data, setData] = useState ({
    nim: '',
    password: '',
    name: ''
  })

  console.log('nim', data.nim);
  console.log('password', data.password);
  console.log('name', data.name);

  useEffect(() => {
    getData
    return() => {};
  }, []);

  const getData= async () => {
    try{
      let nim = await AsyncStorage.getItem('nim')
      let password = await AsyncStorage.getItem('password')
      let name = await AsyncStorage.getItem('nama')
      if (nim !== null) {
        setData({
          nim: nim,
          password: password,
          name: name
        })
      }
    } catch (e) {
      console.log('error', e);
    }
  }

    
  return (
    <View >
      <View>
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
            
        }} placeholder='Masukan Password Lama'
        value={password}
        onChangeText={(e) => setPassword(e)}
        />

      <TextInput style={{
            borderColor: '#0C356A',
            borderWidth: 2,
            borderRadius: 13,
            marginBottom: 90,
            
        }} placeholder='Masukan Password Baru'
        value={password}
        onChangeText={(e) => setPassword(e)}
        />

      <TextInput style={{
            borderColor: '#0C356A',
            borderWidth: 2,
            borderRadius: 13,
            marginBottom: 90,
            
        }} placeholder='Konfigurasi Password'
        value={password}
        onChangeText={(e) => setPassword(e)}
        />

<TouchableOpacity style={{
            width: 100,
            alignSelf: 'center',
            backgroundColor: '#000000'
        }}>
            
        <  Button  title='Reset Password' 
        // onPress={()=> navigation.navigate('HomeScreen')}
        onPress={async ()=> {
            await handleLogin ({nim, password});
        }}

        />
        </TouchableOpacity>

      </View>
    </View>
  )
}



export default AccountScreen