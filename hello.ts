addEventListener("fetch", (event) => {
  let headers = event.request.headers.entries()
  console.log(headers)
  const json = JSON.stringify(
      {body: `${event.request.body}`,
        headers: `${headers}` })
  const response = new Response(json, {
    headers: { "content-type": "application/json; charset=UTF-8", },
  });
  event.respondWith(response);
});
