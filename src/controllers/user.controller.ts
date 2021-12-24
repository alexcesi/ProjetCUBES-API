import { Router, Response, Request } from "express";
import { UserService } from "../services/user.service";


export class UserController {
    public router: Router;
    private userService: UserService;

    constructor() {
        this.router = Router();
        this.userService = new UserService(); //Create a new instance of UserController
        this.routes();
    }

    public index = async (req: Request, res: Response) => {
        res.send(this.userService.index()); // Execute the method of service
    }

    public create(req: Request, res: Response){
        res.send(this.userService.create()); // Execute the method of service
    }

    public update(req: Request, res: Response) {
        res.send(this.userService.update()); // Execute the method of Service
    }
    
    public delete(req: Request, res: Response) {
        res.send(this.userService.delete()); // Execute the method of Service
    }
 
    /**
     * Configure the routes of controller
     */
    public routes() {
        this.router.get('/', this.index);
        this.router.post('/', this.create);
        this.router.put('/:id', this.update);
        this.router.delete('/:id', this.delete);
    }
}