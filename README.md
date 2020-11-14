# bad-gateway-pages
> Custom Bad Gateway Pages.

## installation
```shell
npm install -S @jswork/bad-gateway-pages
```

## usage
```conf
#site-wide error pages
error_page 500 502 503 504 node_modules/@jswork/bad-gateway-pages/dist/502.html;
```
