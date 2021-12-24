import express, { Request, Response } from 'express';
import { UserController } from './controllers/user.controller';
import { request } from 'http';

class Server {
    private UserController: UserController;
    private app: express.Application;

    constructor(){
        this.app = express(); // init the app
        this.configuration();
        this.UserController = new UserController; //create new instance of controller
        this.routes();
    }

    /**Method to configure the server,
     * Port by default 3000
     */
    public configuration(){
        this.app.set('port', process.env.PORT || 3001);
    }

    /**
     * Method to configure the routes
     */
    public routes(){
        this.app.use(`/api/users/`, this.UserController.router) //confiture the new routes of the user controller
        this.app.get( "/",(req: Request, res: Response ) => {
            res.send( "Hello world!" );
        });
    }

    /**
     * Used to start the server
     */
    public start(){
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server is listening ${this.app.get('port')} port.`);
        })
    } 
}

const server = new Server(); // Create server instance
server.start(); // Exectute the server