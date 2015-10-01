exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  specs: ['*-spec.js'],
  multiCapabilities: [{
    'browserName': 'firefox'
	}, {
    'browserName': 'chrome'
	}]
};