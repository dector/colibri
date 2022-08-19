import { json, serve } from "https://deno.land/x/sift@0.5.0/mod.ts";
import { h, ssr } from "https://crux.land/nanossr@0.0.5";

interface Opts {
  title: string,
}

const html = async (render, opts: Opts) => {
  let resp = ssr(render);

  if (opts && 'title' in opts) {
    const newBody = (await resp.text())
      .replace(
        "</head>",
        `<title>${opts.title}</title>\n</head>`,
      );

    resp = new Response(newBody, {
      headers: resp.headers,
      status: resp.status,
    });
  }

  return resp;
};

const Colibri = {
  versions: {
    colibri: '0.0.1',
    sift: '0.5.0',
    nanossr: '0.0.5',
  },
}

export {
  Colibri,
  h,
  serve,
  json,
  html,
}
