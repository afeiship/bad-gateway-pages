# bad-gateway-pages
> Custom Bad Gateway Pages.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]


## installation
```shell
npm install -S @jswork/bad-gateway-pages
```

## usage
```conf
#site-wide error pages
error_page 500 502 503 504 node_modules/@jswork/bad-gateway-pages/dist/502.html;
```

## resources
- https://stackoverflow.com/questions/7796237/custom-bad-gateway-page-with-nginx

## license
Code released under [the MIT license](https://github.com/afeiship/bad-gateway-pages/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/bad-gateway-pages
[version-url]: https://npmjs.org/package/@jswork/bad-gateway-pages

[license-image]: https://img.shields.io/npm/l/@jswork/bad-gateway-pages
[license-url]: https://github.com/afeiship/bad-gateway-pages/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/bad-gateway-pages
[size-url]: https://github.com/afeiship/bad-gateway-pages/blob/master/dist/bad-gateway-pages.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/bad-gateway-pages
[download-url]: https://www.npmjs.com/package/@jswork/bad-gateway-pages
