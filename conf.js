exports.config = {
  seleniumAddress: 'http://172.17.8.102:4448/wd/hub',
  specs: ['*-spec.js'],
  multiCapabilities: [{
    'browserName': 'firefox'
	}, {
    'browserName': 'chrome'
	}]
};