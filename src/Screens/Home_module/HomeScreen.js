import { FlatList, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Face from 'react-native-vector-icons/FontAwesome6'
import Cart from 'react-native-vector-icons/Feather'
import Bell from 'react-native-vector-icons/Fontisto'
import { SearchBar } from 'react-native-elements'
import axios from 'axios'


const HomeScreen = ({ navigation }) => {
    const [search, setSearch] = useState('')
    const [data, setData] = useState([]);


    const data1 = [
        {
            id: 1,
            name: 'item1'
        },
        {
            id: 2,
            name: 'item1'
        },
        {
            id: 3,
            name: 'item1'
        },
        {
            id: 4,
            name: 'item1'
        }
    ]

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const responce = await axios.get("https://online-medicine-app-backend.vercel.app/api/categories/getCategory");
                console.log(responce.data);
                setData(responce.data);
            }
            catch (err) {
                console.log(err);
            }
        }
        fetchCategory();
    }, [])

    const rederItem1 = ({ item }) => (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('listingscreen',{categoryName:item.categoryName})
            }}>
            <View style={{ backgroundColor: 'white', margin: 10, width: 85, height: '90%', alignItems: 'center', borderRadius: 40, borderWidth: 1 }}>
                <View style={{ backgroundColor: 'pink', width: 70, height: 70, borderRadius: 70, marginVertical: 10 }}>
                    <Image
                        source={{ uri: item.image }}
                        style={{ width: '100%', height: '100%', borderRadius: 50 }}
                    />
                </View>
                <Text>{item.categoryName}</Text>
            </View>
        </TouchableOpacity>
    )

    const renderItem = () => (
        <View style={styles.cartContainer}>
            <View style={styles.cartimg}>

            </View>
            <Text>abc</Text>
            <Text>abc</Text>

            <View style={{ flexDirection: 'row', width: '100%' }}>
                <Text style={{ width: '60%' }}>rs 100</Text>
                <View style={{ backgroundColor: '#FFC000', width: '40%', flexDirection: 'row', justifyContent: 'space-between', padding: 4, borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }}>
                    <Bell
                        name='bell'
                        size={22}
                        color='white'
                    />
                    <Text style={{ color: 'white' }}>3.2</Text>
                </View>
            </View>
        </View>
    )

    return (
        <ScrollView>
            <View style={styles.container}>
                {/* HeaderPart */}
                <View style={styles.header}>
                    <View style={styles.headicon}>
                        <Face
                            name='face-smile-beam'
                            size={50}
                            color='white'
                        />

                        <View style={{ flexDirection: 'row', gap: 20 }}>
                            <Bell
                                name='bell'
                                size={25}
                                color='white'
                            />

                            <Cart
                                name='shopping-bag'
                                size={25}
                                color='white'
                            />
                        </View>
                    </View>

                    <View style={{ marginVertical: 20 }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Hii,User</Text>
                        <Text style={{ color: 'white' }}>Welcome, to online medicine App</Text>
                    </View>

                    <View style={{ marginVertical: '4%' }}>
                        <SearchBar
                            placeholder='search here'
                            onChangeText={(value) => setSearch(value)}
                            value={search}

                            containerStyle={{
                                backgroundColor: 'transparent',
                                borderTopWidth: 0,
                                borderBottomWidth: 0
                            }}

                            inputContainerStyle={{
                                backgroundColor: 'white',
                                borderRadius: 30,
                                paddingHorizontal: 10
                            }}

                            inputStyle={{
                                color: 'black',
                                fontSize: 15
                            }}

                        />
                    </View>
                </View>

                <View style={styles.category}>
                    <Text style={{ fontWeight: 'bold' }}>Top Categories</Text>
                    <FlatList
                        data={data}
                        renderItem={rederItem1}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />

                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                    <Image
                        source={require('../../Asset/Image/offer.png')}
                        style={{ width: '100%', height: 150 }}
                    />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}>Deals of the day</Text>
                    <Text style={{ color: 'blue' }}>more</Text>
                </View>

                <FlatList
                    data={data1}
                    renderItem={renderItem}
                    numColumns={2}
                />
            </View>
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    header: {
        backgroundColor: 'blue',
        height: 220,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        padding: 20
    },
    headicon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    category: {
        height: 200,
        marginTop: 35,
        marginBottom: 15,
        padding: 5
    },
    cartContainer: {
        backgroundColor: '#F3F4F5',
        flex: 1,
        margin: 10,
        padding: 5,
        borderRadius: 20

    },
    cartimg: {
        backgroundColor: 'grey',
        height: 150,
        borderRadius: 20
    }
})