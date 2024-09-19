# IOP's Stylelint Config

#### Version 1.1.0

[![NPM Version](https://img.shields.io/npm/v/%40ideasonpurpose%2Fstylelint-config?logo=npm)](https://www.npmjs.com/package/@ideasonpurpose/stylelint-config)
[![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/ideasonpurpose/stylelint-config/npm-publish.yml?logo=github&logoColor=white)](https://github.com/ideasonpurpose/stylelint-config/actions/workflows/npm-publish.yml)

[Shared Stylelint config](https://stylelint.io/user-guide/configure) for projects at Ideas On Purpose. Using this reduces redundant code in package.json and keeps coding preferences in sync across projects.

## How to use

Install this package:

```sh
npm install --save-dev @ideasonpurpose/stylelint-config
```

Then add this `stylelint` key to the project's package.json file:

```json
  "stylelint": {
    "extends": "@ideasonpurpose/stylelint-config"
  }
```

### Related Projects

- [WordPress Build Tools](https://github.com/ideasonpurpose/build-tools-wordpress)
- [Prettier Config](https://github.com/ideasonpurpose/prettier-config)
- [Stylelint Config](https://github.com/ideasonpurpose/stylelint-config)
- [Docker-based Development Environment for WordPress](https://github.com/ideasonpurpose/docker-wordpress-dev)

## &nbsp;

#### Brought to you by IOP

<a href="https://www.ideasonpurpose.com"><img src="https://raw.githubusercontent.com/ideasonpurpose/ideasonpurpose/master/iop-logo-white-on-black-88px.png" height="44" align="top" alt="IOP Logo"></a><img src="https://raw.githubusercontent.com/ideasonpurpose/ideasonpurpose/master/spacer.png" align="middle" width="4" height="54"> This project is actively developed and used in production at <a href="https://www.ideasonpurpose.com">Ideas On Purpose</a>.
