// @ts-ignore
import * as React from 'react';
import { render } from '@testing-library/react-native';
import { RNConvertInSDKProvider } from '../../src/context/RNConvertedInSdkProvider';
import * as RNConvertedInSdkModule from '../../src/RNConvertedInSdkModule';

jest.mock('../../src/RNConvertedInSdkModule', () => ({
  initializeSDK: jest.fn(),
}));

describe('RNConvertInSDKProvider', () => {
  it('should throw an error if pixelId or storeUrl is not provided', () => {
    console.error = jest.fn(); // Suppress console.error for this test
    expect(() =>
      render(
        <RNConvertInSDKProvider pixelId="" storeUrl="">
          <></>
        </RNConvertInSDKProvider>
      )
    ).toThrow(
      'Both pixelId and storeUrl must be provided to initialize the SDK'
    );
  });

  it('should initialize SDK on mount', () => {
    render(
      <RNConvertInSDKProvider
        pixelId="test-pixel-id"
        storeUrl="https://test-store.com"
      >
        <></>
      </RNConvertInSDKProvider>
    );

    expect(RNConvertedInSdkModule.initializeSDK).toHaveBeenCalledWith({
      pixelId: 'test-pixel-id',
      storeUrl: 'https://test-store.com',
    });
  });
});
