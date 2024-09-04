import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './button';
import { useConvertedIn } from 'react-native-converted-in-sdk';

const Register: React.FC = () => {
  const { registerEvent } = useConvertedIn();

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
