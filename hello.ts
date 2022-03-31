addEventListener("fetch", (event) => {
  const json = JSON.stringify(
      {body: `${event.request.body}`, headers: `${event.request.headers}` })
  const response = new Response(json, {
    headers: { "content-type": "application/json; charset=UTF-8", },
  });
  event.respondWith(response);
});
