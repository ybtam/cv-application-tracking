/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
};

export type CreateJobApplicationInput = {
  status: JobApplicationStatus;
  title: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type JobApplication = {
  __typename?: 'JobApplication';
  id: Scalars['String']['output'];
  status: JobApplicationStatus;
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export enum JobApplicationStatus {
  Applied = 'APPLIED',
  Pending = 'PENDING',
  Rejected = 'REJECTED',
  Replied = 'REPLIED'
}

export type Mutation = {
  __typename?: 'Mutation';
  createJobApplication: JobApplication;
};


export type MutationCreateJobApplicationArgs = {
  input: CreateJobApplicationInput;
};

export type Query = {
  __typename?: 'Query';
  jobApplications: Array<JobApplication>;
};

export type ApplicationsListQueryVariables = Exact<{ [key: string]: never; }>;


export type ApplicationsListQuery = { __typename?: 'Query', jobApplications: Array<{ __typename?: 'JobApplication', id: string, title: string, url: string, status: JobApplicationStatus }> };

export type AddApplicationMutationVariables = Exact<{
  input: CreateJobApplicationInput;
}>;


export type AddApplicationMutation = { __typename?: 'Mutation', createJobApplication: { __typename?: 'JobApplication', id: string } };


export const ApplicationsListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ApplicationsList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jobApplications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<ApplicationsListQuery, ApplicationsListQueryVariables>;
export const AddApplicationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddApplication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateJobApplicationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createJobApplication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<AddApplicationMutation, AddApplicationMutationVariables>;