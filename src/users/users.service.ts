import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import Users from './users.entity';
import { UsersRepository } from "./users.repository";

export type UserCredentials = {
    login:string;
    password:string;
}


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersRepository)
        private readonly userRepository: UsersRepository,
    ) {}

    async signUp(credentials:UserCredentials) {
        const {login, password} = credentials;
        const newUser = new Users();

        newUser.userLogin = login;
        // TODO: Add encryption for the password to set in DB
        newUser.userPassword = password;
        const user = this.userRepository.save(newUser);
        
        return {
            user: user,
            status: HttpStatus.CREATED,
            message: 'sing Up was successful',
        }

    }

    async signIn(credentials:UserCredentials) {
        const {login, password} = credentials;

        const expretionFail =  new HttpException({
            status: HttpStatus.UNAUTHORIZED,
            message: 'wrong password',
        }, HttpStatus.UNAUTHORIZED);

        let user = await this.userRepository.findOne({userLogin:login});

        // TODO: This is a simple concept for password comparison. Change for better one 
        if(user.userPassword === password){
            return {
                user: user,
                statusCode: HttpStatus.OK,
                message: 'sing In was successful',
            }
        }

        throw expretionFail;
    }
}
