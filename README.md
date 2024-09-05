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

| Prop       | Type   | Required | Description               |
| ---------- | ------ | -------- | ------------------------- |
| `pixelId`  | string | Yes      | Your ConvertedIn pixel ID |
| `storeUrl` | string | Yes      | Your store URL            |

### `useConvertedIn`

Returns an object with the following methods:

| Method                  | Parameters                                                                | Return Type     | Description                                                                                                                                         |
| ----------------------- | ------------------------------------------------------------------------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `isInitialized`         | None                                                                      | `boolean`       | Returns whether the SDK has been initialized.                                                                                                       |
| `initializeSDK`         | `config: { pixelId: string, storeUrl: string }`                           | `Promise<void>` | Initializes the SDK with the provided configuration. Call this as early as possible in your app's lifecycle.                                        |
| `identifyUser`          | `email: string, countryCode: string, phoneNumber: string`                 | `void`          | Identifies a user with their email, country code, and phone number. This helps in tracking user-specific events and improving personalization.      |
| `addEvent`              | `eventName: string, currency: string, total: number, products: Product[]` | `void`          | Adds a custom event with the specified name, currency, total, and products. This allows tracking of specific actions or milestones in your app.     |
| `viewContentEvent`      | `currency: string, total: number, products: Product[]`                    | `void`          | Tracks a view content event when a user views a product or content page. Includes details like currency, total value, and viewed products.          |
| `addToCartEvent`        | `currency: string, total: number, products: Product[]`                    | `void`          | Tracks an add to cart event when a user adds items to their shopping cart. Includes details about the added products, total value, and currency.    |
| `initiateCheckoutEvent` | `currency: string, total: number, products: Product[]`                    | `void`          | Tracks the initiation of the checkout process. This event should be called when a user starts the purchasing process.                               |
| `purchaseEvent`         | `currency: string, total: number, products: Product[]`                    | `void`          | Tracks a completed purchase event. This should be called when a user successfully completes a transaction, including details of purchased products. |
| `registerEvent`         | None                                                                      | `void`          | Tracks a user registration event. This should be called when a new user creates an account in your app.                                             |

### `Product` Interface

| Property   | Type   | Description                           |
| ---------- | ------ | ------------------------------------- |
| `id`       | number | The unique identifier of the product. |
| `quantity` | number | The quantity of the product.          |
| `name`     | string | The name of the product.              |

## Example

Check the `example` folder for a complete implementation example.

> [!NOTE]
> If you encounter an error while installing pods in `example/ios`, please refer to this solution: [https://stackoverflow.com/a/78874710/12355129](https://stackoverflow.com/a/78874710/12355129)

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
     cd example/ios && pod install && cd ../..
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

### Error Handling

If any SDK method is called before initialization, an error will be thrown with the message:

```txt
SDK must be initialized before calling this method.
```

Make sure to initialize the SDK using the `initializeSDK` method before invoking any other SDK methods.

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## Official Documentation

For detailed information and advanced usage, refer to the official ConvertedIn SDK documentation:

- [Android Getting Started Guide](https://developer.converted.in/android/getting-started)
- [iOS Getting Started Guide](https://developer.converted.in/ios/getting-started)

## License

MIT
