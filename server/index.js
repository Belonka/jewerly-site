import "dotenv/config";
import express from "express";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

import { connectDB } from "./src/db.js";
import { typeDefs } from "./src/schema/typeDefs.js";
import { resolvers } from "./src/schema/resolvers.js";

const PORT = process.env.PORT || 4000;

async function start() {
  await connectDB(process.env.MONGODB_URI);

  const app = express();

  app.use(cors());
  app.use(express.json());

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  app.use(
    "/graphql",
    expressMiddleware(server, {
      context: async () => ({
        S3_BASE_URL: process.env.S3_BASE_URL,
      }),
    })
  );

  app.get("/", (req, res) => res.send("OK"));

  app.listen(PORT, () => {
    console.log(` Server running: http://localhost:${PORT}`);
    console.log(` GraphQL endpoint: http://localhost:${PORT}/graphql`);
  });
}

start().catch((err) => {
  console.error(" Failed to start server:", err);
  process.exit(1);
});