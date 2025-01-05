import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/Authentication_module/LoginScreen';
import SignUpScreen from '../Screens/Authentication_module/SignUpScreen';
import ForgotPassWord from '../Screens/Authentication_module/ForgotPassWord';
import SplashScreen from '../Screens/Authentication_module/SplashScreen';
import HomeScreen from '../Screens/Home_module/HomeScreen';
import NotificationScreen from '../Screens/Home_module/NotificationScreen';
import YourCart_Screen from '../Screens/Home_module/YourCart_Screen';
import ListingScreen from '../Screens/Authentication_module/ListingScreen';
import Productdetail from '../Screens/Home_module/Productdetail';

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="splash"
                    component={SplashScreen}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="login"
                    component={LoginScreen}
                    options={{
                        title: 'Welcome',
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="signup"
                    component={SignUpScreen}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="forgotpassword"
                    component={ForgotPassWord}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="home"
                    component={HomeScreen}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="notification"
                    component={NotificationScreen}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="listingscreen"
                    component={ListingScreen}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="detailscreen"
                    component={Productdetail}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="cart"
                    component={YourCart_Screen}
                    options={{
                        headerShown: false
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator

const styles = StyleSheet.create({})