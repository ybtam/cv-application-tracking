import {Field, InputType} from "type-graphql";
import {JobApplicationStatus} from "@graphql/job-application/enums/job-application-status";

@InputType()
export class CreateJobApplicationInput {
  @Field()
  url: string;

  @Field(() => JobApplicationStatus)
  status: JobApplicationStatus;

  @Field()
  title: string;

  @Field()
  company: string;
}
