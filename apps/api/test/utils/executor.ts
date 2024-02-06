import {createServer} from "@/utils/create-server";
import { buildHTTPExecutor } from "@graphql-tools/executor-http";
import "reflect-metadata";

export const createExecutor = async () => {
  const yoga = await createServer()

  return buildHTTPExecutor({
    endpoint: 'http://localhost:4000/graphql',
    fetch: yoga.fetch,
  })
}
