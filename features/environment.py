from behave import fixture, use_fixture
from appium import webdriver
import os
from appium.options.common import AppiumOptions

capabilities = {
  "appium:appPackage": "com.loginexample",
  "appium:appActivity": "com.loginexample.MainActivity",
  "appium:deviceName": "tester",
  "platformName": "Android",
  "appium:app": "/Users/claudiorodolfogarcete/proyectos-personales/appium-mobile/apps/loginExample.apk"
}

appium_server_url = 'http://localhost:4723/wd/hub'

# Setup actions before each feature
@fixture
def setup_feature(context, feature):
    #context.driver = webdriver.Chrome()  # You can use any WebDriver here
    #context.base_url = "http://example.com"  # Your base URL
    #yield context.driver
    #context.driver.quit()
    ...
# Teardown actions after each feature
def before_feature(context, feature):
    context.driver = webdriver.Remote(appium_server_url,options=AppiumOptions().load_capabilities(capabilities))

def after_feature(context, feature):
    context.driver.quit()
    # You can add teardown actions here if needed