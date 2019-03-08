exports.config = {
    // launch1 locally when fields directConnect and seleniumAddress are not provided
    chromeDriver: '/usr/local/lib/node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_2.40',
    seleniumServerJar: '/usr/local/lib/node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.13.0.jar',
    specs: ['D:\\Protractor\\JSFilesLocation\\test.js'],
    capabilities: {
      browserName: 'chrome'
    }
  }