import { Module } from '@nestjs/common';

import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module'; 
import { DatabaseModule } from './database/database.module';

import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [DatabaseModule, TasksModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
