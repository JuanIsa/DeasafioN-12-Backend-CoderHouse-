'use strict';
import { Router } from 'express';
import Users from '../dao/mongodb/handlerUsers.js';
import session from 'express-session';
import MongoStore from 'connect-mongo';

const usersRoute = Router();
const archivo = new Users();

usersRoute.use(session({
    store: MongoStore.create({
        mongoUrl: 'mongodb+srv://Sharvelion:nauj7895214@clusterdepruebajts.ysnbgix.mongodb.net/sessions?retryWrites=true&w=majority',
        ttl: 1000000
    }),
    key: 'Cookie de Juan',
    secret: 'Sharvelion',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 30
    }
}));

usersRoute.post('/register', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).send({ status: 'Error', error: 'valores incompletos' });
    archivo.createUser(req.body).then(dataFile => {
        res.json(dataFile);
    });
});


usersRoute.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).send({ status: 'Error', error: 'valores incompletos' });
    archivo.readUser(req.body).then(dataFile => {
        if (dataFile !== null) {
            req.session.user = { email: req.body.email };
            return res.json(dataFile.email);
        } else {
            return res.json(dataFile);
        }
    });
});

usersRoute.get('/checksession', (req, res) => {
    if (req.session.user) {
        res.status(200).send({ status: 200, user: req.session.user });
    } else {
        res.status(200).send({ status: 400, user: 'No user loged' });
    }
});

usersRoute.get('/logout', (req, res) => {
    req.session.destroy();
    res.status(200).send({ status: 400, user: 'No user loged' });
});

export default usersRoute;