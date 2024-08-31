import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './button';
import { useConvertedIn } from 'react-native-converted-in-sdk';

const IdentifyUser: React.FC = () => {
  const { identifyUser } = useConvertedIn();

  const handleIdentifyUser = () => {
    const email = 'user@example.com';
    const countryCode = '+1';
    const phone = '1234567890';
    identifyUser(email, countryCode, phone);
  };

  return (
    <View style={styles.container}>
      <Button title="Identify User" onPress={handleIdentifyUser} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default IdentifyUser;
