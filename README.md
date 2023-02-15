# TresWallet - Extension

The most private, non-custodial cryptocurrency wallet
The first crypto wallet protecting you on Web3 without any compromises. Stay safe with TresWallet.

Supporting Ethereum, BNB Chain, Polygon, Avalanche, Fantom, Arbitrum and Tres Leches Chain.

TresWallet is for you if:

- You frequently use DApps and DEXes.
- You want your tools working smoothly, every time.
- You care about your personal data and security online.
- You are tired of overly-cluttered and confusing crypto wallets.

## Getting Started

See the [guideline](docs/guideline.md)

### Prerequisites

- Node.js: version at [.nvmrc](.nvmrc)
- Yarn
- Make

### Installing

#### Prerequisites

You need a GitHub token with **read:packages** access to the **block-wallet** GitHub organization in order to download some private libraries. The steps are:

1. Create a file `~/.npmrc` file with this configuration:

```
//npm.pkg.github.com/:_authToken=REGISTRY_AUTH_TOKEN
@block-wallet:registry=https://npm.pkg.github.com/
@block-wallet:always-auth=true
```

where **REGISTRY_AUTH_TOKEN** is a token generated here https://github.com/settings/tokens with at least read access to the packages.

2. Use the `npm login` command to authenticate:

```
npm login --scope=@block-wallet --registry=https://npm.pkg.github.com
```

That command will ask for your GitHub username, password (use the GitHub token generated before) and also the email.

#### Environment

It's also needed to setup the environment variables on each package. In both `~/packages/background` and `~/packages/provider`, copy the contents of `env.orig` file into a new file called `.env`.

They should look like:

**packages/background/.env**

```
// Complete with the corresponding keys.
ETHERSCAN_API_KEY= // Included in requests to Etherscan. Can be obtained in https://etherscan.io/apis.
```

**packages/provider/.env**

```
LOG_LEVEL=error
```

#### Install

To install all the dependencies run the command
npm install

```
make install
```

### Build

Once you installed everything run the command

```
make build
```

make build/prod

make build/prod-zip

### Running the tests

Once you build the extension run the command

```
make test
```

### Coding style

Every [package](packages) has it own coding style. In order to check the styles run the command

```
make lint
```

### Release

The release process uses a combination of two GitHub workflows called [build](.github/workflows/build.yml) and [release](.github/workflows/release.yml) and finally a manual step to upload the new extension version to the [Chrome Web Store](https://chrome.google.com/webstore/detail/TresWallet/bopcbmipnjdcdfflfgjdgdjejmgpoaab). See the [GitHub releases](https://github.com/block-wallet/extension/releases)

## Built With

- [Node.js](https://nodejs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [React.js](https://reactjs.org/)
- [tailwindcss](https://tailwindcss.com/)

## Contributing

Please read [CONTRIBUTING.md](docs/contributing.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/block-wallet/extension/tags).

## Authors

See the list of [contributors](https://github.com/block-wallet/extension/graphs/contributors) who participated in this project.

## License

See the [LICENSE](LICENSE) file for details

## Acknowledgments

See the [Acknowledgments](docs/acknowledgments.md) file for details
