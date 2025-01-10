import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react';
import Back from 'react-native-vector-icons/Ionicons';
import Plus from 'react-native-vector-icons/AntDesign';

const Productdetail = ({ route, navigation }) => {
  const { product } = route.params;

  return (
    <ScrollView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Back name="arrow-back" size={26} color="white" />
      </TouchableOpacity>

      {/* Product Name */}
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.subtitle}>Explore product details below.</Text>

      {/* Product Image */}
      <Image
        source={{ uri: product.image }}
        style={styles.productImage}
      />

      {/* Price and Add to Cart */}
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>Rs. {product.price}</Text>
        {/* <TouchableOpacity style={styles.addToCart}
          onPress={() => {
            
            navigation.navigate('cart')
          }}>
          <Plus name="plus" size={20} color="blue" style={styles.plusIcon} />
          <Text style={styles.addToCartText}>Add to cart</Text>
        </TouchableOpacity> */}

        <TouchableOpacity
          style={styles.addToCart}
          onPress={async () => {
            try {
              const response = await fetch('https://online-medicine-app-backend.vercel.app/api/cart/add-to-cart', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  productId: product._id,
                  quantity: 1, // Adjust as needed
                }),
              });

              const result = await response.json();
              if (response.ok) {
                console.log('Product added to cart:', result);
                // Navigate to the cart screen
                navigation.navigate('cart');
              } else {
                console.error('Failed to add product to cart:', result.message);
                alert('Failed to add the product to the cart.');
              }
            } catch (error) {
              console.error('Error adding product to cart:', error);
              alert('An error occurred. Please try again.');
            }
          }}>
          <Plus name="plus" size={20} color="blue" style={styles.plusIcon} />
          <Text style={styles.addToCartText}>Add to cart</Text>
        </TouchableOpacity>


      </View>

      {/* Package Size */}
      <Text style={styles.sectionTitle}>Package Size</Text>
      <View style={styles.packageContainer}>
        <Text style={styles.packagePrice}>Rs. {product.price}</Text>
        <Text style={styles.packageSize}>{product.packagesize || 'Not available'}</Text>
      </View>

      {/* Product Details */}
      <Text style={styles.sectionTitle}>Product Details</Text>
      <Text style={styles.description}>{product.description}</Text>

      {/* Ingredients */}
      <Text style={styles.sectionTitle}>Ingredients</Text>
      <Text style={styles.description}>
        {product.ingredient || 'Ingredients data not available.'}
      </Text>

      {/* Expiry Date */}
      <View style={styles.infoRow}>
        <Text style={styles.infoTitle}>Expiry date:</Text>
        <Text>{product.expiryDate || 'Not specified'}</Text>
      </View>

      {/* Brand Name */}
      <View style={styles.infoRow}>
        <Text style={styles.infoTitle}>Brand name:</Text>
        <Text>{product.brandname || 'Not available'}</Text>
      </View>
    </ScrollView>
  );
};

export default Productdetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white',
  },
  backButton: {
    marginBottom: 15,
    alignSelf: 'flex-start',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10
  },
  productName: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  subtitle: {
    color: 'grey',
    marginBottom: 10,
  },
  productImage: {
    borderWidth: 1,
    alignSelf: 'center',
    width: '100%',
    height: 250,
    marginVertical: 10,
    resizeMode: 'contain',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  addToCart: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  plusIcon: {
    borderWidth: 1.5,
    borderRadius: 4,
    borderColor: 'blue',
    padding: 2,
    marginRight: 5,
  },
  addToCartText: {
    color: 'blue',
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    marginVertical: 10,
  },
  packageContainer: {
    backgroundColor: '#F5F5F5',
    width: 140,
    padding: 10,
    borderWidth: 2,
    borderColor: 'orange',
    marginVertical: 10,
    alignItems: 'center',
  },
  packagePrice: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 15,
  },
  packageSize: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 5,
  },
  description: {
    color: 'grey',
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  infoTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    width: '35%',
  },
});
