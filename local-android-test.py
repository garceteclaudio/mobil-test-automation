import unittest
from appium import webdriver
from appium.webdriver.common.appiumby import AppiumBy
from appium.options.common import AppiumOptions

capabilities = {
  "appium:appPackage": "com.loginexample",
  "appium:appActivity": "com.loginexample.MainActivity",
  "appium:deviceName": "tester",
  "platformName": "Android",
  "appium:app": "/Users/claudiorodolfogarcete/proyectos-personales/appium-mobile/apps/loginExample.apk"
}

appium_server_url = 'http://localhost:4723/wd/hub'

driver = webdriver.Remote(appium_server_url,options=AppiumOptions().load_capabilities(capabilities))
