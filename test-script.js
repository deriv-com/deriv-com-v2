const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, './libs/');

const snakeCasePattern = /\b[a-z]+_[a-z]+\b/g;

function findSnakeCaseVariables(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  let snakeCaseVariables = [];

  lines.forEach((line, lineNumber) => {
    const words = line.split(/\W+/);

    words.forEach((word) => {
      if (snakeCasePattern.test(word)) {
        snakeCaseVariables.push({
          variableName: word,
          file: filePath,
          line: lineNumber + 1,
        });
      }
    });
  });

  return snakeCaseVariables;
}

function scanDirectory(directory) {
  const files = fs.readdirSync(directory);

  files.forEach((file) => {
    const filePath = path.join(directory, file);
    const fileStats = fs.statSync(filePath);

    if (fileStats.isDirectory()) {
       scanDirectory(filePath);
    }else if (fileStats.isFile() && (file.endsWith('.tsx') || file.endsWith('.ts'))) {
      const snakeCaseVariables = findSnakeCaseVariables(filePath);
      if (snakeCaseVariables.length > 0) {
        console.log(`snake_case variables in ${filePath}:`);
        snakeCaseVariables.forEach((variable) => {
          console.log(`  Line ${variable.line}: ${variable.variableName}`);
        });
      }
    }
  });
}

scanDirectory(rootDir);
