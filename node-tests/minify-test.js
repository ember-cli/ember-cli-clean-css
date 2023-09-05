const fs = require('fs');
const execa = require('execa');
const assert = require('assert');

describe('ember-cli-clean-css', function () {
  it('minifies CSS files', function () {
    this.timeout(60000);

    return execa('ember', ['build', '--prod']).then(() => {
      let content = fs.readFileSync(
        `${__dirname}/../dist/assets/dummy.css`,
        'utf8'
      );
      assert.strictEqual(
        content,
        `body{background:#ff8c00}.hello{font-family:sans-serif;font-size:40px;margin-top:30px;text-align:center;background-image:url('images/foo.png')}`
      );
    });
  });
});
