import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const LoginScreen = ({ navigation }) => {
  const [mobile, setMobile] = useState('')
  const [pass, setPass] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({})

  const validation = () => {
    let FormErrors = {}

    if (!mobile) {
      FormErrors.mobile = 'Mobile number is required'
    } else if (!/^\d{10}$/.test(mobile)) {
      FormErrors.mobile = 'Enter a valid 10-digit mobile number'
    }

    if (!pass) {
      FormErrors.pass = 'Password is required'
    }

    setError(FormErrors);
    return Object.keys(FormErrors).length === 0; //true if no errors
  }

  const check = async () => {
    if (validation()) {
      const data = {
        mobile: mobile,
        password: pass
      }

      try {
        const responce = await fetch("https://online-medicine-app-backend.vercel.app/user/login", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        const result = await responce.json();
        console.log(result);

        if (responce.ok) {
          Alert.alert("Login successful...!");
          navigation.navigate('home')
          setMobile('');
          setPass('');
        }
        else {
          Alert.alert("Login Failed...!", result.message);
        }

      }
      catch (error) {
        Alert.alert("Unable to fetch API", error.message);
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logintxt}>Login Here*</Text>
      <TextInput
        style={styles.TextInput}
        placeholder="Mobile Number"
        value={mobile}
        onChangeText={setMobile}
        keyboardType="numeric"
        maxLength={10}
      />
      {error.mobile && <Text style={styles.errorText}>{error.mobile}</Text>}

      <View style={styles.passwordContainer}>
        <TextInput
          style={{ flex: 1 }}
          placeholder="Password"
          value={pass}
          onChangeText={setPass}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Icon
            name={showPassword ? 'eye-off' : 'eye'}
            size={25}
            color={showPassword ? 'blue' : 'black'}
          />
        </TouchableOpacity>
      </View>
      {error.pass && <Text style={styles.errorText}>{error.pass}</Text>}

      <TouchableOpacity style={styles.btnContainer} onPress={check}>
        <Text style={styles.txt}>Login</Text>
      </TouchableOpacity>

      {/* Forgot Password and Sign Up */}
      <View style={styles.linkContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('forgotpassword')}>
          <Text style={styles.link}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('signup')}>
          <Text style={styles.link}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  logintxt: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    marginVertical: 10,
  },
  TextInput: {
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
  },
  btnContainer: {
    backgroundColor: 'blue',
    padding: 10,
  },
  txt: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 5,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 14,
  },
})
