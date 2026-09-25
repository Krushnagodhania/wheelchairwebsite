# AccessCheck WAV

React/Vite website for the AccessCheck WAV taxi council verification service.

## Netlify Build Settings

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `22`

These settings are also included in `netlify.toml`, so Netlify should detect them automatically.

## Stripe Setup

Add this environment variable in Netlify before deploying:

```sh
STRIPE_SECRET_KEY=your_stripe_secret_key
```

The checkout button uses a Netlify Function at `/.netlify/functions/create-checkout-session`
to create a one-time Stripe Checkout payment for the Council Desk plan at `£399`.
Do not use a Stripe Payment Link for this button unless that link is also configured
as a `£399` product, because Payment Links carry their own Stripe-side price.

## Local Development

```sh
npm install
npm run dev
```

Plain Vite is configured to serve the local checkout endpoint at
`/.netlify/functions/create-checkout-session`, so the Stripe button works during
local development as long as you have this in `.env`:

```sh
STRIPE_SECRET_KEY=your_stripe_secret_key
```

You can also run with Netlify Dev:

```sh
npm run dev:netlify
```

For production Stripe checkout, deploy the full project/repository to Netlify.
Do not deploy only the `dist/` folder by drag-and-drop, because that will omit
the Netlify Function and the checkout endpoint will return `404`.

## Production Build

```sh
npm run build
```

The production files will be generated in `dist/`.
