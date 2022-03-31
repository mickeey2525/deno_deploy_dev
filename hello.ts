addEventListener("fetch", (event) => {

  const headers = event.request.headers.values().map(
    m => m
  )

  const json = JSON.stringify(
      {body: `${event.request.body}`,
        headers: `${headers}` })
  const response = new Response(json, {
    headers: { "content-type": "application/json; charset=UTF-8", },
  });
  event.respondWith(response);
});
