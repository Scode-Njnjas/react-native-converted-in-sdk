import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import {
  RNConvertInSDKProvider,
  useConvertedIn,
} from 'react-native-converted-in-sdk';
import AddToCart from './components/add-to-cart';
import CustomEventOpenApp from './components/custom-event-open-app';
import IdentifyUser from './components/identify-user';
import ViewContent from './components/view-content';

const AppContent = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const { initializeSDK } = useConvertedIn();

  useEffect(() => {
    let isMounted = true;

    const initialize = async () => {
      if (!isInitialized) {
        try {
          await initializeSDK();
          if (isMounted) {
            setIsInitialized(true);
          }
        } catch (error) {
          console.error('Failed to initialize SDK:', error);
        }
      }
    };

    initialize();

    return () => {
      isMounted = false;
    };
  }, [initializeSDK, isInitialized]);

  if (!isInitialized) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={styles.container}>
      <IdentifyUser />
      <ViewContent />
      <AddToCart />
      <CustomEventOpenApp />
    </View>
  );
};

export default function App() {
  return (
    <RNConvertInSDKProvider
      pixelId="6QbJeyFtVXHym36o839rSb3Dn0HePs"
      storeUrl="https://www.scodenjnja.store"
    >
      <AppContent />
    </RNConvertInSDKProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
