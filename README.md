# react-native-converted-in-sdk

A React Native SDK for ConvertedIn, providing easy integration of ConvertedIn's tracking and analytics features into your React Native application.

## Installation

Install the package using npm:

```bash
npm install react-native-converted-in-sdk
```

Or with yarn:

```bash
yarn add react-native-converted-in-sdk
```

## Usage

1. **Wrap your app with `RNConvertInSDKProvider`:**

```jsx
export default function App() {
  return (
    <RNConvertInSDKProvider
      pixelId="your_pixel_id"
      storeUrl="your_store_url"
    >
      <AppContent />
    </RNConvertInSDKProvider>
  );
}
```

2. **Use the `useConvertedIn` hook in your components:**

```jsx
import { useConvertedIn } from 'react-native-converted-in-sdk';

const AppContent = () => {
  const { initializeSDK } = useConvertedIn();

  React.useEffect(() => {
    // Example usage of SDK functions
    initializeSDK();
  }, [initializeSDK]);

  // Your component logic here
};
```

## API Reference

### `RNConvertInSDKProvider`

| Prop | Type | Required |
|------|------|----------|
| `pixelId` | string | Yes |
| `storeUrl` | string | Yes |

### `useConvertedIn`

Returns an object with the following methods:

| Method | Parameters | Return Type |
|--------|------------|-------------|
| `initializeSDK` | None | `Promise<void>` |
| `identifyUser` | `email: string, countryCode: string, phone: string` | `void` |
| `addEvent` | `name: string, currency: string, total: number, products: Product[]` | `void` |
| `viewContentEvent` | `currency: string, total: number, products: Product[]` | `void` |
| `addToCartEvent` | `currency: string, total: number, products: Product[]` | `void` |
| `initiateCheckoutEvent` | `currency: string, total: number, products: Product[]` | `void` |
| `purchaseEvent` | `currency: string, total: number, products: Product[]` | `void` |
| `registerEvent` | None | `void` |

### `Product` Interface

| Property | Type |
|----------|------|
| `id` | number |
| `quantity` | number |
| `name` | string |

## Example

Check the `example` folder for a complete implementation example.

## Development

To develop the SDK locally:

1. Clone the repository
2. Ensure you have the following environment set up:
   - Node.js version 18 or higher.
   - Yarn version 3 or higher; the version fixed with the project is 3.6.1.
   - Java 17 or higher.
   - For iOS development: Xcode 12.0 or higher.
   - For Android development: Android Studio 4.0 or higher.

3. Install dependencies:

   ```bash
   yarn install
   ```

4. Run the example app:

   - iOS:

     ```bash
     cd example/ios && pod install && cd ..
     yarn example ios
     ```

   - Android:

     ```bash
     yarn example android
     ```

## Testing

Run tests with:

```bash
yarn test
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## Official Documentation

For detailed information and advanced usage, refer to the official ConvertedIn SDK documentation:

- [Android Getting Started Guide](https://developer.converted.in/android/getting-started)
- [iOS Getting Started Guide](https://developer.converted.in/ios/getting-started)

## License

MIT
