import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

const checkoutFunctionPath = "/.netlify/functions/create-checkout-session";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  for (const [key, value] of Object.entries(env)) {
    if (process.env[key] === undefined) {
      process.env[key] = value;
    }
  }

  return {
    plugins: [react(), localNetlifyCheckoutFunction()],
  };
});

function localNetlifyCheckoutFunction() {
  async function handleCheckoutRequest(req, res, next) {
    const requestUrl = req.url?.split("?")[0];

    if (requestUrl !== checkoutFunctionPath) {
      next();
      return;
    }

    const body = await readRequestBody(req);
    const { handler } = await import("./netlify/functions/create-checkout-session.js");
    const result = await handler({
      httpMethod: req.method,
      headers: {
        ...req.headers,
        origin: req.headers.origin || `http://${req.headers.host}`,
        "x-forwarded-host": req.headers.host,
        "x-forwarded-proto": "http",
      },
      body,
    });

    res.statusCode = result.statusCode || 200;

    for (const [header, value] of Object.entries(result.headers || {})) {
      res.setHeader(header, value);
    }

    res.end(result.body || "");
  }

  return {
    name: "local-netlify-checkout-function",
    configureServer(server) {
      server.middlewares.use(handleCheckoutRequest);
    },
    configurePreviewServer(server) {
      server.middlewares.use(handleCheckoutRequest);
    },
  };
}

function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => resolve(body));
    req.on("error", reject);
  });
}
