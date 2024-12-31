import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 

const CheckoutScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={30} color="#000" /> 
        </TouchableOpacity>
        <Text style={styles.headerText}>Checkout</Text>
      </View>

      <View style={styles.cartInfo}>
        <Text style={styles.itemsText}>2 Items in your cart</Text>
        <View style={styles.totalSection}>
          <Text style={styles.totalText}>TOTAL</Text>
          <Text style={styles.totalAmountText}>Rs.185.00</Text>
        </View>
      </View>

      
      <TouchableOpacity style={styles.payButton}>
        <Text style={styles.payButtonText}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 10, 
  },
  cartInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginVertical: 20,
  },
  itemsText: {
    fontSize: 16,
    color: '#6e6e6e',
  },
  totalSection: {
    alignItems: 'flex-end',
  },
  totalText: {
    fontSize: 16,
    color: '#6e6e6e',
  },
  totalAmountText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  payButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#3366ff',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  payButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CheckoutScreen;
