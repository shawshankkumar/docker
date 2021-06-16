import fastify from "fastify";
import { nanoid } from "nanoid";

const server = fastify();

server.get("/", async (req, reply) => {
  try {
    reply.status(200);
    return { password: nanoid(), success: true };
  } catch (err) {
    reply.status(500);
    return { success: false, message: "failed to create a secure password" };
  }
});

server.listen(3000, (err, address) => {
  if (err) {
    console.error(err);
  }
  console.log(`Server listening at ${address}`);
});
