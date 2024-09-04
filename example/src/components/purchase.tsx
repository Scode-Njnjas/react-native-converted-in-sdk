import React from 'react';
import { View, StyleSheet } from 'react-native';
import { purchaseEvent } from 'react-native-converted-in-sdk';
import Button from './button';

const PurchaseEvent: React.FC = () => {
  const handlePurchase = () => {
    const currency = 'USD';
    const total = 150.0;
    const products = [
      {
        id: 1,
        name: 'Product A',
        price: 100.0,
        quantity: 1,
      },
      {
        id: 2,
        name: 'Product B',
        price: 25.0,
        quantity: 2,
      },
    ];

    purchaseEvent(currency, total, products);
  };

  return (
    <View style={styles.container}>
      <Button title="Complete Purchase" onPress={handlePurchase} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default PurchaseEvent;
