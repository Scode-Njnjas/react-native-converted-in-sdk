import React, { createContext, useEffect } from 'react';
import type { ReactNode } from 'react';
import {
  initializeSDK,
  identifyUser,
  addEvent,
  viewContentEvent,
  addToCartEvent,
  initiateCheckoutEvent,
  purchaseEvent,
  registerEvent,
} from '../RNConvertedInSdkModule';

interface RNConvertInSDKProps {
  children: ReactNode;
  pixelId: string;
  storeUrl: string;
}

interface RNConvertInSDKType {
  initializeSDK: () => Promise<void>;
  identifyUser: (email: string, countryCode: string, phone: string) => void;
  addEvent: (
    name: string,
    currency: string,
    total: number,
    products: any[]
  ) => void;
  viewContentEvent: (currency: string, total: number, products: any[]) => void;
  addToCartEvent: (currency: string, total: number, products: any[]) => void;
  initiateCheckoutEvent: (
    currency: string,
    total: number,
    products: any[]
  ) => void;
  purchaseEvent: (currency: string, total: number, products: any[]) => void;
  registerEvent: () => void;
}

export const RNConvertInSDK = createContext<RNConvertInSDKType | undefined>(
  undefined
);

export const RNConvertInSDKProvider: React.FC<RNConvertInSDKProps> = ({
  children,
  pixelId,
  storeUrl,
}) => {
  if (!pixelId || !storeUrl) {
    throw new Error(
      'Both pixelId and storeUrl must be provided to initialize the SDK'
    );
  }

  const sdkFunctions = {
    initializeSDK: () => initializeSDK({ pixelId, storeUrl }),
    identifyUser,
    addEvent,
    viewContentEvent,
    addToCartEvent,
    initiateCheckoutEvent,
    purchaseEvent,
    registerEvent,
  };

  // Effect to initialize SDK on mount
  useEffect(() => {
    sdkFunctions.initializeSDK();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <RNConvertInSDK.Provider value={sdkFunctions}>
      {children}
    </RNConvertInSDK.Provider>
  );
};
