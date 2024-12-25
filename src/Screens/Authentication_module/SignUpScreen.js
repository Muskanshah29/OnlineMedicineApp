import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const SignUpScreen = () => {
    const [username, setUserName] = useState('')
    const [mobileno, setMobileno] = useState('')
    const [pass, setPass] = useState('')
    const [confpass, setConfpass] = useState('')

    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);
    const [error, setError] = useState({})
    const validation = () => {
        let FormErrors = {}

        if (!username) {
            FormErrors.username = 'Username is required'
        }

        if (!mobileno) {
            FormErrors.mobileno = 'Mobile number is required'
        }

        if (!pass) {
            FormErrors.pass = 'Password is required'
        }

        if (!confpass) {
            FormErrors.confpass = 'Confirm password is required'
        }
        else
            if (confpass != pass) {
                FormErrors.confpass = 'password is not match pls enter valid password'
            }

        setError(FormErrors);
        return Object.keys(FormErrors).length === 0 //true  0===0
    }


    const check = () => {

        if (validation()) //true
        {
            Alert.alert("Registartion Successfull....!");
            setUserName('');
            setPass('');
            setMobileno('')
            setConfpass('')
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.logintxt}>SignUp Here*</Text>
            <TextInput
                style={styles.TextInput}
                placeholder="Username"
                value={username}
                onChangeText={setUserName}
            />
            {error.username && <Text>{error.username}</Text>}

            <TextInput
                style={styles.TextInput}
                placeholder="Mobile no"
                value={mobileno}
                onChangeText={setMobileno}
                maxLength={10}
                keyboardType='numeric'
            />
            {error.mobileno && <Text>{error.mobileno}</Text>}

            <View style={{ flexDirection: 'row', paddingHorizontal: 10, alignItems: 'center', borderWidth: 1, borderRadius: 10, marginVertical: 10 }}>
                <TextInput
                    style={{ flex: 1, }}
                    placeholder="password"
                    value={pass}
                    onChangeText={setPass}
                    secureTextEntry={!showPassword1}
                />
                <TouchableOpacity onPress={() => {
                    setShowPassword1(!showPassword1)
                }}>
                    <Icon
                        name={showPassword1 ? 'eye-off' : 'eye'}
                        size={25}
                        color={showPassword1 ? 'blue' : 'black'}
                    />
                </TouchableOpacity>
            </View>
            {error.pass && <Text>{error.pass}</Text>}

            <View style={{ flexDirection: 'row', paddingHorizontal: 10, alignItems: 'center', borderWidth: 1, borderRadius: 10, marginVertical: 10 }}>
                <TextInput
                    style={{ flex: 1, }}
                    placeholder="confirm password"
                    value={confpass}
                    onChangeText={setConfpass}
                    secureTextEntry={!showPassword}
                />
                <TouchableOpacity onPress={() => {
                    setShowPassword(!showPassword)
                }}>
                    <Icon
                        name={showPassword ? 'eye-off' : 'eye'}
                        size={25}
                        color={showPassword ? 'blue' : 'black'}
                    />
                </TouchableOpacity>
            </View>
            {error.confpass && <Text>{error.confpass}</Text>}

            <TouchableOpacity style={styles.btnContainer} onPress={check}>
                <Text style={styles.txt}>Button</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SignUpScreen;

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