import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const LoginScreen = () => {
  const [username, setUserName] = useState('')
  const [pass, setPass] = useState('')

  const check = () =>{
    console.log(username);
    console.log(pass);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.logintxt}>Login Here*</Text>
      <TextInput
        style={styles.TextInput}
        placeholder="Username"
        value={username}
        onChangeText={setUserName}
      />

      <TextInput
        style={styles.TextInput}
        placeholder="password"
        value={pass}
        onChangeText={setPass}
      />

      <TouchableOpacity style={styles.btnContainer} onPress={check}>
        <Text style={styles.txt}>Button</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    // alignItems: 'center'
  },
  logintxt: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    marginVertical: 10
  },
  TextInput: {
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 10
  },
  btnContainer: {
    backgroundColor: 'blue',
    padding: 10,

  },
  txt: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15
  }
})