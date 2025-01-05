import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Star from 'react-native-vector-icons/Feather';
import Back from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
const ListingScreen = ({route,navigation}) => {

  const{categoryName}=route.params;
  console.log(categoryName)
  const[data,setData]=useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://online-medicine-app-backend.vercel.app/api/products/view/category/${categoryName}`);
        console.log(response.data);
        setData(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [categoryName]);

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => {
      navigation.navigate('detailscreen', { product: item });
    }}
    
      >
    <View style={styles.cartContainer}>
      <View style={styles.cartimg}>
        <Image
          source={{uri:item.image}}
          style={{ height: '100%', width: '100%', alignSelf: 'center' }}
        />
      </View>
      <Text style={{ marginLeft: 10, color: '#090F47' }}>{item.name}</Text>
      <Text style={{ marginLeft: 10, color: '#090F47' }}>{item.brandname}</Text>

      <View style={{ flexDirection: 'row', width: '100%' }}>
        <Text style={{ width: '60%', fontSize: 15, fontWeight: '500', marginLeft: 10 }}>rs {item.price}</Text>
        <View style={{
          backgroundColor: '#FFC000', width: '36%', flexDirection: 'row',
          justifyContent: 'space-between', padding: 4,
          borderTopLeftRadius: 20, borderBottomLeftRadius: 20
        }}>
          <Star name='star' size={22} color='white' />
          <Text style={{ color: 'white', fontWeight: 'bold' }}>4.2</Text>
        </View>
      </View>
    </View></TouchableOpacity>
  );


  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', padding: 10,alignItems:'center' }}>
        <TouchableOpacity style={{backgroundColor:'blue',padding:5,borderRadius:10}} onPress={()=>{
          navigation.goBack();
        }}>
          <Back
            name="arrow-back"
            size={29}
            color='white'
            style={{ padding: 5 }}
          />
        </TouchableOpacity>
        <Text style={{ marginLeft: 10, padding: 7, fontSize: 19, fontWeight: '500' }}>{categoryName} Care</Text>
      </View>
     
      <Text style={{ fontSize: 17,marginTop:15,marginLeft:13, fontWeight: '500' }}>All Products</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ListingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 10
  },
  cartContainer: {
    backgroundColor: '#F3F4F5',
    margin: 10,
    padding: 5,
    borderRadius: 10,
    flex: 1,
  },
  cartimg: {
    height: 120,
    borderRadius: 20,
  },
  cartContainer1: {
    backgroundColor: '#F3F4F5',
    margin: 10,
    padding: 5,
    borderRadius: 15,
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center',
    height: 180,
    width: 120,
  },
  cartimg1: {
    borderRadius: 20,
    height: '50%',
    width: '90%',
  },
});
