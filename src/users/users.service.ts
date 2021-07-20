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
        
        this.userRepository.save(newUser);
        
        throw new HttpException({
            status: HttpStatus.CREATED,
            message: 'sing Up was successful',
        }, HttpStatus.CREATED);
        
    }

    async signIn(credentials:UserCredentials) {
        // TODO: Do the login check in guard. Same we can do for password
        const {login, password} = credentials;

        let user = await this.userRepository.findOne(login);
        // TODO: This is a simple concept for password comparison. Change for better one 
        if(user.userPassword === password){
            throw new HttpException({
                status: HttpStatus.OK,
                message: 'sing In was successful',
            }, HttpStatus.OK);
        } 

        throw new HttpException({
            status: HttpStatus.UNAUTHORIZED,
            message: 'wrong password',
        }, HttpStatus.UNAUTHORIZED);
    }
}