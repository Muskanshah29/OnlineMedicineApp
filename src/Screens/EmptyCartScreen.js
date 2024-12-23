import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EmptyCartScreen = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../Asset/Image/emptycartimg.png')}
      />
      <Text style={{marginVertical:20}} >Whoops</Text>
      <Text style={{color:'grey'}}>Your cart is Empty</Text>
    </View>
  )
}

export default EmptyCartScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})