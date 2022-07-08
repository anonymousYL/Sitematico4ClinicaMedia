const app = require("./app");
require('./connection');

app.listen(app.get("port"));

console.log("Server on port", app.get('port'));
