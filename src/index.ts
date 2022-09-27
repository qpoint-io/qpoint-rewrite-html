import { Context } from '@qpoint/router'

export interface RewriteHtmlConfig {
  // nothing for now
}

// adapter registration
export default function rewriteHtml(config: RewriteHtmlConfig) {
  // return middleware
  return function run(context: Context, next: Function) {
    // grab the response headers
    const headers = context.response.headers;

    // extract the content-type from the response
    const contentType = headers.get("Content-Type") || headers.get('content-type');

    // if it's html, let's transform
    if (contentType?.startsWith("text/html"))
      context.response = context.htmlRewriter.transform(context.response);

    // continue along
    return next()
  }
}