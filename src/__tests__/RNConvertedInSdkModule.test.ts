import * as RNConvertedInSdkModule from '../RNConvertedInSdkModule';

jest.mock('react-native', () => ({
  NativeModules: {
    ConvertedInSDKModule: {
      initializeSDK: jest.fn(),
      identifyUser: jest.fn(),
      addEvent: jest.fn(),
      viewContentEvent: jest.fn(),
      addToCartEvent: jest.fn(),
      initiateCheckoutEvent: jest.fn(),
      purchaseEvent: jest.fn(),
      registerEvent: jest.fn(),
    },
  },
}));

describe('RNConvertedInSdkModule', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    RNConvertedInSdkModule.__test__.resetInitialization();
  });

  it('should throw an error when calling methods before initialization', () => {
    expect(() =>
      RNConvertedInSdkModule.identifyUser(
        'test@example.com',
        '+1',
        '1234567890'
      )
    ).toThrow('SDK must be initialized before calling this method.');
  });

  it('should throw an error when calling identifyUser before initialization', () => {
    expect(() =>
      RNConvertedInSdkModule.identifyUser(
        'test@example.com',
        '+1',
        '1234567890'
      )
    ).toThrow('SDK must be initialized before calling this method.');
  });

  it('should throw errors when calling other methods before initialization', () => {
    expect(() =>
      RNConvertedInSdkModule.addEvent('test_event', 'USD', 100, [])
    ).toThrow('SDK must be initialized before calling this method.');
    expect(() =>
      RNConvertedInSdkModule.viewContentEvent('USD', 50, [])
    ).toThrow('SDK must be initialized before calling this method.');
    expect(() => RNConvertedInSdkModule.addToCartEvent('USD', 75, [])).toThrow(
      'SDK must be initialized before calling this method.'
    );
    expect(() =>
      RNConvertedInSdkModule.initiateCheckoutEvent('USD', 150, [])
    ).toThrow('SDK must be initialized before calling this method.');
    expect(() => RNConvertedInSdkModule.purchaseEvent('USD', 200, [])).toThrow(
      'SDK must be initialized before calling this method.'
    );
    expect(() => RNConvertedInSdkModule.registerEvent()).toThrow(
      'SDK must be initialized before calling this method.'
    );
  });
});
