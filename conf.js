exports.config = {
  directConnect: true,
  specs: ['*-spec.js'],
  multiCapabilities: [{
    'browserName': 'firefox'
	}, {
    'browserName': 'chrome'
	}]
};