import { useContext } from 'react';
import { RNConvertInSDK } from '../context/RNConvertedInSdkProvider';

export const useConvertedIn = () => {
  const context = useContext(RNConvertInSDK);

  if (!context) {
    throw new Error('useConvertedIn must be used within a ConvertedInProvider');
  }

  return {
    initializeSDK: context.initializeSDK,
    identifyUser: context.identifyUser,
    addEvent: context.addEvent,
    viewContentEvent: context.viewContentEvent,
    addToCartEvent: context.addToCartEvent,
    initiateCheckoutEvent: context.initiateCheckoutEvent,
    purchaseEvent: context.purchaseEvent,
    registerEvent: context.registerEvent,
  };
};
