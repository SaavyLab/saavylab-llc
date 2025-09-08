SaavyLab LLC website — static Next.js app (App Router, Tailwind v4, TypeScript, Turbopack, Biome).

## Getting Started

Development server:

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Key files:

- `src/app/layout.tsx`: Global layout, header/footer, metadata
- `src/app/globals.css`: Theme tokens (Monokai Pro-inspired) + base styles
- `src/app/page.tsx`: Home page
- `src/app/{about,products,open-source,blog}/page.tsx`: Core pages
- `src/components/*`: UI components

Static export:

- `next.config.ts` uses `output: 'export'` for static hosting.

Formatting/linting:

- `pnpm run format` / `pnpm run lint` (Biome)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
