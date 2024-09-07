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

interface InitSDKOptions {
  pixelId: string;
  storeUrl: string;
}

const checkInitialization = () => {
  if (!isInitialized) {
    throw new Error('SDK must be initialized before calling this method.');
  }
};

export async function initializeSDK(config: InitSDKOptions): Promise<void> {
  if (isInitialized) {
    console.log('🔄 SDK already initialized');
    return;
  }
  await NativeModules.ConvertedInSDKModule.initializeSDK(config);
  console.info('✅ ConvertedInSDK Initialized Successfully');
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
  console.info('✅ User Identified Successfully');
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
  console.info('✅ Event Added Successfully');
}

export const viewContentEvent = (
  currency: string,
  total: number,
  products: Product[]
) => {
  checkInitialization();
  ConvertedInSDKModule.viewContentEvent(currency, total, products);
  console.info('✅ View Content Event Added Successfully');
};

export const addToCartEvent = (
  currency: string,
  total: number,
  products: Product[]
) => {
  checkInitialization();
  ConvertedInSDKModule.addToCartEvent(currency, total, products);
  console.info('✅ Add To Cart Event Added Successfully');
};

export const initiateCheckoutEvent = (
  currency: string,
  total: number,
  products: Product[]
) => {
  checkInitialization();
  ConvertedInSDKModule.initiateCheckoutEvent(currency, total, products);
  console.info('✅ Initiate Checkout Event Added Successfully');
};

export const purchaseEvent = (
  currency: string,
  total: number,
  products: Product[]
) => {
  checkInitialization();
  ConvertedInSDKModule.purchaseEvent(currency, total, products);
  console.info('✅ Purchase Event Added Successfully');
};

export const registerEvent = () => {
  checkInitialization();
  ConvertedInSDKModule.registerEvent();
  console.info('✅ Register Event Added Successfully');
};
