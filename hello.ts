addEventListener("fetch", (event) => {
  let rawheaders = event.request.headers.entries()
  let headers = []
  for (let v of rawheaders) {
    headers.push(v)
  }
  const json = JSON.stringify(
      {body: `${event.request.body}`,
        headers: `${headers}` })
  const response = new Response(json, {
    headers: { "content-type": "application/json; charset=UTF-8", },
  });
  event.respondWith(response);
});
