# Changelog

## [Unreleased][unreleased]

## [0.2.0] - 2018-12-29

### Changed

- Restore `android` and `iphone` to `latest` in `pullRequest` list ([`cd84b92`](https://github.com/airtap/browsers/commit/cd84b92)) ([**@vweevers**](https://github.com/vweevers))

## [0.1.0] - 2018-12-29

### Changed

- Upgrade `standard` from `^11.0.0` to `12.0.0` ([#11](https://github.com/airtap/browsers/issues/11)) ([**@ralphtheninja**](https://github.com/ralphtheninja))

### Added

- Add `hallmark` devDependency ([`36fff04`](https://github.com/airtap/browsers/commit/36fff04)) ([**@vweevers**](https://github.com/vweevers))

### Removed

- Remove IE 9 and 10 ([`c75b3b8`](https://github.com/airtap/browsers/commit/c75b3b8)) ([**@vweevers**](https://github.com/vweevers))

## [0.0.2] - 2018-05-25

### Added

- Add node 10 to Travis ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Add Greenkeeper ([**@ralphtheninja**](https://github.com/ralphtheninja))

### Removed

- Remove node 4 from Travis ([**@ralphtheninja**](https://github.com/ralphtheninja))

## [0.0.1] - 2018-02-16

First release :seedling:. Forked from [`browzers`](https://github.com/algolia/browzers), so this changelog entry lists the differences from `browzers`.

### Added

- Add `standard` ([**@vweevers**](https://github.com/vweevers))
- Add `LICENSE` file ([**@vweevers**](https://github.com/vweevers))
- Test `.name`, `.version` and `.platform` ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Add badges, usage, install and license to readme ([**@vweevers**](https://github.com/vweevers))
- Add `CHANGELOG.md` ([**@vweevers**](https://github.com/vweevers))

### Changed

- Rename package and update repository URLs ([**@vweevers**](https://github.com/vweevers))
- Remove the need for Babel ([**@vweevers**](https://github.com/vweevers))
- Update `.travis.yml` with node 4, 6, 8 and 9 ([**@vweevers**](https://github.com/vweevers))
- Change IE8 to IE9 ([**@vweevers**](https://github.com/vweevers))
- Temporarily change Android latest (failing on Sauce Labs) to 6.0 ([**@vweevers**](https://github.com/vweevers))

### Fixed

- Gitignore `npm-debug.log` and `yarn.lock` ([**@vweevers**](https://github.com/vweevers))

### Removed

- Remove `eslint` (replaced by `standard`) ([**@vweevers**](https://github.com/vweevers))
- Remove `.npmignore` (only there for Babel) ([**@vweevers**](https://github.com/vweevers))
- Remove `HISTORY.md` (replaced by `CHANGELOG.md`) ([**@vweevers**](https://github.com/vweevers))

[unreleased]: https://github.com/airtap/browsers/compare/v0.2.0...HEAD

[0.2.0]: https://github.com/airtap/browsers/compare/v0.1.0...v0.2.0

[0.1.0]: https://github.com/airtap/browsers/compare/v0.0.2...v0.1.0

[0.0.2]: https://github.com/airtap/browsers/compare/v0.0.1...v0.0.2

[0.0.1]: https://github.com/airtap/browsers/compare/v0.0.0...v0.0.1
