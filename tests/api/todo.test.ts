import request from 'supertest';

const baseURL = "http://localhost:3000";

describe("POST /api/todo/create", () => {
  test("Trying to save a todo without data should give 500", async () => {
    const response = await request(baseURL).post('/api/todo/create');
    expect(response.status).toEqual(500);
  })
});
