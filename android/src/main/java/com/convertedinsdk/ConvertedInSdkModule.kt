package com.convertedinsdk

import android.util.Log
import com.facebook.react.bridge.*
import convertedin.pixel.pixelsdk.ConvertedInSdk
import convertedin.pixel.pixelsdk.data.entities.EventContent

class ConvertedInSDKModule(reactContext: ReactApplicationContext) :
        ReactContextBaseJavaModule(reactContext) {
  private val TAG = "ConvertedInSDKModule"

  override fun getName(): String {
    return "ConvertedInSDKModule"
  }

  private fun convertArray(readableArray: ReadableArray): ArrayList<EventContent> {
    val eventContentList = ArrayList<EventContent>()
    try {
      for (i in 0 until readableArray.size()) {
        val readableMap = readableArray.getMap(i)
        val id = dynamicToString(readableMap.getDynamic("id"))
        val quantity = dynamicToString(readableMap.getDynamic("quantity"))
        val name = dynamicToString(readableMap.getDynamic("name"))

        Log.d(TAG, "🚀 Converting item: id=$id, quantity=$quantity, name=$name")

        val eventContent = EventContent(id, quantity, name)
        eventContentList.add(eventContent)
      }
    } catch (e: Exception) {
      Log.e(TAG, "🚀 Error in convertArray: ${e.message}", e)
    }
    return eventContentList
  }

  @ReactMethod
  fun identifyUser(email: Dynamic, phone: Dynamic, countryCode: Dynamic) {
    try {
      val emailStr = dynamicToString(email)
      val phoneStr = dynamicToString(phone)
      val countryCodeStr = dynamicToString(countryCode)
      Log.d(
              TAG,
              "🚀 identifyUser called: email=$emailStr, phone=$phoneStr, countryCode=$countryCodeStr"
      )
      ConvertedInSdk().identifyUser(emailStr, phoneStr, countryCodeStr)
    } catch (e: Exception) {
      Log.e(TAG, "🚀 Error in identifyUser: ${e.message}", e)
    }
  }

  @ReactMethod
  fun addEvent(eventName: Dynamic, currency: Dynamic, total: Dynamic, products: ReadableArray) {
    try {
      val eventNameStr = dynamicToString(eventName)
      val currencyStr = dynamicToString(currency)
      val totalStr = dynamicToString(total)
      Log.d(
              TAG,
              "🚀 addEvent called: eventName=$eventNameStr, currency=$currencyStr, total=$totalStr"
      )
      ConvertedInSdk().addEvent(eventNameStr, currencyStr, totalStr, convertArray(products))
    } catch (e: Exception) {
      Log.e(TAG, "🚀 Error in addEvent: ${e.message}", e)
    }
  }

  @ReactMethod
  fun pageViewEvent(currency: Dynamic, total: Dynamic, products: ReadableArray) {
    try {
      val currencyStr = dynamicToString(currency)
      val totalStr = dynamicToString(total)
      Log.d(TAG, "🚀 pageViewEvent called: currency=$currencyStr, total=$totalStr")
      ConvertedInSdk().pageViewEvent(currencyStr, totalStr, convertArray(products))
    } catch (e: Exception) {
      Log.e(TAG, "🚀 Error in pageViewEvent: ${e.message}", e)
    }
  }

  @ReactMethod
  fun viewContentEvent(currency: Dynamic, total: Dynamic, products: ReadableArray) {
    try {
      val currencyStr = dynamicToString(currency)
      val totalStr = dynamicToString(total)
      Log.d(TAG, "🚀 viewContentEvent called: currency=$currencyStr, total=$totalStr")
      ConvertedInSdk().viewContentEvent(currencyStr, totalStr, convertArray(products))
    } catch (e: Exception) {
      Log.e(TAG, "🚀 Error in viewContentEvent: ${e.message}", e)
    }
  }

  @ReactMethod
  fun addToCartEvent(currency: Dynamic, total: Dynamic, products: ReadableArray) {
    try {
      val currencyStr = dynamicToString(currency)
      val totalStr = dynamicToString(total)
      Log.d(TAG, "🚀 addToCartEvent called: currency=$currencyStr, total=$totalStr")
      ConvertedInSdk().addToCartEvent(currencyStr, totalStr, convertArray(products))
    } catch (e: Exception) {
      Log.e(TAG, "🚀 Error in addToCartEvent: ${e.message}", e)
    }
  }

  @ReactMethod
  fun initiateCheckoutEvent(currency: Dynamic, total: Dynamic, products: ReadableArray) {
    try {
      val currencyStr = dynamicToString(currency)
      val totalStr = dynamicToString(total)
      Log.d(TAG, "🚀 initiateCheckoutEvent called: currency=$currencyStr, total=$totalStr")
      ConvertedInSdk().initiateCheckoutEvent(currencyStr, totalStr, convertArray(products))
    } catch (e: Exception) {
      Log.e(TAG, "🚀 Error in initiateCheckoutEvent: ${e.message}", e)
    }
  }

  @ReactMethod
  fun purchaseEvent(currency: Dynamic, total: Dynamic, products: ReadableArray) {
    try {
      val currencyStr = dynamicToString(currency)
      val totalStr = dynamicToString(total)
      Log.d(TAG, "🚀 purchaseEvent called: currency=$currencyStr, total=$totalStr")
      ConvertedInSdk().purchaseEvent(currencyStr, totalStr, convertArray(products))
    } catch (e: Exception) {
      Log.e(TAG, "🚀 Error in purchaseEvent: ${e.message}", e)
    }
  }

  @ReactMethod
  fun saveDeviceToken(token: Dynamic) {
    try {
      val tokenStr = dynamicToString(token)
      Log.d(TAG, "🚀 saveDeviceToken called: token=$tokenStr")
      ConvertedInSdk().saveDeviceToken(tokenStr)
    } catch (e: Exception) {
      Log.e(TAG, "🚀 Error in saveDeviceToken: ${e.message}", e)
    }
  }

  @ReactMethod
  fun deleteDeviceToken() {
    try {
      Log.d(TAG, "🚀 deleteDeviceToken called")
      ConvertedInSdk().deleteDeviceToken()
    } catch (e: Exception) {
      Log.e(TAG, "🚀 Error in deleteDeviceToken: ${e.message}", e)
    }
  }

  @ReactMethod
  fun initializeSDK(config: ReadableMap, promise: Promise) {
    try {
      val pixelId =
              config.getString("pixelId") ?: throw IllegalArgumentException("pixelId is required")
      val storeUrl =
              config.getString("storeUrl") ?: throw IllegalArgumentException("storeUrl is required")

      Log.d(TAG, "🚀 initializeSDK called: pixelId=$pixelId, storeUrl=$storeUrl")

      ConvertedInSdk().initialize(reactApplicationContext, pixelId, storeUrl)
      promise.resolve(null)
    } catch (e: Exception) {
      Log.e(TAG, "🚀 Error in initializeSDK: ${e.message}", e)
      promise.reject("INITIALIZE_ERROR", e.message, e)
    }
  }

  @ReactMethod
  fun registerEvent() {
    try {
      Log.d(TAG, "🚀 registerEvent called")
      ConvertedInSdk().registerEvent()
    } catch (e: Exception) {
      Log.e(TAG, "🚀 Error in registerEvent: ${e.message}", e)
    }
  }

  private fun dynamicToString(dynamic: Dynamic): String {
    return when (dynamic.type) {
      ReadableType.Number -> dynamic.asDouble().toString()
      ReadableType.String -> dynamic.asString()
      else -> throw IllegalArgumentException("🚀 Unexpected type: ${dynamic.type}")
    }
  }
}
