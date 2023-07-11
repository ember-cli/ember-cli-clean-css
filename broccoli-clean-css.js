'use strict';

const path = require('path');

const CleanCSS = require('clean-css');
const BroccoliPersistentFilter = require('broccoli-persistent-filter');
const jsonStableStringify = require('json-stable-stringify');

class CleanCSSFilter extends BroccoliPersistentFilter {
  constructor(inputTree, options) {
    super(inputTree, options);

    this.options = options || {};
  }

  baseDir() {
    return __dirname;
  }

  cacheKeyProcessString(string, relativePath) {
    this.optionsHash = this.optionsHash || jsonStableStringify(this.options);

    return `${this.optionsHash}${super.cacheKeyProcessString(
      string,
      relativePath
    )}`;
  }

  setupCleanCSS() {
    let inputPath = this.inputPaths[0];
    let cleanCSSOptions = Object.assign({}, this.options.cleanCSS, {
      rebase: false,
      returnPromise: true,
    });

    if (cleanCSSOptions.rebaseTo) {
      cleanCSSOptions.rebaseTo = path.join(inputPath, cleanCSSOptions.rebaseTo);
    }

    this.cleanCSS = new CleanCSS(cleanCSSOptions);
  }

  build() {
    if (!this.cleanCSS) {
      this.setupCleanCSS();
    }

    return super.build();
  }

  async processString(contents, relativePath) {
    let fullPath = path.resolve(this.inputPaths[0], relativePath);
    let result = this.cleanCSS.minify({ [fullPath]: { styles: contents } });
    return (await result).styles;
  }
}

CleanCSSFilter.prototype.extensions = ['css'];
CleanCSSFilter.prototype.targetExtension = 'css';

module.exports = CleanCSSFilter;
