import { NativeModules } from 'react-native';

const { ConvertedInSDKModule } = NativeModules;

interface Product {
  id: number;
  quantity: number;
  name: string;
}

let isInitialized = false;

export const __test__ = {
  resetInitialization: () => {
    isInitialized = false;
  },
};

interface SDKConfig {
  pixelId: string;
  storeUrl: string;
}

const checkInitialization = () => {
  if (!isInitialized) {
    throw new Error('SDK must be initialized before calling this method.');
  }
};

export async function initializeSDK(config: SDKConfig): Promise<void> {
  if (isInitialized) {
    console.log('SDK already initialized');
    return;
  }
  await NativeModules.ConvertedInSDKModule.initializeSDK(config);
  console.log('SDK Initialized Successfully');
  isInitialized = true;
}

export function identifyUser(
  email: string,
  countryCode: string,
  phoneNumber: string
): void {
  checkInitialization();
  NativeModules.ConvertedInSDKModule.identifyUser(
    email,
    countryCode,
    phoneNumber
  );
}

export function addEvent(
  eventName: string,
  currency: string,
  total: number,
  products: Product[]
): void {
  checkInitialization();
  NativeModules.ConvertedInSDKModule.addEvent(
    eventName,
    currency,
    total,
    products
  );
}

export const viewContentEvent = (
  currency: string,
  total: number,
  products: Product[]
) => {
  checkInitialization();
  ConvertedInSDKModule.viewContentEvent(currency, total, products);
};

export const addToCartEvent = (
  currency: string,
  total: number,
  products: Product[]
) => {
  checkInitialization();
  ConvertedInSDKModule.addToCartEvent(currency, total, products);
};

export const initiateCheckoutEvent = (
  currency: string,
  total: number,
  products: Product[]
) => {
  checkInitialization();
  ConvertedInSDKModule.initiateCheckoutEvent(currency, total, products);
};

export const purchaseEvent = (
  currency: string,
  total: number,
  products: Product[]
) => {
  checkInitialization();
  ConvertedInSDKModule.purchaseEvent(currency, total, products);
};

export const registerEvent = () => {
  checkInitialization();
  ConvertedInSDKModule.registerEvent();
};
