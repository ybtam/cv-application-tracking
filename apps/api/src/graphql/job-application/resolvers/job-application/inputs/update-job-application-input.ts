import {Field, InputType} from "type-graphql";
import {JobApplicationStatus} from "@graphql/job-application/enums/job-application-status";

@InputType()
export class UpdateJobApplicationInput {
  @Field()
  id: string;

  @Field()
  url?: string;

  @Field()
  title?: string;

  @Field(() => JobApplicationStatus)
  status?: JobApplicationStatus;
}
