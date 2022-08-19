/** @jsx h */
import { Colibri, h, html, json, serve } from "./mod.ts";

const Link = (props) => (
  <a
    class="text-gray-400 hover:text-blue-500 hover:underline"
    href={props.href}
  >
    {props.text}
  </a>
);

const Feather = () => (
  <img
    class="w-16 h-16 inline"
    src="https://openmoji.org/data/color/svg/1FAB6.svg"
  />
);

const App = () => (
  <div class="flex flex-col w-full pt-6">
    <h1 class="text-blue-500 font-bold text-5xl mx-auto">
      <Feather /> Hola! <Feather />
    </h1>
    <div class="mx-auto mt-2">
      <Link href="/" text="Home" />
      <span class="mx-2" />
      <Link href="/api" text="API" />
    </div>
  </div>
);

serve({
  "/": () =>
    html(
      () => <App />,
      { title: "Colibri" },
    ),
  "/api": () =>
    json({
      versions: Colibri.versions,
    }),
});
