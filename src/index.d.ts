declare module 'react-native-converted-in-sdk' {
  import { ReactNode } from 'react';

  interface Product {
    id: number;
    quantity: number;
    name: string;
  }

  interface InitSDKOptions {
    pixelId: string;
    storeUrl: string;
  }

  interface RNConvertInSDKContextType {
    isInitialized: boolean;
    initializeSDK: () => Promise<void>;
    identifyUser: (email: string, countryCode: string, phone: string) => void;
    addEvent: (
      name: string,
      currency: string,
      total: number,
      products: Product[]
    ) => void;
    viewContentEvent: (
      currency: string,
      total: number,
      products: Product[]
    ) => void;
    addToCartEvent: (
      currency: string,
      total: number,
      products: Product[]
    ) => void;
    initiateCheckoutEvent: (
      currency: string,
      total: number,
      products: Product[]
    ) => void;
    purchaseEvent: (
      currency: string,
      total: number,
      products: Product[]
    ) => void;
    registerEvent: () => void;
  }

  interface RNConvertInSDKProviderProps {
    children: ReactNode;
    pixelId: string;
    storeUrl: string;
  }

  export function initializeSDK(config: InitSDKOptions): Promise<void>;
  export function identifyUser(
    email: string,
    countryCode: string,
    phoneNumber: string
  ): void;
  export function addEvent(
    eventName: string,
    currency: string,
    total: number,
    products: Product[]
  ): void;
  export function viewContentEvent(
    currency: string,
    total: number,
    products: Product[]
  ): void;
  export function addToCartEvent(
    currency: string,
    total: number,
    products: Product[]
  ): void;
  export function initiateCheckoutEvent(
    currency: string,
    total: number,
    products: Product[]
  ): void;
  export function purchaseEvent(
    currency: string,
    total: number,
    products: Product[]
  ): void;
  export function registerEvent(): void;

  export const RNConvertInSDKProvider: React.FC<RNConvertInSDKProviderProps>;
  export function useConvertedInSdk(): RNConvertInSDKContextType;
}
