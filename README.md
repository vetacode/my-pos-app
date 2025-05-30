# Day 1 : Start Setup Project

Before you start and running this project, you need to install the following tools:

1. Make sure you already have or install node.js/npm.
2. Clone this project [https://github.com/RheinSullivan/simple-post_nextjs.git](https://github.com/RheinSullivan/simple-post_nextjs.git).
3. Install the dependencies by running `npm install`.
4. Renaming the `.env.example` component to `.env` is mandatory.
5. Run `npm run dev` to start the development server.

## Clerk Setup

1. Sign up for a account at [https://clerk.com](https://clerk.com).
2. Create a new project application.
3. Once the app is created, get the following values from the Clerk Dashboard:
   1. Publishable Key
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   2. Secret Key
   - `CLERK_SECRET_KEY`

Add them to the `.env` file.

```.env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

## Supabase Setup

1. Register for an account at [https://supabase.com](https://supabase.com).
2. Create a new project.
3. In the Supabase dashboard, click on your project name in the topbar.
4. Click the **Connect** button on the top right.
5. Open the **ORMs** tab.
6. Copy the .env.local file provided, and insert it into the variable below.
7. Don't forget to replace `YOUR_PASSWORD` in the string with your database password (can be found in **Project Settings > Database**).

Add them to the `.env` file:

```env
# Connect to Supabase via connection pooling
DATABASE_URL=your_supabase_connection_pooling_url

# Direct connection to the database. Used for migrations
DIRECT_URL=your_supabase_direct_connection_url
```

>

## Migrate & Push Database

1. Run the `npx prisma migrate dev` command to create a new table in the database.
2. Run the `npm run db:push` command to push the changes to the database.

# Day 2 :

# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Drizzle](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
