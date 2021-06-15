import fastify from "fastify";
import axios from "axios";

const server = fastify();

server.get("/", async (req, reply) => {
  try {
    const longUrl = await axios.get(
      `https://itnachota.herokuapp.com/api/fetch/link?code=${
        (req.query as any).code
      }`
    );
    reply.send(longUrl.data);
  } catch (err) {
    console.error(err.response.data || err.message);
    reply.status(err.response.status || 500);
    return err.response.data || err.message;
  }
});

server.listen(3000, (err, address) => {
  if (err) {
    console.error(err);
  }
  console.log(`Server listening at ${address}`);
});
