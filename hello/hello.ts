import { api, } from "encore.dev/api";


interface Response {
  message: string;
}
type getParams = { name?: string; };
export const get = api(
  { method: "GET", path: "/hello", expose: true },
  async ({ name = "" }: getParams): Promise<Response> => {
    return { message: `Hello, ${name || "world"}` };
  }
)
