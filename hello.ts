addEventListener("fetch", (event) => {
  const json = JSON.stringify(
      {request: `${event.request}` })
  const response = new Response(json, {
    headers: { "content-type": "application/json; charset=UTF-8", },
  });
  event.respondWith(response);
});
