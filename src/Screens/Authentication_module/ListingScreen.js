import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import Star from 'react-native-vector-icons/Feather';
import Back from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

const ListingScreen = ({ route, navigation }) => {
  const { categoryName } = route.params;
  console.log(categoryName);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://online-medicine-app-backend.vercel.app/api/products/view/category/${categoryName}`
        );
        console.log(response.data);
        setData(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [categoryName]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('detailscreen', { product: item });
      }}
      style={styles.cartContainer}>
      <View style={styles.cartimg}>
        <Image
          source={{ uri: item.image }}
          style={{ height: '100%', width: '100%', borderRadius: 10 }}
        />
      </View>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.brandName}>{item.brandname}</Text>
      <View style={styles.priceRow}>
        <Text style={styles.price}>Rs {item.price}</Text>
        <View style={styles.ratingContainer}>
          <Star name="star" size={18} color="white" />
          <Text style={styles.rating}>4.2</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            navigation.goBack();
          }}>
          <Back name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{categoryName} Care</Text>
      </View>
      <Text style={styles.sectionTitle}>All Products</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item) => item._id}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
      />
    </View>
  );
};

export default ListingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding:10
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  backButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
  },
  headerTitle: {
    marginLeft: 10,
    fontSize: 19,
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 17,
    marginVertical: 15,
    marginLeft: 13,
    fontWeight: '500',
  },
  cartContainer: {
    backgroundColor: '#F3F4F5',
    margin: 8,
    borderRadius: 10,
    flex: 1,
    padding: 10,
  },
  cartimg: {
    height: 120,
    borderRadius: 10,
  },
  productName: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: '500',
    color: '#090F47',
  },
  brandName: {
    fontSize: 12,
    color: '#7E7E7E',
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  price: {
    fontSize: 15,
    fontWeight: '500',
    color: '#090F47',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFC000',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 12,
  },
  rating: {
    marginLeft: 5,
    color: 'white',
    fontWeight: 'bold',
  },
});
