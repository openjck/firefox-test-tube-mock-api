const { execSync } = require('child_process');


const port = process.env.PORT || 3001;

console.log(`Running json-server on port ${port}...`);
execSync('./node_modules/.bin/json-server --watch --read-only --routes routes.json api.json --port ' + port);
