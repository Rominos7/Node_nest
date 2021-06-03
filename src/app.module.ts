import { Module } from '@nestjs/common';

import { TasksModule } from './tasks/tasks.module';
import { DatabaseModule } from './database/database.module';

import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [DatabaseModule, TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
