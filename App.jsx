import React from 'react';
import { useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Animated, Image} from 'react-native';



export default function App() {
  const barAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(barAnimation, {
      toValue: 100,
      duration: 5000,
      useNativeDriver: false,
    }).start();
  }, [barAnimation]);

  const barWidth = barAnimation.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 200],
  });


  return (
    <View style={styles.container}>
      <Text style= {styles.text}>UniSport UAQ</Text>
      <Image style = {styles.logo} source={require('./logo.png') }/>
      <Animated.View style={[styles.loadingBar,{width: barWidth }]} ></Animated.View>
      <Text>Loading...</Text>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {  
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',

  },

  logo: {
    width: 159,
    height: 159,
    marginTop: 20,
  },
  loadingBar:{
    alignItems: 'left',
    borderRadius: 5,
    height: 10,
    backgroundColor: 'lightgray',
    margin: 20,
  },
});
