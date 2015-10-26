// this is a list of browsers to test against when using https://github.com/defunctzombie/zuul
// '-2..3.1' means 3.1, 3.0, 2.9

export default {
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
    version: '8..11'
  }, {
    name: 'safari',
    version: '-3..latest'
  }, {
    name: 'iphone',
    version: ['7.1', '-1..8.4', '-1..9.0']
  }, {
    name: 'android',
    version: ['-1..4.4', '-1..latest']
  }, {
    name: 'ipad',
    version: ['7.1', '-1..8.4', '-1..9.0']
  }, {
    name: 'microsoftedge',
    version: '-1..latest'
  }],
  pullRequest: [{
    name: 'chrome',
    version: 'latest',
    platform: 'Windows 10'
  }, {
    name: 'internet explorer',
    version: ['8', '11']
  }, {
    name: 'firefox',
    version: 'latest',
    platform: 'Windows 10'
  }, {
    name: 'iphone',
    version: '9.0'
  }, {
    name: 'android',
    version: 'latest'
  }, {
    name: 'microsoftedge',
    version: 'latest'
  }]
};
