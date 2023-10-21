from behave import *
import time
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

@given('we have behave installed')
def step_impl(context):
    time.sleep(2)
    print("First step !!!!")


@when('we implement a test')
def step_impl(context):
    print("Second step !!!!")


@then('behave will test it for us!')
def step_impl(context):
    ...