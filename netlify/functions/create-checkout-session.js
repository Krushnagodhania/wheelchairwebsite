const COUNCIL_DESK_AMOUNT = 39900;

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return jsonResponse(405, { error: "Method not allowed." });
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return jsonResponse(500, { error: "Stripe is not configured." });
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return jsonResponse(400, { error: "Invalid request body." });
  }

  if (payload.plan !== "council_desk") {
    return jsonResponse(400, { error: "Unknown checkout plan." });
  }

  const origin = getOrigin(event);
  const params = new URLSearchParams();
  params.append("mode", "payment");
  params.append("success_url", `${origin}/?checkout=success`);
  params.append("cancel_url", `${origin}/#pricing`);
  params.append("payment_method_types[0]", "card");
  params.append("line_items[0][quantity]", "1");
  params.append("line_items[0][price_data][currency]", "gbp");
  params.append("line_items[0][price_data][unit_amount]", String(COUNCIL_DESK_AMOUNT));
  params.append("line_items[0][price_data][product_data][name]", "AccessCheck WAV Council Desk");
  params.append(
    "line_items[0][price_data][product_data][description]",
    "One-time wheelchair accessible taxi verification test payment for council licensing teams.",
  );
  params.append("metadata[plan]", "council_desk");

  const stripeResponse = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  });

  const session = await stripeResponse.json();

  if (!stripeResponse.ok) {
    return jsonResponse(stripeResponse.status, {
      error: session.error?.message || "Stripe checkout could not be created.",
    });
  }

  return jsonResponse(200, { url: session.url });
}

function getOrigin(event) {
  const forwardedHost = event.headers["x-forwarded-host"];
  const forwardedProto = event.headers["x-forwarded-proto"] || "https";

  if (event.headers.origin) {
    return event.headers.origin;
  }

  if (forwardedHost) {
    return `${forwardedProto}://${forwardedHost}`;
  }

  if (process.env.URL) {
    return process.env.URL;
  }

  return "http://localhost:8888";
}

function jsonResponse(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
}
