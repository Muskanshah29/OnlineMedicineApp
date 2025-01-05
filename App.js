// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity, Modal } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { Calendar } from 'react-native-calendars';

// const App = () => {
//   const [showCalendar, setShowCalendar] = useState(false);

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.title}>To-Do App</Text>
//         <TouchableOpacity style={styles.calendarIcon} onPress={() => setShowCalendar(true)}>
//           <Icon name="calendar-month" size={28} color="#000" />
//         </TouchableOpacity>
//       </View>

//       {/* Task List */}
//       <FlatList
//         data={[]}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <TouchableOpacity style={styles.taskItem}>
//             <Text style={styles.taskText}>{item}</Text>
//           </TouchableOpacity>
//         )}
//         ListEmptyComponent={<Text style={styles.emptyList}>No tasks added!</Text>}
//       />

//       {/* Input Field */}
//       <View style={styles.inputContainer}>
//         <TextInput style={styles.input} placeholder="Add a new task" />
//         <Button title="Add" onPress={() => {}} />
//       </View>

//       {/* Calendar Modal */}
//       <Modal visible={showCalendar} transparent={true} animationType="slide">
//         <View style={styles.modalContainer}>
//           <View style={styles.calendarContainer}>
//             <Calendar
//               onDayPress={(day) => {
//                 console.log('Selected day', day);
//                 setShowCalendar(false); 
//               }}
//             />
//             <Button title="Close" onPress={() => setShowCalendar(false)} />
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20, backgroundColor: '#fff' },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   title: { fontSize: 24, fontWeight: 'bold' },
//   calendarIcon: { padding: 5 },
//   taskItem: {
//     backgroundColor: '#f0f0f0',
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   taskText: { fontSize: 16 },
//   emptyList: { textAlign: 'center', marginTop: 20, color: 'gray' },
//   inputContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: 'auto',
//   },
//   input: {
//     borderBottomWidth: 1,
//     flex: 1,
//     marginRight: 10,
//     paddingBottom: 5,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   calendarContainer: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 20,
//     width: '90%',
//   },
// });

// export default App;

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ListingScreen from './src/Screens/Authentication_module/ListingScreen'
import StackNavigator from './src/Navigation/StackNavigator'

const App = () => {
  return (
    <StackNavigator/>
  )
}

export default App

const styles = StyleSheet.create({})
