var fs = require('fs'),
    PEG = require('pegjs');

grammar = fs.readFileSync('parse.pegjs').toString();
parser = PEG.buildParser(grammar);

parsed = parser.parse(process.argv[2]);
console.log(JSON.stringify(parsed));
