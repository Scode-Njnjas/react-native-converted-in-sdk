import React, { useCallback, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './button';
import { useConvertedIn } from 'react-native-converted-in-sdk';

const CustomEventOpenApp: React.FC = () => {
  const { addEvent } = useConvertedIn();

  const handleAppOpened = useCallback(() => {
    const eventName = 'app_opened';
    const location = 'app';
    addEvent(eventName, location, 0, []);
  }, [addEvent]);

  const handleButtonPress = () => {
    handleAppOpened();
  };

  useEffect(() => {
    handleAppOpened();
  }, [handleAppOpened]);

  return (
    <View style={styles.container}>
      <Button title="Simulate App Open" onPress={handleButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default CustomEventOpenApp;
