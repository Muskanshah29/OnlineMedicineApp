import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';
import React from 'react';
import Star from 'react-native-vector-icons/Feather';
import Back from 'react-native-vector-icons/Ionicons';

const ListingScreen = () => {
  const data = [
    { id: 1, name: 'item1' },
    { id: 2, name: 'item1' },
    { id: 3, name: 'item1' },
  ];
  
  const data1 = [
    { id: 1, name: 'item1' },
    { id: 2, name: 'item1' },
    { id: 3, name: 'item1' },
    { id: 4, name: 'item1' },
    { id: 5, name: 'item1' },
    { id: 6, name: 'item1' }
  ];

  const renderItem1 = () => (
    <View style={styles.cartContainer1}>
      <View style={styles.cartimg1}>
        <Image
          source={require('../../Asset/Image/Mask.png')}
          style={{ height: '90%', width: '100%', alignSelf: 'center' }}
        />
      </View>
      <Text style={{ marginLeft: 10, color: '#090F47' }}>Sugar</Text>
      <Text style={{ marginLeft: 10, color: '#090F47' }}>Substitute</Text>
    </View>
  );

  const renderItem = () => (
    <View style={styles.cartContainer}>
      <View style={styles.cartimg}>
        <Image
          source={require('../../Asset/Image/product.png')}
          style={{ height: '90%', width: '50%', alignSelf: 'center' }}
        />
      </View>
      <Text style={{ marginLeft: 10, color: '#090F47' }}>Accu-check Active</Text>
      <Text style={{ marginLeft: 10, color: '#090F47' }}>Test Strip</Text>

      <View style={{ flexDirection: 'row', width: '100%' }}>
        <Text style={{ width: '60%', fontSize: 15, fontWeight: '500', marginLeft: 10 }}>rs 112</Text>
        <View style={{
          backgroundColor: '#FFC000', width: '36%', flexDirection: 'row',
          justifyContent: 'space-between', padding: 4,
          borderTopLeftRadius: 20, borderBottomLeftRadius: 20
        }}>
          <Star name='star' size={22} color='white' />
          <Text style={{ color: 'white', fontWeight: 'bold' }}>4.2</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', padding: 5 }}>
        <TouchableOpacity>
          <Back
            name="arrow-back"
            size={29}
            color='black'
            style={{ padding: 5 }}
          />
        </TouchableOpacity>
        <Text style={{ marginLeft: 10, padding: 7, fontSize: 19, fontWeight: '500' }}>Diabetes Care</Text>
      </View>
      <Text style={{ marginLeft: 15, fontSize: 15, fontWeight: '500' }}>Categories</Text>
      <FlatList
        data={data}
        renderItem={renderItem1}
        horizontal={true} 
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false} 
      />
      <Text style={{ fontSize: 17,marginTop:15,marginLeft:13, fontWeight: '500' }}>All Products</Text>
      <FlatList
        data={data1}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
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
