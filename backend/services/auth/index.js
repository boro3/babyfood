const cfg = require('./../../pkg/config');
const auth = require('./handlers/auth');
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
        { url: '/api/v1/auth/login', methods: ['POST'] },
        { url: '/api/v1/auth', methods: ['POST'] }
    ]
}));

api.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('BAD JWT');
    }
});

//create user
api.post('/api/v1/auth', auth.create);
//user login
api.post('/api/v1/auth/login', auth.login);
api.patch('/api/v1/user/:id', auth.patch);

api.get('/api/v1/user/:id', auth.userProfile);

api.listen(cfg.get('server').user, err => {
    if(err) {
        return console.error('Could not start server:', err);
    }
    console.log('Server successfully started on port user', cfg.get('server').user);
});