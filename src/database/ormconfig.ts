import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'admin',
    password: 'admin',
    database: 'task_manager',
    entities:  [__dirname + '/**/*.entity.ts'],
    migrations: ['src/migration/*{.ts}'],
    schema: 'public',
    cli: {
      migrationsDir: 'src/migration'
    }
  }