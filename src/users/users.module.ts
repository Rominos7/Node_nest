import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { LocalStrategy } from './local.strategy';

@Module({
    imports: [TypeOrmModule.forFeature([UsersRepository])],
    controllers: [UsersController],
    providers:[UsersService, LocalStrategy],
})
export class UsersModule {}
