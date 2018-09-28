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

```
(node:23108) UnhandledPromiseRejectionWarning: TimeoutError: Navigation Timeout Exceeded: 30000ms exceeded
[2]     at Promise.then (/home/hermann/workspace/penthouse-274-issue/node_modules/puppeteer/lib/NavigatorWatcher.js:94:21)
[2]     at <anonymous>
[2] (node:23108) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)
[2] (node:23108) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```
