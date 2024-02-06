import {registerEnumType} from "type-graphql";

export enum JobApplicationStatus {
  APPLIED = 'APPLIED',
  REJECTED = 'REJECTED',
  PENDING = 'PENDING',
  REPLIED = 'REPLIED',
}

registerEnumType(JobApplicationStatus, {
  name: 'JobApplicationStatus'
});
