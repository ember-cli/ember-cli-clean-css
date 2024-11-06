# ember-cli-clean-css

> [!NOTE]  
> This addon is not needed and is NOT used when [embroider](https://github.com/embroider-build/embroider) is enabled.

## Installation

```
ember install ember-cli-clean-css
```

## Usage

Options for clean-css can be passed through the `minifyCSS` property in `ember-cli-build.js`. Please see the docs for ember-cli [here](https://cli.emberjs.com/release/advanced-use/asset-compilation/#minifying).

## clean-css versions

### `ember-cli-clean-css` 3.x 

`ember-cli-clean-css` 3.x uses `clean-css` `v5.0`. When upgrading you may enounter differences in css output. Please see the `clean-css` [documentation](https://github.com/clean-css/clean-css) and changelog to determine how the output has changed.

### `ember-cli-clean-css` 2.x 

`ember-cli-clean-css` 2.x uses `clean-css` `v3.4`. This exactly matches the version that `ember-cli` (via `ember-cli-preprocess-registry`) used in `ember-cli <= 4.12`. 

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](LICENSE.md).
