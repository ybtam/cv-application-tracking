import {registerEnumType} from "type-graphql";

export enum JobApplicationStatus {
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
  PENDING = 'PENDING',
  REPLIED = 'REPLIED',
  CLOSED = 'CLOSED'
}

registerEnumType(JobApplicationStatus, {
  name: 'JobApplicationStatus'
});
