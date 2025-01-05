import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'

const SplashScreen = ({navigation}) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('login'); 
    }, 3000);

    return () => clearTimeout(timer); 
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Online Medicine App</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center'
    },
    txt:{
        color:'white',
        fontSize:25,
        fontWeight:'bold'
    }
})