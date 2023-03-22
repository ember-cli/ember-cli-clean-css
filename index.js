'use strict';

module.exports = {
  name: require('./package').name,

  setupPreprocessorRegistry(type, registry) {
    if (type !== 'parent') {
      return;
    }

    let addon = this;

    registry.add('minify-css', {
      name: 'ember-cli-clean-css:preprocessor',
      ext: 'css',
      toTree(tree) {
        let minifyOptions = addon._findHost().options.minifyCSS;

        if (!minifyOptions.enabled) {
          return tree;
        }

        const CleanCSSPlugin = require('./broccoli-clean-css');

        return new CleanCSSPlugin(tree, {
          cleanCSS: minifyOptions.options,
        });
      },
    });
  },
};
