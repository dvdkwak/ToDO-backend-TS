import request from 'supertest';

const baseURL = "http://localhost:3000";

describe("GET /", () => {
  test("Basic test of the \"Home screen\"", async () => {
    const response = await request(baseURL).get('/');
    expect(response.body.message).toEqual("Hello there world!");
  })
});
