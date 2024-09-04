import React from 'react';
import { View, StyleSheet } from 'react-native';
import { initiateCheckoutEvent } from 'react-native-converted-in-sdk';
import Button from './button';

const InitiateCheckoutEvent: React.FC = () => {
  const handleInitiateCheckout = () => {
    const currency = 'USD';
    const total = 100.0;
    const products = [
      {
        id: 1,
        name: 'Sample Product',
        price: 100.0,
        quantity: 1,
      },
    ];

    initiateCheckoutEvent(currency, total, products);
  };

  return (
    <View style={styles.container}>
      <Button title="Initiate Checkout" onPress={handleInitiateCheckout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default InitiateCheckoutEvent;
