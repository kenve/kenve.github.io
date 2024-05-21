---
slug: link-and-meta
title: prefetch 和 preload 等的区别
tags: [网络, html5]
---

## 网络解析

- dns-prefetch：DNS 预解析。`<link rel="dns-prefetch" herf="//example.com">`；
- preconnect：不光会解析 DNS，还会建立 TCP 握手连接和 TLS 协议（如果需要)。`<link rel="preconnect" href="http://css-tricks.com">`；
<!--truncate-->

## 资源获取和加载

- prefetch：一个低优先级的资源提示，支持预拉取（在后台（空闲时））图片、脚本或者任何可以被浏览器缓存的资源（在未来一定会使用到某个资源时）。`<link rel="prefetch" href="image.png">`；
- subresource：可以用来指定资源是最高优先级的。rel=prefetch 指定了下载后续页面用到资源的低优先级，而 rel=subresource 则是指定当前页面资源的提前加载。所以，如果资源是在当前页面需要，或马上会用到，则用 subresource，否则还是用 prefetch。`<link rel="subresource" href="styles.css"> `；
- prerender：可以让浏览器提前加载指定页面的所有资源。`<link rel="prerender" href="/thenextpage.html">`；
- preload：允许始终预加载（当前页面）某些资源（优先级），增强版 prefetch 和 subresource。`<link rel="preload" href="image.png"> <link rel="preload" href="https://example.com/fonts/font.woff" as="font" crossorigin>`；

## 安全

- CSP（[内容安全策略](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP)），配置获取的白名单，`<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src https://*; child-src 'none';">`。
- SRI（[子资源完整性](https://developer.mozilla.org/zh-CN/docs/Web/Security/Subresource_Integrity)），是允许浏览器检查其获得的资源（例如从 CDN 获得的）是否被篡改的一项安全特性。它通过验证获取文件的哈希值是否和你提供的哈希值一样来判断资源是否被篡改，`<script src="https://example.com/example-framework.js" integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC" crossorigin="anonymous"></script>`。
