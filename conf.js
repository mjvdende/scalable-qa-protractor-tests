exports.config = {
  seleniumAddress: 'http://172.17.8.102:4448/wd/hub',
  specs: ['*-spec.js']

	onPrepare: function() {
    require('jasmine-reporters');
    jasmine.getEnv().addReporter(
      new jasmine.JUnitXmlReporter(outputxmldir', true, true));
	}
};
