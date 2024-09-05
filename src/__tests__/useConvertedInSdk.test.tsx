// @ts-ignore
import * as React from 'react';
import { act, renderHook } from '@testing-library/react-hooks/native';
import { RNConvertInSDKProvider } from '../context/RNConvertedInSdkProvider';
import { useConvertedIn } from '../hooks/useConvertedInSdk';

jest.mock('../../src/RNConvertedInSdkModule', () => ({
  initializeSDK: jest.fn(),
  identifyUser: jest.fn(),
  addEvent: jest.fn(),
  viewContentEvent: jest.fn(),
  addToCartEvent: jest.fn(),
  initiateCheckoutEvent: jest.fn(),
  purchaseEvent: jest.fn(),
  registerEvent: jest.fn(),
}));

describe('useConvertedIn', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should throw an error when used outside of RNConvertInSDKProvider', () => {
    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    const { result } = renderHook(() => useConvertedIn());

    expect(result.error).toEqual(
      Error('useConvertedIn must be used within a ConvertedInProvider')
    );

    consoleErrorSpy.mockRestore();
  });

  it('should return all SDK functions when used within RNConvertInSDKProvider', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <RNConvertInSDKProvider
        pixelId="test-pixel-id"
        storeUrl="https://test-store.com"
      >
        {children}
      </RNConvertInSDKProvider>
    );

    const { result } = renderHook(() => useConvertedIn(), { wrapper });

    await act(async () => {
      await result.current.initializeSDK();
    });

    expect(result.current).toHaveProperty('initializeSDK');
    expect(result.current).toHaveProperty('identifyUser');
    expect(result.current).toHaveProperty('addEvent');
    expect(result.current).toHaveProperty('viewContentEvent');
    expect(result.current).toHaveProperty('addToCartEvent');
    expect(result.current).toHaveProperty('initiateCheckoutEvent');
    expect(result.current).toHaveProperty('purchaseEvent');
    expect(result.current).toHaveProperty('registerEvent');
  });
});
