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
  if (!isInitialized) {
    throw new Error('SDK must be initialized before calling this method.');
  }
  NativeModules.ConvertedInSDKModule.identifyUser(
    email,
    countryCode,
    phoneNumber
  );
}

// Apply similar checks to other methods
export function addEvent(
  eventName: string,
  currency: string,
  value: number,
  products: Product[]
): void {
  if (!isInitialized) {
    throw new Error('SDK must be initialized before calling this method.');
  }
  NativeModules.ConvertedInSDKModule.addEvent(
    eventName,
    currency,
    value,
    products
  );
}

export const viewContentEvent = (
  currency: string,
  total: number,
  products: Product[]
) => {
  if (!isInitialized) {
    throw new Error('SDK must be initialized before calling this method.');
  }
  ConvertedInSDKModule.viewContentEvent(currency, total, products);
};

export const addToCartEvent = (
  currency: string,
  total: number,
  products: Product[]
) => {
  if (!isInitialized) {
    throw new Error('SDK must be initialized before calling this method.');
  }
  ConvertedInSDKModule.addToCartEvent(currency, total, products);
};

export const initiateCheckoutEvent = (
  currency: string,
  total: number,
  products: Product[]
) => {
  if (!isInitialized) {
    throw new Error('SDK must be initialized before calling this method.');
  }
  ConvertedInSDKModule.initiateCheckoutEvent(currency, total, products);
};

export const purchaseEvent = (
  currency: string,
  total: number,
  products: Product[]
) => {
  if (!isInitialized) {
    throw new Error('SDK must be initialized before calling this method.');
  }
  ConvertedInSDKModule.purchaseEvent(currency, total, products);
};

export const registerEvent = () => {
  if (!isInitialized) {
    throw new Error('SDK must be initialized before calling this method.');
  }
  ConvertedInSDKModule.registerEvent();
};
