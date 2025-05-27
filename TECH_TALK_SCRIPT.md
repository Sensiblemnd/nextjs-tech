# Next.js Tech Talk

Next.js, Server and Client Components.

- Next.js is a React framework that provides structure, features, and optimizations for your web applications
- Created and maintained by Vercel,
- The project was created with `create-next-app`, which sets up everything automatically

App structure:

```
src/
  app/                   # App Router root directory
    page.tsx             # Home page ('/') route
    layout.tsx           # Root layout (wraps all pages)
    condo-client/        # Client-rendered condo page
      page.tsx
    condo-server/        # Server-rendered condo page
      page.tsx
      loading.tsx        # Loading UI for server page
    api/                 # API routes
      condos/
        route.ts         # Condo data endpoint
    components/          # Shared components
    types/               # TypeScript definitions
```

## Next.js App Router (5 minutes)

In our project, we're using the App Router, which was introduced in Next.js 13 and is now the recommended approach:

1. **File-based routing**: Each folder represents a route segment, with `page.tsx` files defining routes

2. **Server-first approach**: Components are server components by default

## Client vs Server Components Deep Dive (15 minutes)

### Server Components (Demo: `/condo-server`)

Key points about server components:

- Marked with `"use server"` or implicitly server components by default in App Router
- Can fetch data directly on the server without additional client-side requests
- Reduce client-side JavaScript - better performance and SEO
- Can access server resources directly (files, databases)
- Cannot use browser-specific APIs or React hooks
- Cannot have interactivity that requires client-side state

### Client Components (Demo: `/condo-client`)

- Marked with `"use client"` directive at the top of the file
- Can use React hooks (useState, useEffect, etc.)
- Can access browser APIs and handle client-side events
- Ship more JavaScript to the client, which can impact performance
- Two-step rendering process (initial HTML + hydration)
- Better for interactive UI elements that need client state

  - Server components: Faster Time-to-First-Byte (TTFB) and First Contentful Paint (FCP)
  - Client components: Slower initial load due to hydration

1. **JavaScript Payload**:

   - Server components: Less JS sent to the browser
   - Client components: More JS to handle state and interactivity

2. **Data Fetching**:
   - Server components: Data fetching on server = fewer client-side requests
   - Client components: Additional roundtrip for data after JS loads

## Best Practices

1. Use server components by default for:

   - Data fetching
   - Static or content-heavy pages
   - SEO-critical content

2. Use client components for:

   - Interactive UI elements (forms, accordions, tabs)
   - Features that need browser APIs
   - Real-time updates with hooks

3. Component composition pattern:
   - Server components can import and render client components
   - Client components cannot import and use server components directly

## Additional Features

1. **Turbopack**: Faster development experience (we're using it in this project)
2. **Built-in optimizations**:
   - Image optimization with next/image
3. **Route handlers**: API routes with modern Request/Response API
4. **Server Actions**: Form handling and mutations directly from server components

Resources :

- [Next.js Documentation](https://nextjs.org/docs)
- [React Server Components RFC](https://github.com/reactjs/rfcs/blob/main/text/0188-server-components.md)
- [Vercel's Performance Analytics](https://vercel.com/analytics)
