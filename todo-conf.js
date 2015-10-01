exports.config = {
  seleniumAddress: 'http://172.17.8.101:4444/wd/hub',
  specs: ['todo-spec.js'],
  multiCapabilities: [{
    'browserName': 'firefox'
	}, {
    'browserName': 'chrome'
	}],
  onPrepare: function() {
    require('jasmine-reporters');
    jasmine.getEnv().addReporter(
      new jasmine.JUnitXmlReporter(outputxmldir', true, true));
  }
};
