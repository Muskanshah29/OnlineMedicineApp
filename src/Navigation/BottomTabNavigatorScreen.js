import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../Screens/Home_module/HomeScreen';
import NotificationScreen from '../Screens/Home_module/NotificationScreen';
import YourCart_Screen from '../Screens/Home_module/YourCart_Screen';

const Tab = createBottomTabNavigator();

// function BellScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Bell Screen</Text>
//     </View>
//   );
// }

function PlusScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Plus Screen</Text>
    </View>
  );
}


function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

const BottomTabNavigatorScreen = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Bell') {
              iconName = focused ? 'notifications' : 'notifications-outline';
            } else if (route.name === 'Plus') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            } else if (route.name === 'Bag') {
              iconName = focused ? 'bag' : 'bag-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarShowLabel: false, 
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Tab.Screen name="Bell" component={NotificationScreen} options={{headerShown:false}}/>
        <Tab.Screen
          name="Plus"
          component={PlusScreen}
          options={{
            tabBarStyle: {
              position: 'relative', 
              bottom: 0,             
              zIndex: 1,            
            },
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? 'add-circle' : 'add-circle-outline'}
                size={30} 
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen name="Bag" component={YourCart_Screen} options={{headerShown:false}}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigatorScreen;
