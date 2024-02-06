import { MikroORM } from '@mikro-orm/postgresql';

import ormConfig from '../../orm.config';

export default class OrmConnect {
  async connect() : Promise<MikroORM> {

    try {
      const orm = await MikroORM.init(ormConfig);

      const migrator = orm.getMigrator();
      const migrations = await migrator.getPendingMigrations();
      if (migrations && migrations.length > 0) {
        await migrator.up();
      }

      return orm as MikroORM; // Cast to the correct return type
    } catch (error: any) { //todo - sort out the type while testing
      console.error('📌 Could not connect to the database', error);
      throw Error(error);
    }
  }
}
