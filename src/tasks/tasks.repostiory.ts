import { Repository, EntityRepository } from 'typeorm';

import Tasks from './tasks.entity';

@EntityRepository(Tasks)
export class TasksRepostiory extends Repository<Tasks> {}
