import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config } from './ormconfig';

@Module({
    imports : [
        TypeOrmModule.forRoot(config)
    ]
})

export class DatabaseModule {}