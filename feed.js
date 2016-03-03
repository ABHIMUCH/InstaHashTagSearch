var tag = window.prompt("Search for a HashTag","");
var feed = new Instafeed({
  clientId: '467ede5a6b9b48ae8e03f4e2582aeeb3',
  limit: 20,
  get: 'tagged',
  tagName: tag,
  useHttp: true
});
feed.run();
