import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native';
import { Dimensions } from 'react-native';
import Back from 'react-native-vector-icons/Ionicons';
import Plus from 'react-native-vector-icons/AntDesign';
const { width, height } = Dimensions.get('window');

const YourCart_Screen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.subcontainer1}>
                <TouchableOpacity>
                    <Back
                        name="arrow-back"
                        size={29}
                        color='black'
                        style={{ padding: 5 }}
                    />
                </TouchableOpacity>
                <Text style={styles.textStyle}>Your Cart</Text>

            </View>
            <View style={styles.subcontainer2}>
                <Text style={styles.text}>2 Items in your cart</Text>

                <TouchableOpacity style={styles.text_icon_Style}>
                    <Plus
                        name="plus"
                        size={20}
                        color='blue'
                        style={{ borderWidth: 1.5, borderRadius: 4, borderColor: 'blue', alignSelf: 'center' }}
                    />
                    <Text style={styles.textt}>Add more</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.subcontainer3}>
                <TouchableOpacity>
                <Image
                    source={require('../../Asset/Image/sugar_free_product1.png')}
                    style={styles.imageStyle}
                />
                </TouchableOpacity>
                <View>
                    <Text style={styles.textStyle}>Sugar free gold</Text>
                    <Text style={styles.text}>bottle of 500 pellets</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.textStyle}>Rs.25</Text>

                    </View>
                </View>

            </View>
            <View style={styles.divider} />
            <View style={styles.subcontainer4}>
                <TouchableOpacity>
                <Image
                    source={require('../../Asset/Image/sugar_free_product2.png')}
                    style={styles.imageStyle}
                />
                </TouchableOpacity>
                <View>
                    <Text style={styles.textStyle}>Sugar free gold</Text>
                    <Text style={styles.text}>bottle of 500 pellets</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.textStyle}>Rs.18</Text>

                    </View>
                </View>

            </View>
            <View style={styles.divider} />
            <View>
                <Text style={styles.textStyle}>Payment Summary</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.text}>Order Total</Text>
                    <Text style={styles.price}>280.80</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.text}>Items Discount</Text>
                    <Text style={styles.price}>- 28.80</Text>

                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.text}>Coupon Discount</Text>
                    <Text style={styles.price}>-15.80</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.text}>Shipping</Text>
                    <Text style={styles.price}>Free</Text>
                </View>
                <View style={styles.divider} />
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.text}>Total</Text>
                    <Text style={styles.price}>Rs.185</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.btnContainer}>
                <Text style={styles.txt}>Place Order</Text>
            </TouchableOpacity>

        </View>
    )
}

export default YourCart_Screen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 10
    },
    subcontainer1: {
        flexDirection: 'row',
        padding: 5
    },
    textStyle: {
        marginLeft: 10,
        padding: 7,
        fontSize: 19,
        fontWeight: '500'
    },
    subcontainer2: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        width: '60%',
        fontSize: 16,
        color: 'grey',
        marginLeft: 15
    },
    text_icon_Style: {
        flexDirection: 'row',
        width: '40%',
        justifyContent: 'space-evenly'
    },
    textt: {
        color: 'blue',
        fontSize: 16,
        marginRight: 15
    },
    subcontainer3: {
        flexDirection: 'row',
        marginBottom: 10,
        marginLeft: 15
    },
    subcontainer4: {
        flexDirection: 'row',
        marginBottom: 20,
        marginLeft: 15
    },
    imageStyle: {
        width: width * 0.3,
        height: height * 0.17,
        resizeMode: 'contain',
    },
    price: {
        fontSize: 16,
        color: 'grey',
        marginLeft: 55
    },
    btnContainer: {
        backgroundColor: 'blue',
        padding: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 70
    },
    txt: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15
    },
    divider: {
        height: 1,
        backgroundColor: '#E7E9EC',
        marginVertical: 10,
    },

})