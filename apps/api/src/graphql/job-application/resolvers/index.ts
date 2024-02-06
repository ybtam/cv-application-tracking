import {JobApplicationQueryResolver} from "@graphql/job-application/resolvers/job-application/query-resolver";
import {JobApplicationMutationResolver} from "@graphql/job-application/resolvers/job-application/mutation-resolver";

export const jobApplicationResolvers = [
 JobApplicationQueryResolver,
  JobApplicationMutationResolver
] as const
