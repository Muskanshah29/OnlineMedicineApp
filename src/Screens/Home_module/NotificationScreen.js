import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const notifications = [
    {
        id: '1',
        icon: 'lightbulb-outline',
        text: 'We know that—for children AND adults—learning is most effective when it is',
        date: 'Aug 12, 2020 at 12:08 PM',
        unread: true,
    },
    {
        id: '2',
        icon: 'calendar-outline',
        text: 'The future of professional learning is immersive, communal experiences for',
        date: 'Aug 12, 2020 at 12:08 PM',
        unread: false,
    },
    {
        id: '3',
        icon: 'bell',
        text: 'With this in mind, Global Online Academy created the Blended Learning Design',
        date: 'Aug 12, 2020 at 12:08 PM',
        unread: false,
    },
    {
        id: '4',
        icon: 'bell',
        text: 'Technology should serve, not drive, pedagogy. Schools often discuss',
        date: 'Aug 12, 2020 at 12:08 PM',
        unread: false,
    },
    {
        id: '5',
        icon: 'bell',
        text: 'Peer learning works. By building robust personal learning communities both',
        date: 'Aug 12, 2020 at 12:08 PM',
        unread: false,
    },
];

const NotificationScreen = () => {
    const renderItem = ({ item }) => (
        <View style={styles.notificationItem}>
            <IconButton icon={item.icon} size={24} />
            <View style={styles.notificationTextContainer}>
                <Text style={styles.notificationText}>{item.text}</Text>
                <Text style={styles.notificationDate}>{item.date}</Text>
            </View>
            {item.unread && <View style={styles.unreadIndicator} />}
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Icon name="arrow-back" size={30} color="#000" /> 
                </TouchableOpacity>
                <Text style={styles.headerText}>Notification</Text>
            </View>
            <FlatList
                data={notifications}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        // paddingVertical: 20,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginLeft: 10, 
    },
    notificationItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    notificationTextContainer: {
        flex: 1,
        marginLeft: 8,
    },
    notificationText: {
        fontSize: 16,
        color: '#333',
    },
    notificationDate: {
        fontSize: 12,
        color: '#999',
        marginTop: 4,
    },
    unreadIndicator: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#ff0000',
    },
});

export default NotificationScreen;
