/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n        mutation DeleteApplication($id: String!) {\n          deleteJobApplication(id: $id)\n        }\n      ": types.DeleteApplicationDocument,
    "\n        mutation EditApplicationStatus($input: UpdateJobApplicationInput!) {\n          updateJobApplication(input: $input) {\n            id\n            status\n          }\n        }\n      ": types.EditApplicationStatusDocument,
    "\n      query ApplicationsList {\n        jobApplications {\n          id\n          title\n          url\n          status\n          company\n        }\n      }\n    ": types.ApplicationsListDocument,
    "\n        mutation AddApplication($input: CreateJobApplicationInput!) {\n          createJobApplication(input: $input) {\n            id\n          }\n        }\n      ": types.AddApplicationDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        mutation DeleteApplication($id: String!) {\n          deleteJobApplication(id: $id)\n        }\n      "): (typeof documents)["\n        mutation DeleteApplication($id: String!) {\n          deleteJobApplication(id: $id)\n        }\n      "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        mutation EditApplicationStatus($input: UpdateJobApplicationInput!) {\n          updateJobApplication(input: $input) {\n            id\n            status\n          }\n        }\n      "): (typeof documents)["\n        mutation EditApplicationStatus($input: UpdateJobApplicationInput!) {\n          updateJobApplication(input: $input) {\n            id\n            status\n          }\n        }\n      "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query ApplicationsList {\n        jobApplications {\n          id\n          title\n          url\n          status\n          company\n        }\n      }\n    "): (typeof documents)["\n      query ApplicationsList {\n        jobApplications {\n          id\n          title\n          url\n          status\n          company\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        mutation AddApplication($input: CreateJobApplicationInput!) {\n          createJobApplication(input: $input) {\n            id\n          }\n        }\n      "): (typeof documents)["\n        mutation AddApplication($input: CreateJobApplicationInput!) {\n          createJobApplication(input: $input) {\n            id\n          }\n        }\n      "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;