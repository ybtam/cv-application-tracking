import { Migration } from '@mikro-orm/migrations';

export class Migration20240208113545 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "job_application" drop constraint if exists "job_application_status_check";');

    this.addSql('alter table "job_application" add column "company" varchar(255) null;');
    this.addSql('alter table "job_application" alter column "status" type text using ("status"::text);');
    this.addSql('alter table "job_application" add constraint "job_application_status_check" check ("status" in (\'ACCEPTED\', \'REJECTED\', \'PENDING\', \'REPLIED\', \'CLOSED\'));');
  }

  async down(): Promise<void> {
    this.addSql('alter table "job_application" drop constraint if exists "job_application_status_check";');

    this.addSql('alter table "job_application" drop column "company";');

    this.addSql('alter table "job_application" alter column "status" type text using ("status"::text);');
    this.addSql('alter table "job_application" add constraint "job_application_status_check" check ("status" in (\'APPLIED\', \'REJECTED\', \'PENDING\', \'REPLIED\'));');
  }

}
