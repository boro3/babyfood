const cfg = require('./../../pkg/config');

const express = require('express');
const jwt = require('express-jwt');
const cors= require ('cors');
const bodyParser = require('body-parser');
const upload = require('express-fileupload');

const storage = require('./handlers/storage');

const api = express();

api.use(bodyParser.json());
api.use(cors());

api.use(jwt({
    secret: cfg.get('server').jwt_key,
    algorithms: ['HS256']
}).unless({
    path: [
        { url:  /^\/api\/v1\/recipe\/image\/.*/, methods: ['GET'] },
        { url:  /^\/api\/v1\/user\/image\/.*/, methods: ['GET'] },
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
api.get('/api/v1/recipe/image/:fid', storage.getRecipeFile);
api.get('/api/v1/user/image/:fid', storage.getProfileFile);

api.listen(cfg.get('server').storage, err => {
    if (err) {
        return console.error('Could not start server:', err);
    }
    console.log('Server successfully started on port', cfg.get('server').storage);
});
