import { api } from "encore.dev/api";
import { hello } from "~encore/clients";

interface Response {
  greeting: string;
}

export const greeting = api(
  { method: "GET", expose: true, path: "/greeting/:name" },
  async ({ name }: { name: string }): Promise<Response> => {
    const { message } = await hello.get({
      name
    });
    return {
      greeting: message
    };
  }
)
