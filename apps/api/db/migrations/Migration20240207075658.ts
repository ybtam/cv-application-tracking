import { Migration } from '@mikro-orm/migrations';

export class Migration20240207075658 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "job_application" add column "deleted_at" date null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "job_application" drop column "deleted_at";');
  }

}
