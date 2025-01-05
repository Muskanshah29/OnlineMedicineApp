import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import Back from 'react-native-vector-icons/Ionicons'
import Plus from 'react-native-vector-icons/AntDesign'

const Productdetail = ({route}) => {
    const {product}=route.params
    console.log(product)
    console.log(product.price)
    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity>
                <Back
                    name="arrow-back"
                    size={26}
                    color='black'
                />
            </TouchableOpacity>

            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>{product.name}</Text>
            <Text style={{ color: 'grey' }}>Lorem.</Text>

            <Image
                source={{uri:product.image}}
                style={{ borderWidth: 1, alignSelf: 'center', width: '100%',height:'30%', marginVertical: 10 }}
            />

            <View style=
                {{
                    // backgroundColor: 'red',
                    width: '100%',
                    height: 50,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                <Text style={{ width: '60%', fontSize: 16, fontWeight: 'bold' }}>
                   rs. {product.price}
                </Text>
                <TouchableOpacity style={{ flexDirection: 'row', width: '40%', justifyContent: 'space-evenly' }}>
                    <Plus
                        name="plus"
                        size={20}
                        color='blue'
                        style={{ borderWidth: 1.5, borderRadius: 4, borderColor: 'blue', alignSelf: 'center' }}
                    />
                    <Text style={{ color: 'blue' }}>Add to cart</Text>
                </TouchableOpacity>
            </View>

            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Package Size</Text>
            <View style={{ backgroundColor: 'grey', width: 140, height: 100, justifyContent: 'center', padding: 10, borderWidth: 2, borderColor: 'orange', marginVertical: 12 }}>
                <Text style={{ color: 'orange', fontWeight: 'bold', fontSize: 15, }}>Rs.100</Text>
                <Text style={{ color: 'orange', fontWeight: 'bold', fontSize: 15 }}>{product.packagesize}</Text>
            </View>

            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Productdetail</Text>
            <Text style={{ color: 'grey' }}>
               {product.description}
            </Text>

            <Text style={{ fontWeight: 'bold', fontSize: 15, marginVertical: 5 }}>Ingrediants</Text>
            <Text style={{ color: 'grey' }}>
                Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi ut nisi odio. Nulla facilisi.
                Nunc risus massa, gravida id egestas a, pretium vel tellus. Praesent feugiat diam sit amet pulvinar finibus. Etiam et nisi aliquet, accumsan nisi sit.
            </Text>

            <View style={{ flexDirection: 'row',alignItems: 'center',width:'100%' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 15,width:'35%' }}>Expiry date :</Text>
                <Text>20/12/24</Text>
            </View>

            <View style={{ flexDirection: 'row', marginVertical: 20,alignItems: 'center',width:'100%' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 15, width:'35%' }}>Brand name :</Text>
                <Text>abc</Text>
            </View>


        </ScrollView>
    )
}

export default Productdetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,

    }
})