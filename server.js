const { exec } = require('child_process');


const port = process.env.PORT || 3001;

exec('./node_modules/.bin/json-server --watch --routes routes.json api.json --port ' + port, (error, stdout, stderr) => {
    console.log(`Running json-server on port ${port}...`);
});
