const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000
    routes = require('./routes')

routes(app);
app.listen(port);
