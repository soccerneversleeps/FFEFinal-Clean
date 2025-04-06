import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              // Remove fdprocessedid attributes that cause hydration errors
              setTimeout(function() {
                document.querySelectorAll('[fdprocessedid]').forEach(function(el) {
                  el.removeAttribute('fdprocessedid');
                });
              }, 0);
            })();
          `
        }} />
      </body>
    </Html>
  )
} 