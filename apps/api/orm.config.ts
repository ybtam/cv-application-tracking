import { Migrator } from '@mikro-orm/migrations';
import { MikroORM, PostgreSqlDriver } from '@mikro-orm/postgresql';
import { SeedManager } from '@mikro-orm/seeder';

export default {
  driver: PostgreSqlDriver,
  entities: ['dist/graphql/**/entities/**/*.ts'],
  entitiesTs: ['src/graphql/**/entities/**/*.ts'],
  extensions: [
    Migrator, SeedManager
  ],
  migrations: {
    path: './db/migrations',
    tableName: 'migrations',
    transactional: true,
  },
  port: 5432,
  seeder: {
    emit: 'ts',
    path: './db/seeders',
  },
  tsNode: true,
} as Parameters<typeof MikroORM.init>[0];
