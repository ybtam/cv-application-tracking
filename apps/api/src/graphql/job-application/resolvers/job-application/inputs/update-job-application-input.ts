import {Field, InputType} from "type-graphql";
import {JobApplicationStatus} from "@graphql/job-application/enums/job-application-status";

@InputType()
export class UpdateJobApplicationInput {
  @Field()
  id: string;

  @Field({ nullable: true})
  url?: string;

  @Field({ nullable: true})
  title?: string;

  @Field(() => JobApplicationStatus, { nullable: true})
  status?: JobApplicationStatus;

  @Field({ nullable: true})
  company?: string;
}
