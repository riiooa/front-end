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

const DetailScreen = (props) => {
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
  console.log('ini props', props.route.params.movie_id);
  const detail_movie = props.route.params.movie_id
  return (
    <View style={styles.container}> 
    <View>
      <Image
       style={{
        height: 300,
        width: 400,
        }}
       source={{
        uri: `https://image.tmdb.org/t/p/w500${detail_movie.poster_path}`,
        }}
      />
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <Icon name="angle-left" size={25} color="#A9A9A9" style={styles.Icon}/> 
      </TouchableOpacity>
    </View>
          
       <Image
       style={{
        height: 170,
        width: 120,
        marginBottom: 20,
        borderRadius: 18,
        left: 25,
        bottom: 60,
        }}
       source={{
        uri: `https://image.tmdb.org/t/p/w500${detail_movie.poster_path}`,
        }}
       />
        <View>
          <Text style={styles.textJudul}>{detail_movie.title}</Text>
        </View>
        <View>
          <Text style={styles.text1}>Release Date</Text>
          <Text style={styles.text1}>Popularity</Text>
          <Text style={styles.text1}>Language</Text>
        </View>
        <View>
         <Text style={styles.text2}>{detail_movie.release_date}</Text>
         <Text style={styles.text2}>{detail_movie.popularity}</Text>
         <Text style={styles.text2}>{detail_movie.original_language}</Text>
        </View>
        <View>
          <Text style={styles.textJudul1}>Synopsis</Text>
          <Text style={styles.textSinopsis}>{detail_movie.overview}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF5FF',
    // top:10,

    // padding:20,
    // alignItems:'center',
  },
  textJudul: {
    color: 'black',
    fontWeight: 'bold',
    // margin:10,
    fontSize: 18,
    left: 160,
    bottom: 190,
  },
  text1: {
    color: '#A9A9A9',
    fontWeight: 'normal',
    // margin:10,
    fontSize: 15,
    left: 160,
    bottom: 170,
  },
  text2: {
    color: 'black',
    fontWeight: 'normal',
    // margin:10,
    fontSize: 15,
    left: 270,
    bottom: 230,
  },
  textJudul1: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    left: 17,
    bottom: 170,
  },
  textSinopsis: {
    color: 'black',
    fontWeight: 'normal',
    fontSize: 15,
    textAlign: 'justify',
    bottom: 190,
    paddingVertical: 10,
    margin: 15,
  },
  Icon: {
   bottom: 280,
   left: 8, 
  },
})

export default DetailScreen
