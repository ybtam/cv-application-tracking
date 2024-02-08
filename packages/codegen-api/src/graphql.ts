/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any; }
};

export type CreateJobApplicationInput = {
  company: Scalars['String']['input'];
  status: JobApplicationStatus;
  title: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type JobApplication = {
  __typename?: 'JobApplication';
  company?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id: Scalars['String']['output'];
  status: JobApplicationStatus;
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export enum JobApplicationStatus {
  Accepted = 'ACCEPTED',
  Closed = 'CLOSED',
  Pending = 'PENDING',
  Rejected = 'REJECTED',
  Replied = 'REPLIED'
}

export type Mutation = {
  __typename?: 'Mutation';
  createJobApplication: JobApplication;
  deleteJobApplication: Scalars['Boolean']['output'];
  updateJobApplication: JobApplication;
};


export type MutationCreateJobApplicationArgs = {
  input: CreateJobApplicationInput;
};


export type MutationDeleteJobApplicationArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateJobApplicationArgs = {
  input: UpdateJobApplicationInput;
};

export type Query = {
  __typename?: 'Query';
  jobApplications: Array<JobApplication>;
};

export type UpdateJobApplicationInput = {
  company?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  status?: InputMaybe<JobApplicationStatus>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};
