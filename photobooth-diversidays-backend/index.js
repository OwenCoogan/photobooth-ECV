require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const http = require('https');

class ServerClass{
    constructor(){
        this.server = express();
        this.port = process.env.PORT;
    }

    init(){
        this.server.use( (req, res, next) => {
            const allowedOrigins = process.env.ALLOWED_ORIGINS.split(', ');
            const origin = req.headers.origin;
            if(allowedOrigins.indexOf(origin) > -1){ res.setHeader('Access-Control-Allow-Origin', origin)}
            res.header('Access-Control-Allow-Credentials', true);
            res.header('Access-Control-Allow-Methods', ['GET', 'PUT', 'POST', 'DELETE']);
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            next();
        });
        this.server.use( express.static(path.join(__dirname, 'www')) );
        this.server.set( 'view engine', 'ejs' );

        this.server.use(bodyParser.json({limit: '20mb'}));
        this.server.use(bodyParser.urlencoded({ extended: true }));

        this.server.use(cookieParser(process.env.COOKIE_SECRET));
        this.config();
    }

    config(){
        const ApiRouterClass = require('./router/api.router');
        const apiRouter = new ApiRouterClass();
        this.server.use('/v1', apiRouter.init());
        this.launch();
    }

    launch(){
        this.server.listen( this.port , () => {
            console.log({
                node: `http:s//localhost:${this.port}`,
            })
        })
    }
}
const MyServer = new ServerClass();
MyServer.init();
