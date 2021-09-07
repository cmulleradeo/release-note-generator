# release-note-generator

See the [CHANGELOG](docs/CHANGELOG.md)


## Installation

```bash
npm install --save-dev semantic-release
npm install --save-dev @semantic-release/{changelog,git}
npm install --save-dev conventional-changelog-conventionalcommits
npm install --save-dev @commitlint/{config-conventional,cli}
npm install --save-dev husky

npx husky install
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit $1'
```

Reuse github action worfklow and release.config.js.

### Docs
- [Conventional commit](https://www.conventionalcommits.org/en/v1.0.0/#summary)
- [Semantic release](https://github.com/semantic-release/semantic-release)
- [Commitlint](https://commitlint.js.org/#/guides-local-setup)

test