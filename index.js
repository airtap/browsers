// '-2..3.1' means 3.1, 3.0, 2.9
module.exports = {
  all: [{
    name: 'chrome',
    version: '-1..latest',
    platform: 'Windows 10'
  }, {
    name: 'firefox',
    version: '-1..latest',
    platform: 'Windows 10'
  }, {
    name: 'internet explorer',
    version: '11'
  }, {
    name: 'safari',
    version: '-3..latest'
  }, {
    name: 'iphone',
    version: '-3..latest'
  }, {
    name: 'android',
    version: '-3..latest'
  }, {
    name: 'ipad',
    version: '-3..latest'
  }, {
    name: 'microsoftedge',
    version: 'latest'
  }],
  pullRequest: [{
    name: 'chrome',
    version: 'latest',
    platform: 'Windows 10'
  }, {
    name: 'internet explorer',
    version: '11'
  }, {
    name: 'firefox',
    version: 'latest',
    platform: 'Windows 10'
  }, {
    name: 'iphone',
    version: '9.0'
  }, {
    name: 'android',
    version: '6.0'
  }, {
    name: 'microsoftedge',
    version: 'latest'
  }]
}
