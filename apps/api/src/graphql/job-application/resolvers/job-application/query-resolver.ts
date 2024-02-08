import {Ctx, Query, Resolver} from "type-graphql";
import {JobApplication} from "@graphql/job-application/entities/job-application";
import type {myContext} from "@/utils/create-server";

@Resolver(() => JobApplication)
export class JobApplicationQueryResolver{
  @Query(() => [JobApplication])
  async jobApplications(@Ctx() {em}: myContext) {
    return await em.find(JobApplication, {
      deletedAt: null
    }, {
      orderBy: {
        status: "ASC"
      }
    });
  }
}
