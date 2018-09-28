# penthouse-274-issue

This repo serves as an environment to reproduce the [penthouse issue 274](https://github.com/pocketjoso/penthouse/issues/274).

## Reproducing

To run the stuff:

```
npm run start
```

This will start:

* https-server
* deelay - it'll delay the image referenced in public/index.html
* penhouse

After 35 seconds you'll get the puppeteer timeout.
