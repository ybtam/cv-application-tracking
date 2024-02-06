import { Migration } from '@mikro-orm/migrations';

export class Migration20240205181952 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "job_application" ("id" uuid not null, "url" varchar(255) not null, "status" text check ("status" in (\'APPLIED\', \'REJECTED\', \'PENDING\', \'REPLIED\')) not null, constraint "job_application_pkey" primary key ("id"));');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "job_application" cascade;');
  }

}
