exports.config = {
  directConnect: true,
  specs: ['*-spec.js']
  onPrepare: function() {
    require('jasmine-reporters');
    jasmine.getEnv().addReporter(
      new jasmine.JUnitXmlReporter('report', true, true));
  }
};