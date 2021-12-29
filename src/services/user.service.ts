import { getConnection } from 'typeorm';
import { UserRepository } from '../repository/user.repository';

export class UserService {
    private userRepository: UserRepository;

    constructor(){
        this.userRepository = getConnection('projetCUBES').getCustomRepository(UserRepository);
    }

    public index = async () => {
        const users = await this.userRepository.find()
        return users;
    }

    public create = () => {
        return "Create from Service"
    }

    public update = () => {
        return "Update from Service"
    }

    public delete = () => {
        return "Delete from Service"
    }
}