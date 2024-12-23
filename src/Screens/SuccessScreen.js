import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'

const SuccessScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../Asset/Image/img.png')}
                style={{ marginVertical: 20 }}
            />
            <Text style={{ marginVertical: 20, fontSize: 20, fontWeight: 'bold' }} >Thank You</Text>

            <Text style={{ color: 'grey', padding: 20 }}>     Your Order will be delivered with invoice #9ds69hs. You can track the delivery in the order section.</Text>

            <TouchableOpacity style={styles.btnContainer} >
                <Text style={styles.txt}>Button</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SuccessScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    btnContainer: {
        backgroundColor: 'blue',
        padding: 10,
        width: 300,
        marginTop: 50
    },
    txt: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15
    }
})