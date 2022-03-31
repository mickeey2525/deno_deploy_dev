addEventListener("fetch", (event) => {
  const json = JSON.stringify(
      {body: `${event.request.body}`,
        headers: `${Array.form(event.request.headers.values().entries())}` })
  const response = new Response(json, {
    headers: { "content-type": "application/json; charset=UTF-8", },
  });
  event.respondWith(response);
});
