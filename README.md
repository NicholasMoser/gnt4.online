# gnt4.online

Github repository for the [gnt4.online](https://www.gnt4.online) website.
Forked from the [smash64-online repo](https://github.com/smash64-dev/smash64-online)
for the [smash64.online](https://smash64.online/) website.

## Testing

To run the web server locally:

```bash
pip install -r requirements.txt
mkdocs serve
```

Note: This website uses a [CORS Proxy](https://rapidapi.com/guides/cors-proxy-apis) for downloading patches. The proxy can be found at [cors-proxy](https://github.com/NicholasMoser/cors-proxy).
The proxy currently only allows requests from gnt4.online, so these requests will fail when made
from `localhost`. Therefore, to test downloading patches you'll need to either update the existing
proxy to allow all hosts or replace the existing proxy host in `mkdocs.yml` with your own.