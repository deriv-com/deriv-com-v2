const { globSync } = require('glob');
const fs = require('fs');
const path = require('path');

const getLcovFiles = function (src) {
  return globSync(`${src}/**/lcov.info`);
};

(function () {
  const files = getLcovFiles('coverage');
  const mergedReport = files.reduce(
    (mergedReport, currFile) => (mergedReport += fs.readFileSync(currFile)),
    ''
  );
  fs.writeFileSync(path.resolve('./coverage/lcov.info'), mergedReport);
  console.log('The file has been saved!');
})();
