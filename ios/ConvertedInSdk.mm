#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(ConvertedInSDKModule, NSObject)

RCT_EXTERN_METHOD(addEvent:(NSString *)name currency:(NSString *)currency total:(nonnull NSNumber *)total products:(NSArray *)products)
RCT_EXTERN_METHOD(initializeSDK:(NSDictionary *)config
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject)
RCT_EXTERN_METHOD(identifyUser:(NSString *)email countryCode:(NSString *)countryCode phone:(NSString *)phone)
RCT_EXTERN_METHOD(registerEvent)
RCT_EXTERN_METHOD(viewContentEvent:(NSString *)currency total:(nonnull NSNumber *)total products:(NSArray *)products)
RCT_EXTERN_METHOD(addToCartEvent:(NSString *)currency total:(nonnull NSNumber *)total products:(NSArray *)products)
RCT_EXTERN_METHOD(initiateCheckoutEvent:(NSString *)currency total:(nonnull NSNumber *)total products:(NSArray *)products)
RCT_EXTERN_METHOD(purchaseEvent:(NSString *)currency total:(nonnull NSNumber *)total products:(NSArray *)products)

@end
