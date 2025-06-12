This is a Next.js project that uses TypeScript and App Router. For styling, we will be utilizing TailwindCSS.

## Getting Started

First, clone the project. After, if there are errors, try this command in the terminal: `npm i`.

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

## Running the Project

Project is already partially connected with backend.

1. Clone the backend [https://github.com/SAMAHAN-Systems-Development/sysdev-website-backend](repository).
2. Follow the instructions in the "Production and Frontend Use setup" in the repo's documentation. Note that you'll have to install Docker.
3. You have to run the backend and frontend project at the same time.

Note: Projects and Members may appear with incorrect details or logic. It's because the project is still fetching dummy data from the backend and data is not final yet. Incorrect details may include: incorrect filtering of member roles in members page, missing officers in about-us, officers tab in members page displaying all the members, missing client names in projects, and no dev contributors in project modal.

## Testing the Contact Us page

Duplicate `.env.sample` file and rename it to `.env`

You can accomplish this manually or run this command:

```markdown
For Windows:
copy .env.sample .env

For Linux:
cp .env.sample .env
```

Then ask Kyle Lampa for the values. Replace the values in the .env file

## Learn More

To learn more, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
