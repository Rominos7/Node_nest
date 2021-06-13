import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TasksRepostiory } from './tasks.repostiory';

@Module({
  imports: [TypeOrmModule.forFeature([TasksRepostiory])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
