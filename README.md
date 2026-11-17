# AccessCheck WAV

React/Vite website for the AccessCheck WAV taxi council verification service.

## Netlify Build Settings

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `22`

These settings are also included in `netlify.toml`, so Netlify should detect them automatically.

## Stripe Payment Link

The Council Desk plan displays a one-off price of `£11`. Its payment button opens:

https://buy.stripe.com/aFa14n40B1mu5ym7ab9Zm00

The amount charged is controlled by this Payment Link in Stripe. Configure the
linked product for a one-off `£11` payment in Stripe to match the website.
The payment button does not require a Stripe secret key or a Netlify Function.

The legacy `create-checkout-session` function is retained for compatibility and
uses `£11` (1100 pence) if called. It still requires `STRIPE_SECRET_KEY`.

## Local Development

```sh
npm install
npm run dev
```

## Production Build

```sh
npm run build
```

The production files will be generated in `dist/`.
