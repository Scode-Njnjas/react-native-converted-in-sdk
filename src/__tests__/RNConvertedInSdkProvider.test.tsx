import { render, waitFor } from '@testing-library/react-native';
import React from 'react';
import {
  RNConvertInSDK,
  RNConvertInSDKProvider,
} from '../context/RNConvertedInSdkProvider';
import * as RNConvertedInSdkModule from '../RNConvertedInSdkModule';
import type { RNConvertInSDKContextType } from '../context/RNConvertedInSdkProvider';

jest.mock('../RNConvertedInSdkModule', () => ({
  initializeSDK: jest.fn(),
  identifyUser: jest.fn(),
  addEvent: jest.fn(),
  viewContentEvent: jest.fn(),
  addToCartEvent: jest.fn(),
  initiateCheckoutEvent: jest.fn(),
  purchaseEvent: jest.fn(),
  registerEvent: jest.fn(),
}));

describe('RNConvertInSDKProvider', () => {
  const mockPixelId = 'test-pixel-id';
  const mockStoreUrl = 'https://test-store.com';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('initializes SDK on mount', async () => {
    await waitFor(() => {
      render(
        <RNConvertInSDKProvider pixelId={mockPixelId} storeUrl={mockStoreUrl}>
          <></>
        </RNConvertInSDKProvider>
      );
    });

    expect(RNConvertedInSdkModule.initializeSDK).toHaveBeenCalledWith({
      pixelId: mockPixelId,
      storeUrl: mockStoreUrl,
    });
  });

  it('throws error if pixelId or storeUrl is not provided', () => {
    const originalConsoleError = console.error;
    console.error = jest.fn();

    expect(() => {
      render(
        <RNConvertInSDKProvider pixelId="" storeUrl={mockStoreUrl}>
          <></>
        </RNConvertInSDKProvider>
      );
    }).toThrow(
      'Both pixelId and storeUrl must be provided to initialize the SDK'
    );

    expect(() => {
      render(
        <RNConvertInSDKProvider pixelId={mockPixelId} storeUrl="">
          <></>
        </RNConvertInSDKProvider>
      );
    }).toThrow(
      'Both pixelId and storeUrl must be provided to initialize the SDK'
    );

    console.error = originalConsoleError;
  });

  it('provides SDK functions through context', async () => {
    let contextValue: RNConvertInSDKContextType | undefined;
    const TestComponent = () => {
      contextValue = React.useContext(RNConvertInSDK);
      return null;
    };

    await waitFor(() => {
      render(
        <RNConvertInSDKProvider pixelId={mockPixelId} storeUrl={mockStoreUrl}>
          <TestComponent />
        </RNConvertInSDKProvider>
      );
    });

    expect(contextValue).toBeDefined();
    expect(contextValue?.isInitialized).toBe(true);
    expect(typeof contextValue?.initializeSDK).toBe('function');
    expect(typeof contextValue?.identifyUser).toBe('function');
    expect(typeof contextValue?.addEvent).toBe('function');
    expect(typeof contextValue?.viewContentEvent).toBe('function');
    expect(typeof contextValue?.addToCartEvent).toBe('function');
    expect(typeof contextValue?.initiateCheckoutEvent).toBe('function');
    expect(typeof contextValue?.purchaseEvent).toBe('function');
    expect(typeof contextValue?.registerEvent).toBe('function');
  });
});
