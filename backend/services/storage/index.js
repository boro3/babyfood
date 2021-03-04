const cfg = require('./../../pkg/config');
const jwt = require ('express-jwt');
require('./../../pkg/db');
const upload = require('express-fileupload');
const storage = require('./handlers/storage');

const express = require ('express');

const bodyParser = require('body-parser');
const api = express();
api.use(bodyParser.json());

api.use(jwt({
    secret: cfg.get('server').jwt_key,
    algorithms: ['HS256']
}).unless({
    path: [
        { url: '/api/v1/recipe/all', methods: ['GET'] },  
        { url: /^\/api\/v1\/recipe\/.*/, methods: ['GET'] },
        { url: '/api/v1/auth/login', methods: ['POST'] },
        { url: '/api/v1/auth', methods: ['POST'] }
    ]
}));

api.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('BAD JWT');
    }
});

api.use(upload({
    limits: { fileSize: 50 * 1024 * 1024 }
}));


api.post('/api/v1/recipe/image', storage.storeRecipeFile);
api.post('/api/v1/user/image', storage.storeProfileFile);

api.listen(cfg.get('server').port, err => {
    if(err) {
        return console.error('Could not start server:', err);
    }
    console.log('Server successfully started on port', cfg.get('server').storage);
});
