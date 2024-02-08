import {Entity, Enum, PrimaryKey, Property} from "@mikro-orm/core";
import {Field, ObjectType} from "type-graphql";
import {v4} from "uuid";
import {JobApplicationStatus} from "@graphql/job-application/enums/job-application-status";

@Entity()
@ObjectType()
export class JobApplication {
  @Field()
  @PrimaryKey({ type: 'uuid' })
  id: string = v4();

  @Field()
  @Property({length: 1024})
  url: string;

  @Field()
  @Property()
  title: string;

  @Field({nullable: true})
  @Property({nullable: true})
  company?: string;

  @Field(() => JobApplicationStatus)
  @Enum({ items: () => JobApplicationStatus })
  status: JobApplicationStatus;

  @Field(() => Date, {nullable: true })
  @Property({ type: "date" , nullable: true})
  deletedAt?: Date;
}
