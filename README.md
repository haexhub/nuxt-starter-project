# Nuxt 3 Minimal Starter

This is a minimal (my favorite) starter stack, which wires a couple of packages with a basic configuration together for a quick start

- [@nuxt/image](https://image.nuxt.com/?utm_source=nuxt_website&utm_medium=modules)
- [@nuxtjs/i18n](https://nuxt.com/modules/i18n)
- [@nuxtjs/tailwindcss](https://nuxt.com/modules/tailwindcss)
- [@pinia/nuxt](https://nuxt.com/modules/pinia)
- [@sidebase/nuxt-auth](https://nuxt.com/modules/sidebase-auth)
- [@vueuse/nuxt](https://nuxt.com/modules/vueuse)
- [nuxt-snackbar](https://nuxt.com/modules/snackbar)
- [drizzle](https://orm.drizzle.team/)

It consists of a simple layout, where you can switch between a dark and light theme, select a language and a basic login page. Just enough to get you startet quickly.
It only contains tailwind as css framework but no component framework. This has to be choosen by yourself, if you feel the desire to have one.

## Setup

```
git clone https://github.com/haexhub/nuxt-starter-project
```

```
cd nuxt-starter-project
```

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Setup environment file

```
cp ./example.env ./.env
```

## Prepare Drizzle Migration

```bash
pnpm drizzle-kit generate
```

## Development Server

```bash
# npm
npm dev -o

# pnpm
pnpm dev -o

# yarn
yarn dev -o

# bun
bun dev -o
```

## Production

Build the application for production:

```bash
# npm
npm build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
