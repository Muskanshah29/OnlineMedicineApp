import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const ForgotPassWord = () => {
    const [mobileno,setMobileno] = useState('')
    const [pass, setPass] = useState('')
    const [confpass,setConfpass]=useState('')

    const check = () => {
       
        console.log(pass);
        console.log(mobileno)
        console.log(confpass)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.logintxt}>Forgot password *</Text>
            <TextInput
                style={styles.TextInput}
                placeholder="Mobile no"
                value={mobileno}
                onChangeText={setMobileno}
                maxLength={10}
                keyboardType='numeric'
            />

            <TextInput
                style={styles.TextInput}
                placeholder="password"
                value={pass}
                onChangeText={setPass}
                secureTextEntry
            />

            <TextInput
                style={styles.TextInput}
                placeholder="confirm password"
                value={confpass}
                onChangeText={setConfpass}
                secureTextEntry
            />

            <TouchableOpacity style={styles.btnContainer} onPress={check}>
                <Text style={styles.txt}>Button</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ForgotPassWord;

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