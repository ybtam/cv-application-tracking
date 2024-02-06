import {Arg, Ctx, Mutation, Resolver} from "type-graphql";
import {JobApplication} from "@graphql/job-application/entities/job-application";
import type  {myContext} from "@/utils/create-server";
import {
  CreateJobApplicationInput
} from "@graphql/job-application/resolvers/job-application/inputs/create-job-application-input";
import {GraphQLError} from "graphql/error";

@Resolver(() => JobApplication)
export class JobApplicationMutationResolver {
  @Mutation(() => JobApplication)
  async createJobApplication(
    @Arg('input') input: CreateJobApplicationInput,
    @Ctx() {em}: myContext
  ): Promise<JobApplication> {
    let findJobApplication = await em.findOne(JobApplication, {
      url: input.url
    });

    if (findJobApplication) throw new GraphQLError('Job application url already exists');



    const jobApplication = em.create(JobApplication, {
      url: input.url,
      status: input.status,
      title: input.title
    });
    await em.persistAndFlush(jobApplication);

    return jobApplication;
  }
}
