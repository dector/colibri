/** @jsx h */
import { Colibri, h, serve, html, json } from './colibri.mjs';

const App = () => (
  <div class="flex w-full pt-6">
    <h1 class="text-green-500 font-bold text-5xl mx-auto">Hello world!</h1>
  </div>
);

serve({
  "/": () => html(() => <App />),
  "/api": () => json({ versions: Colibri.versions }),
});

