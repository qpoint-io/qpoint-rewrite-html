# qpoint-rewrite-html

A Qpoint adapter for rewriting the response html using the HtmlRewriter rules

## Usage

Note: This adapter is useless without registered HtmlRewriter rules. Usually this adapter is added after other adapters that register rules.

```ts
import Endpoint from "@qpoint/endpoint";
import rewriteHtml from "@qpoint/rewrite-html";

export default new Endpoint()
  .use(rewriteHtml())
```

## Installation

```bash
npm add @qpoint/rewrite-html
```

