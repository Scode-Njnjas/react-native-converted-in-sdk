declare module 'react-native-converted-in-sdk' {
  export interface Product {
    id: number;
    quantity: number;
    name: string;
  }

  export function initializeSDK(pixelId: string, storeUrl: string): Promise<void>;
  export function identifyUser(email: string, countryCode: string, phone: string): void;
  export function addEvent(name: string, location: string, date: number): void;
  export function viewContentEvent(currency: string, total: number, products: Product[]): void;
  export function addToCartEvent(currency: string, total: number, products: Product[]): void;
  export function initiateCheckoutEvent(currency: string, total: number, products: Product[]): void;
  export function purchaseEvent(currency: string, total: number, products: Product[]): void;
  export function registerEvent(): void;
}
