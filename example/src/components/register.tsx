import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './button';
import { useConvertedInSdk } from 'react-native-converted-in-sdk';

const Register: React.FC = () => {
  const { registerEvent } = useConvertedInSdk();

  const handleRegister = () => {
    registerEvent();
  };

  return (
    <View style={styles.container}>
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default Register;
