import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SignUpScreen = ({ navigation }) => {
    const [username, setUserName] = useState('');
    const [mobileno, setMobileno] = useState('');
    const [pass, setPass] = useState('');
    const [confpass, setConfpass] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);
    const [error, setError] = useState({});

    const validation = () => {
        let FormErrors = {};
        if (!username) FormErrors.username = 'Username is required';
        if (!mobileno) FormErrors.mobileno = 'Mobile number is required';
        if (!pass) FormErrors.pass = 'Password is required';
        if (!confpass) FormErrors.confpass = 'Confirm password is required';
        else if (confpass !== pass) FormErrors.confpass = 'Passwords do not match';

        setError(FormErrors);
        return Object.keys(FormErrors).length === 0;
    };

    const check = async () => {
        if (validation()) {
            const userData = { username, mobile: mobileno, password: pass, confirmPassword: confpass };

            try {
                const responce = await fetch("https://online-medicine-app-backend.vercel.app/user/register", {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(userData),
                });
                const result = await responce.json();
                console.log(result);

                if (responce.ok) {
                    Alert.alert("Registration Successful!");
                    navigation.navigate('login');
                    setUserName('');
                    setPass('');
                    setMobileno('');
                    setConfpass('');
                } else {
                    Alert.alert("Registration failed", result.message);
                }
            } catch (err) {
                Alert.alert(err.message);
            }
        }
    };

    return (
        <View style={styles.container}>
            {/* Back Arrow */}
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backArrow}>
                <Icon name="arrow-left" size={25} color="white" />
            </TouchableOpacity>

            <Text style={styles.logintxt}>Sign Up Here*</Text>

            <TextInput
                style={styles.TextInput}
                placeholder="Username"
                value={username}
                onChangeText={setUserName}
            />
            {error.username && <Text style={styles.errorText}>{error.username}</Text>}

            <TextInput
                style={styles.TextInput}
                placeholder="Mobile no"
                value={mobileno}
                onChangeText={setMobileno}
                maxLength={10}
                keyboardType="numeric"
            />
            {error.mobileno && <Text style={styles.errorText}>{error.mobileno}</Text>}

            <View style={styles.passwordContainer}>
                <TextInput
                    style={{ flex: 1 }}
                    placeholder="Password"
                    value={pass}
                    onChangeText={setPass}
                    secureTextEntry={!showPassword1}
                />
                <TouchableOpacity onPress={() => setShowPassword1(!showPassword1)}>
                    <Icon
                        name={showPassword1 ? 'eye-off' : 'eye'}
                        size={25}
                        color={showPassword1 ? 'blue' : 'black'}
                    />
                </TouchableOpacity>
            </View>
            {error.pass && <Text style={styles.errorText}>{error.pass}</Text>}

            <View style={styles.passwordContainer}>
                <TextInput
                    style={{ flex: 1 }}
                    placeholder="Confirm Password"
                    value={confpass}
                    onChangeText={setConfpass}
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
            {error.confpass && <Text style={styles.errorText}>{error.confpass}</Text>}

            <TouchableOpacity style={styles.btnContainer} onPress={check}>
                <Text style={styles.txt}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('forgotpassword')}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>

        </View>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
    },
    backArrow: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 10
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
    forgotPasswordText: {
        color: 'blue',
        textAlign:'right',
        marginVertical: 10,
        textDecorationLine: 'underline',
    },
    
});
