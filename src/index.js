import express from 'express';
import routers from './routers/routers';

class App {

    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());
    }

    routes() {
        this.server.use(routers);
    }

}

export default new App();
