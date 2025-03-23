test("GET to /api/v1/status returns 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status"); // todo: use global variable for base url
  expect(response.status).toBe(200);
});
