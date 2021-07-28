import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './users.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private usersService: UsersService) {
        super();
    }

    async validate(login: string, password: string){

        const credentials = {
            login,
            password,
        }

        const user = await this.usersService.signIn(credentials);
        if (!user) {
            throw new UnauthorizedException();
        }

        return user;
    }
}