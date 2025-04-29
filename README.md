This is a Next.js project that uses TypeScript and App Router. For styling, we will be utilizing TailwindCSS.

## Getting Started

First, clone the project. After, if necessary, run `npm i`.

To run the project:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start working with your component by creating a separate file under the appropriate folder (may be specified in the github ticket). To test out your component, import it inside `/src/app/(public)/page.tsx`. The page auto-updates as you edit the file.

## Branching Conventions

`(type)/(issue_number)--(title-separated-with-dash)`

EXAMPLE:

- feat/1--setup-theme
- chore/2--upgrade-dependencies
- fix/3--build-errors

## Project Structure

- `public/images` will store all the images for the project
- `src/app/(public)` will contain all the public routes
- `src/components/pages` will contain all the completed elements of each page
- `src/components/sections` will contain the sections of components
- `src/components/ui` will contain elements that don't use other components (unless specified)
- `src/data` will contain json files or the like
- `src/lib/types` will contain custom data types/interfaces/classes

## Learn More

To learn more, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Additional Info
