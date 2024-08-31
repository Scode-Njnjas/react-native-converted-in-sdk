import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './button';
import { useConvertedIn } from 'react-native-converted-in-sdk';

const ViewContent: React.FC = () => {
  const { viewContentEvent } = useConvertedIn();

  const handleViewContent = () => {
    const currency = 'USD';
    const total = 99.99;
    const products = [
      {
        id: 123,
        quantity: 1,
        name: 'Sample Product',
      },
    ];
    viewContentEvent(currency, total, products);
  };

  return (
    <View style={styles.container}>
      <Button title="View Content" onPress={handleViewContent} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default ViewContent;
