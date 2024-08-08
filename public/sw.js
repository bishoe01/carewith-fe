if (!self.define) {
  let e,
    s = {};
  const n = (n, a) => (
    (n = new URL(n + ".js", a).href),
    s[n] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = n), (e.onload = s), document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (a, t) => {
    const i =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[i]) return;
    let c = {};
    const o = (e) => n(e, i),
      r = { module: { uri: i }, exports: c, require: o };
    s[i] = Promise.all(a.map((e) => r[e] || o(e))).then((e) => (t(...e), c));
  };
}
define(["./workbox-1bb06f5e"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/app-build-manifest.json",
          revision: "6e0bb79fd8442469efab70e2cdd01711",
        },
        {
          url: "/_next/static/U6B7aqjDXNlVNWKQFuYeR/_buildManifest.js",
          revision: "2ec694eb52ae4f523f265a46bae4d768",
        },
        {
          url: "/_next/static/U6B7aqjDXNlVNWKQFuYeR/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/23-17d109591ec31f31.js",
          revision: "U6B7aqjDXNlVNWKQFuYeR",
        },
        {
          url: "/_next/static/chunks/app/_not-found/page-846bc14f8cdb3714.js",
          revision: "U6B7aqjDXNlVNWKQFuYeR",
        },
        {
          url: "/_next/static/chunks/app/layout-ac89638fbdfee659.js",
          revision: "U6B7aqjDXNlVNWKQFuYeR",
        },
        {
          url: "/_next/static/chunks/app/ocrtest/page-3c6f8cf9f0273bdb.js",
          revision: "U6B7aqjDXNlVNWKQFuYeR",
        },
        {
          url: "/_next/static/chunks/app/page-ffc06cd4473239c6.js",
          revision: "U6B7aqjDXNlVNWKQFuYeR",
        },
        {
          url: "/_next/static/chunks/fd9d1056-be48aeae6e94b8d1.js",
          revision: "U6B7aqjDXNlVNWKQFuYeR",
        },
        {
          url: "/_next/static/chunks/framework-f66176bb897dc684.js",
          revision: "U6B7aqjDXNlVNWKQFuYeR",
        },
        {
          url: "/_next/static/chunks/main-706de12687d96a4c.js",
          revision: "U6B7aqjDXNlVNWKQFuYeR",
        },
        {
          url: "/_next/static/chunks/main-app-796422085e54ab41.js",
          revision: "U6B7aqjDXNlVNWKQFuYeR",
        },
        {
          url: "/_next/static/chunks/pages/_app-6a626577ffa902a4.js",
          revision: "U6B7aqjDXNlVNWKQFuYeR",
        },
        {
          url: "/_next/static/chunks/pages/_error-1be831200e60c5c0.js",
          revision: "U6B7aqjDXNlVNWKQFuYeR",
        },
        {
          url: "/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",
          revision: "79330112775102f91e1010318bae2bd3",
        },
        {
          url: "/_next/static/chunks/webpack-d27b648d47101208.js",
          revision: "U6B7aqjDXNlVNWKQFuYeR",
        },
        {
          url: "/_next/static/css/5c82740833f54fed.css",
          revision: "5c82740833f54fed",
        },
        {
          url: "/fonts/NanumBarunGothic.otf",
          revision: "d11ade1ea8c7ce5896e5806c45e30eda",
        },
        {
          url: "/fonts/NanumBarunGothicBold.otf",
          revision: "4f50b8678a5cf8f3c39e6b2e5430af24",
        },
        {
          url: "/fonts/NanumBarunGothicLight.otf",
          revision: "a78ff05521dd156eac459117836eb6a0",
        },
        {
          url: "/icons/icon-192x192.png",
          revision: "05baa3e9e26c04a0f8a784202436d4cc",
        },
        {
          url: "/icons/icon-256x256.png",
          revision: "02031ae03f8b6a1a29be4f9228c32160",
        },
        {
          url: "/icons/icon-384x384.png",
          revision: "9fab03405275ee521528664a4d550af7",
        },
        {
          url: "/icons/icon-512x512.png",
          revision: "99981cb456ddc9cdc80e2fd0df871606",
        },
        { url: "/manifest.json", revision: "05b1c0ce50873719a4b25900af1575b9" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: n,
              state: a,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
