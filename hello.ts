addEventListener("fetch", (event) => {
  const response = new Response(event.reqeust, {
    headers: { "content-type": "application/json; charset=UTF-8", },
  });
  event.respondWith(response);
});
