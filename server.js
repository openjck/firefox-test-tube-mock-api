const { execSync } = require('child_process');


const port = process.env.PORT || 3001;

// We could have run this in an npm script, but that wouldn't have given us
// access to the value of process.env.PORT.
console.log(`Running json-server on port ${port}...`);
execSync('./node_modules/.bin/json-server --watch --read-only --routes routes.json api.json --port ' + port);
