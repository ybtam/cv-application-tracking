import {Arg, Ctx, Mutation, Resolver} from "type-graphql";
import {JobApplication} from "@graphql/job-application/entities/job-application";
import type {myContext} from "@/utils/create-server";
import {
  CreateJobApplicationInput
} from "@graphql/job-application/resolvers/job-application/inputs/create-job-application-input";
import {GraphQLError} from "graphql/error";
import {
  UpdateJobApplicationInput
} from "@graphql/job-application/resolvers/job-application/inputs/update-job-application-input";

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
      title: input.title,
      company: input.company
    });
    await em.persistAndFlush(jobApplication);

    return jobApplication;
  }

  @Mutation(() => JobApplication)
  async updateJobApplication(
    @Arg('input') input: UpdateJobApplicationInput,
    @Ctx() {em}: myContext
  ) {
    let jobApplication = await em.findOne(JobApplication, {id: input.id});
    if (!jobApplication) throw new GraphQLError('Job application not found');

   if (input.url) jobApplication.url = input.url;
    if (input.status) jobApplication.status = input.status;
    if (input.title) jobApplication.title = input.title;
    if (input.company) jobApplication.company = input.company;

    await em.persistAndFlush(jobApplication);

    return jobApplication;
  }

  @Mutation(() => Boolean)
  async deleteJobApplication(
    @Arg('id') id: string,
    @Ctx() {em}: myContext
  ) {
    let jobApplication = await em.findOne(JobApplication, {id});
    if (!jobApplication) throw new GraphQLError('Job application not found');

    jobApplication.deletedAt = new Date();
    await em.persistAndFlush(jobApplication);

    return true;
  }
}
