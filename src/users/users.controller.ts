import { Body, Controller, Post } from "@nestjs/common";

import { UsersService } from "./users.service";
//TODO: Make one dto for checking credetials
import { UserLoginDto } from "./dto/user-login.dto";
import { UserPasswordDto } from "./dto/user-password.dto";

//TODO: make shared type UserCredetials in folder "types"
export type UserCredentials = {
    login:string;
    password:string;
}

@Controller()
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post('/signUp')
    createUser(@Body() credentials:UserCredentials) {
        return this.usersService.signUp(credentials);
    }

    @Post('/signIn')
    checkUser(@Body() credentials:UserCredentials) {
        return this.usersService.signIn(credentials);
    }

}