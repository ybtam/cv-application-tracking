import OrmConnect from "@/utils/orm-connect";
import { EntityManager } from "@mikro-orm/postgresql";
import {createYoga} from "graphql-yoga";
import { buildSchema } from "type-graphql";
import {jobApplicationResolvers} from "@graphql/job-application/resolvers";

export type myContext = {
  em: EntityManager,
  request: Request
}


export async function createServer() {
  const schema = await buildSchema({
    emitSchemaFile: true,
    resolvers: [
      ...jobApplicationResolvers
    ]
  })

  const orm = await new OrmConnect().connect();

  return createYoga({
    context: async ({ request }): Promise<myContext> => ({ em:  orm.em.fork(), request}),
    schema
  })
}3
