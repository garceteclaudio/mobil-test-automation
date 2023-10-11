import unittest
from appium import webdriver
from appium.webdriver.common.appiumby import AppiumBy
from appium.options.common import AppiumOptions

capabilities = {
  "platformName": "iOS",
  "appium:automationName": "XCUITest",
  "appium:bundleId": "com.cgarcete.IntegrationApp",
  "appium:udid": "D8D17A9E-BA72-4EDD-B406-19FAB3E02864",
  "appium:deviceName": "iPhone 15 Pro Max"
}

appium_server_url = 'http://localhost:4723/wd/hub'


driver = webdriver.Remote(appium_server_url,options=AppiumOptions().load_capabilities(capabilities))
