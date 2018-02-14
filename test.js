const test = require('tape')
const browsers = require('.')

test('check .name, .version and .platform', t => {
  t.equal(Array.isArray(browsers.all), true, '.all is an array')
  t.equal(Array.isArray(browsers.pullRequest), true, '.pullRequest is an array')

  function predicate (el) {
    // .name required
    if (typeof el.name !== 'string') return false
    // .platform optional, should be string if set
    if (el.platform && typeof el.platform !== 'string') return false
    // .version required
    return typeof el.version === 'string' || Array.isArray(el.version)
  }

  t.equal(browsers.all.every(predicate), true)
  t.equal(browsers.pullRequest.every(predicate), true)

  t.end()
})
