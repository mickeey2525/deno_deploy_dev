addEventListener("fetch", (event) => {
  // Get the value of the header named `x-forwarded-for`.
  // The value can either be a IPv4 or IPv6 address.
  const ip = event.request.headers.get("x-forwarded-for");
  const json = JSON.stringify({
    IP: `${ip}`
  })
  const response = new Response(json, {
    headers: { "content-type": "application/json; charset=UTF-8", },
  });
  event.respondWith(response);
});
