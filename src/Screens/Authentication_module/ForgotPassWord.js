import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ForgotPasswordScreen = ({ navigation }) => {
    const [mobileno, setMobileno] = useState('');
    const [pass, setPass] = useState('');
    const [confpass, setConfpass] = useState('');
    
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);
    const [error, setError] = useState({});

    const validation = () => {
        let FormErrors = {};
        if (!mobileno) FormErrors.mobileno = 'Mobile number is required';
        if (!pass) FormErrors.pass = 'Password is required';
        if (!confpass) FormErrors.confpass = 'Confirm password is required';
        else if (confpass !== pass) FormErrors.confpass = 'Passwords do not match';

        setError(FormErrors);
        return Object.keys(FormErrors).length === 0;
    };

    const resetPassword = async () => {
        if (validation()) {
            const data = { mobile: mobileno, password: pass, confirmPassword: confpass };

            try {
                const response = await fetch("https://online-medicine-app-backend.vercel.app/user/forgot-password", {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                });
                const result = await response.json();
                console.log(result);

                if (response.ok) {
                    Alert.alert("Password reset successful!");
                    navigation.navigate('login');
                    setMobileno('');
                    setPass('');
                    setConfpass('');
                } else {
                    Alert.alert("Password reset failed", result.message);
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

            <Text style={styles.logintxt}>Forgot Password</Text>

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
                    placeholder="New Password"
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
                    placeholder="Confirm New Password"
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

            <TouchableOpacity style={styles.btnContainer} onPress={resetPassword}>
                <Text style={styles.txt}>Reset Password</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('login')}>
                <Text style={styles.forgotPasswordText}>Back to Login</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ForgotPasswordScreen;

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
        textAlign: 'right',
        marginVertical: 10,
        textDecorationLine: 'underline',
    },
});
