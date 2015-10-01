exports.config = {
  directConnect: true,
  specs: ['*-spec.js'],
  framework: 'jasmine2',
  onPrepare: function() {
    require('jasmine-reporters');
    jasmine.getEnv().addReporter(
      new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: 'report',
        filePrefix: 'xmloutput'
      }));
  }
};