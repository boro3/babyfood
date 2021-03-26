const cfg = require('./../../pkg/config');
const recipe = require('./handlers/recipe');
const cors= require ('cors');
const jwt = require ('express-jwt');
require('./../../pkg/db');
const express = require ('express');

const bodyParser = require('body-parser');
const api = express();
api.use(bodyParser.json());
api.use(cors());

api.use(jwt({
    secret: cfg.get('server').jwt_key,
    algorithms: ['HS256']
}).unless({
    path: [
        { url: '/api/v1/recipe/all', methods: ['GET'] },  
        { url: '/api/v1/recipe', methods: ['GET'] },  
        { url: /^\/api\/v1\/recipe\/.*/, methods: ['GET'] }
    ]
}));

api.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('BAD JWT');
    }
});

api.post('/api/v1/recipe/create', recipe.create);
api.get('/api/v1/user/recipes', recipe.getByUid);
api.get('/api/v1/recipe/all', recipe.getAll);
api.get('/api/v1/recipe/:id', recipe.getOne);

api.listen(cfg.get('server').recipes, err => {
    if(err) {
        return console.error('Could not start server:', err);
    }
    console.log('Server successfully started on port', cfg.get('server').recipes);
});
