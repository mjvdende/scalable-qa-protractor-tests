require('jasmine-reporters');
exports.config = {
  directConnect: true,
  specs: ['*-spec.js'],
  framework: 'jasmine2',
  onPrepare: function() {
  jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter('', true, true));
};