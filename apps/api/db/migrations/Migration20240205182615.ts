import { Migration } from '@mikro-orm/migrations';

export class Migration20240205182615 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "job_application" add column "title" varchar(255) not null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "job_application" drop column "title";');
  }

}
