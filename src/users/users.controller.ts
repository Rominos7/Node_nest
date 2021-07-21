import { Body, Controller, Post, UseGuards, UseInterceptors } from "@nestjs/common";

import { UsersService } from "./users.service";
import { UserDto } from "./dto/user.dto";
import { ResponseInterceptor } from "./users.interseptor";
import { SingInUserGuard } from "./users.guard";

@Controller()
@UseInterceptors(ResponseInterceptor)
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post('/signUp')
    createUser(@Body() credentials:UserDto) {
        return this.usersService.signUp(credentials);
    }

    @Post('/signIn')
    @UseGuards(SingInUserGuard)
    checkUser(@Body() credentials:UserDto) {
        return this.usersService.signIn(credentials);
    }

}