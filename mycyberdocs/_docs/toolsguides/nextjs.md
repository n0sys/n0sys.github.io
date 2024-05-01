# NextJs

## Installation

### New project steps

- Create next app: npx create-next-app@latest DIR --use-npm
- cd DIR
- Run the server: npm run dev
- Install prisma to configure the database connection: npm install prisma --save-dev
- npx prisma init
- Add models to schema.prisma
- Edit .env file to connect to db
- Push models to database: npx prisma db push
- npm install @prisma/client
- When you change schema.prisma, run: npx prisma generate

### Notes

- [Dynamic page routing](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes)
- [getStaticPaths Usage](https://nextjs.org/docs/pages/api-reference/functions/get-static-paths)
- [Docs](https://nextjs.org/docs)
- [Deploy next js on render](https://render.com/docs/deploy-nextjs-app)

### TODO

- [Check use client](https://stackoverflow.com/questions/74965849/youre-importing-a-component-that-needs-usestate-it-only-works-in-a-client-comp)

## Prisma

### Installation

- Tuto: [Vercel Prisma Docs](https://vercel.com/guides/nextjs-prisma-postgres)
- API Docs: [API](https://www.prisma.io/docs/reference/api-reference/prisma-client-reference)

### Quick commands

- On schema.prisma change: npx prisma generate
- Push changes to db: npx prisma db push
- Add entry: npx prisma studio

## NextAuth

### Installation

- Docs: [Docs](https://next-auth.js.org/getting-started/)
- Tuto: [Youtube Tuto](https://www.youtube.com/watch?v=w2h54xz6Ndw&t=1s)

## Migrate from React to Next

### CSS
- Change css `file.css` to `file.module.css`
- Change `import "./file.css"` to `import styles from "./file.module.css"`
- Change css classess from "Class-Name" to {styles.classname}
- Remove `-` from css classes
- Move global css entries (h1, h2, body) to global.css

### File Structure

- Move screens/components/hooks/navigation to the same directory as pages/
- Move App.js to pages/PAGE_NAME

### File Contents

- Remove react-router-dom imports
- Remove <Route> <BrowserRoute> and return component directly
- Change `import { Link } from react` to import Link from 'next/link' then change `<Link to=HREF>` to `<Link href=HREF>`
- Might need to fix imports

### Dependencies

- Install dependencies (check for errors and the content of the received package.json)
- Dont install react-router-dom !

## React-icons

- [Content](https://react-icons.github.io/react-icons/search)
