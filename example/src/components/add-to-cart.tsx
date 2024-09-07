import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './button';
import { useConvertedInSdk } from 'react-native-converted-in-sdk';

const AddToCart: React.FC = () => {
  const { addToCartEvent } = useConvertedInSdk();

  const handleAddToCart = () => {
    const currency = 'USD';
    const total = 99.99;
    const products = [
      {
        id: 123,
        quantity: 1,
        name: 'Sample Product',
      },
    ];
    addToCartEvent(currency, total, products);
  };

  return (
    <View style={styles.container}>
      <Button title="Add to Cart" onPress={handleAddToCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default AddToCart;
