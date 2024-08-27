import {NativeModules} from 'react-native';

const {ConvertedInSDKModule} = NativeModules;

interface Product {
  id: number;
  quantity: number;
  name: string;
}

let isInitialized = false;

export const initializeSDK = (pixelId: string, storeUrl: string) => {
  ConvertedInSDKModule.initializeSDK(pixelId, storeUrl)
    .then(() => {
      isInitialized = true;
      console.log('SDK Initialized Successfully');
    })
    .catch((error: any) => {
      console.error('Failed to initialize SDK:', error);
    });
};

const checkInitialization = () => {
  if (!isInitialized) {
    throw new Error('SDK must be initialized before calling this method.');
  }
};

export const identifyUser = (
  email: string,
  countryCode: string,
  phone: string,
) => {
  checkInitialization();
  ConvertedInSDKModule.identifyUser(email, countryCode, phone);
};

export const addEvent = (name: string, location: string, date: number) => {
  checkInitialization();
  ConvertedInSDKModule.addEvent(name, location, date);
};

export const viewContentEvent = (
  currency: string,
  total: number,
  products: Product[],
) => {
  checkInitialization();
  ConvertedInSDKModule.viewContentEvent(currency, total, products);
};

export const addToCartEvent = (
  currency: string,
  total: number,
  products: Product[],
) => {
  checkInitialization();
  ConvertedInSDKModule.addToCartEvent(currency, total, products);
};

export const initiateCheckoutEvent = (
  currency: string,
  total: number,
  products: Product[],
) => {
  checkInitialization();
  ConvertedInSDKModule.initiateCheckoutEvent(currency, total, products);
};

export const purchaseEvent = (
  currency: string,
  total: number,
  products: Product[],
) => {
  checkInitialization();
  ConvertedInSDKModule.purchaseEvent(currency, total, products);
};

export const registerEvent = () => {
  checkInitialization();
  ConvertedInSDKModule.registerEvent();
};
