import { Migration } from '@mikro-orm/migrations';

export class Migration20240207100451 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "job_application" alter column "url" type varchar(1024) using ("url"::varchar(1024));');
  }

  async down(): Promise<void> {
    this.addSql('alter table "job_application" alter column "url" type varchar(255) using ("url"::varchar(255));');
  }

}
