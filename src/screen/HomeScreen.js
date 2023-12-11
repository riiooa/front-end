import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {FlatGrid} from 'react-native-super-grid';
import {SectionGrid} from 'react-native-super-grid';
// import {useNavigation} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome6';

import axios from 'axios';
import babelConfig from '../../babel.config';

const HomeScreen = () => {
  const navigation = useNavigation();

  const [movies, setMovies] = useState([]);

  const getMovie = async () => {
    let url =
      'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
    const res = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmIyMTUyMzgwY2Q2MTI5NmQ3YjdhZGJiYjE0MDU2OSIsInN1YiI6IjY1NTE4Y2ViMjViOTU1MDBlM2JlNjVjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fHX1WSeWYG9rcB5uXnj-lAjjo6TlU_Pz042h2YcXMPE',
      },
    });
    setMovies(res.data.results);
  };

  useEffect(() => {
    getMovie();
  }, []);
  console.log('data', movies);

  return (
    <View style={styles.container}>
      <View style={{backgroundColor: '#0C356A', paddingVertical: 1}}>
        <Text
          style={{
            color: 'white',
            fontSize: 35,
            textAlign: 'center',
            fontWeight: 'bold',
            top: 15,
          }}>
          UMovie
        </Text>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('NotificationScreen')}>
            <Icon name="bell" size={25} color="white" style={styles.Icon}/> 
          </TouchableOpacity>
        </View>
        </View>

        <View style={{}}>
        <Text style={styles.textJudul}>Trending Now</Text>
        </View>
        {/* <Text>tes</Text> */}
      
      <View>
      <ScrollView>
        <FlatList
          // itemDimension={130}
          // style={styles.gridView}
          // staticDimension={300}
          // fixed
          horizontal
          // spacing={10}
          data={movies}
          keyExtractor={item => item.id}
          renderItem={e => {
            // console.log('item' , item);
            return (
              <View>
                <TouchableOpacity 
                onPress={() => navigation.navigate('DetailScreen', {movie_id: e.item})}>
                <Image
                  style={{
                    height: 250,
                    width: 180,
                    margin: 10,
                    borderRadius: 10,
                    marginTop: 20,
                  }}
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${e.item.poster_path}`,
                  }}
                />
                </TouchableOpacity>
              </View>
            );
          }}
          />
      </ScrollView>
      </View>
      <Text style={styles.textJudul}>Film Bioskop</Text>
      <FlatList
        // itemDimension={130}
        style={styles.gridView}
        // staticDimension={100}
        // fixed
        // spacing={10}
        data={movies}
        keyExtractor={item => item.id}
        renderItem={e => {
          // console.log('item' , item);
          return (
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{
                  height: 170,
                  width: 140,
                  marginBottom: 20,
                  borderRadius: 13,
                  marginTop: 10,
                }}
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${e.item.poster_path}`,
                }}
              />
              <View>
                <Text style={styles.text}>{e.item.title}</Text>
                <Text style={styles.text}>{e.item.release_date}</Text>
                <TouchableOpacity
                  style={styles.buttonDetail}
                  onPress={() => navigation.navigate('DetailScreen', {movie_id: e.item})}>
                  <Text style={styles.textDetail}>Detail</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF5FF',
    // top:10,

    // padding:20,
    // alignItems:'center',
  },
  image: {
    height: 70,
    width: 400,
    marginBottom: 10,
  },
  textJudul: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    left: 10,
    top: 10,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    // margin:10,
    fontSize: 15,
    left: 10,
    top: 10,
  },
  gridView: {
    marginTop: 10,
    // flexDirection:'row-reverse',
    margin: 10,
    // backgroundColor:'black',
    // padding:100,
    // borderRadius:250,
  },
  buttonDetail: {
    width: 90,
    height: 35,
    backgroundColor: '#0C356A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    top: '40%',
    // right:'50%'
    margin: 10,
  },
  textDetail: {
    color: 'white',
    fontSize: 15,
    // top:10,
    // right:10
  },
  Icon: {
    marginLeft: 350,
    bottom: 18,
  }
});

export default HomeScreen;
