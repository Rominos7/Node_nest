import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  database: 'task_manager',
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/migrations/*.ts'],
  schema: 'public',
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export default config;
