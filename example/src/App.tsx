import { ActivityIndicator, StyleSheet, View } from 'react-native';
import {
  RNConvertInSDKProvider,
  useConvertedInSdk,
} from 'react-native-converted-in-sdk';
import AddToCart from './components/add-to-cart';
import CustomEventOpenApp from './components/custom-event-open-app';
import IdentifyUser from './components/identify-user';
import InitiateCheckoutEvent from './components/initiate-checkout';
import PurchaseEvent from './components/purchase';
import Register from './components/register';
import ViewContent from './components/view-content';

const AppContent: React.FC = () => {
  const { isInitialized } = useConvertedInSdk();

  if (!isInitialized) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={styles.container}>
      <Register />
      <IdentifyUser />
      <ViewContent />
      <AddToCart />
      <CustomEventOpenApp />
      <InitiateCheckoutEvent />
      <PurchaseEvent />
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
