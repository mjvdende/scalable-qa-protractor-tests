exports.config = {
  seleniumAddress: 'http://172.17.8.101:4444/wd/hub',
  specs: ['demo-spec.js'],
  onPrepare: function() {
    require('jasmine-reporters');
    jasmine.getEnv().addReporter(
      new jasmine.JUnitXmlReporter('', true, true));
  }
};
