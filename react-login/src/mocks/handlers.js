import { http, HttpResponse } from 'msw';

const handlers = [
  http.post("/user/login", async ({ request }) => {
    try {
      const req = await request.json();
      console.log(req);
      if (req) {
        return HttpResponse.json({ accessToken: 'accessToken test', status: 200 })
      } else {
        throw new Error("Invalid request body");
      }
    } catch (error) {
      console.error(error);
      return HttpResponse.json({ error: error.message , status: 500 });
    }
  }),
];

export default handlers;