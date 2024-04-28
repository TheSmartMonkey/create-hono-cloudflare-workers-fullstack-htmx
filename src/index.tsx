import { html } from 'hono/html';
import { jsxRenderer } from 'hono/jsx-renderer';

export const renderer = jsxRenderer(({ children }) => {
  return html`
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          src="https://unpkg.com/htmx.org@1.9.11"
          integrity="sha384-0gxUXCCR8yv9FM2b+U3FDbsKthCI66oH5IA9fHppQq9DDMHuMauqq1ZHBpJxQ0J0"
          crossorigin="anonymous"
        ></script>
        <script src="//unpkg.com/alpinejs" defer></script>
        <link href="https://cdn.jsdelivr.net/npm/daisyui@4.10.2/dist/full.min.css" rel="stylesheet" type="text/css" />
        <script src="https://cdn.tailwindcss.com"></script>

        <title>Hono + htmx</title>
      </head>
      <body>
        <h1
          class="flex justify-center mb-20 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
        >
          We invest in the world’s potential
        </h1>
        ${children}
      </body>
    </html>
  `;
});
