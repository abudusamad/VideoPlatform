# Next.js 14 Notion

![demo](/public/image/Screenshot%20from%202024-05-29%2021-50-41.png)



## 🌐 Live Demo

Explore the live demonstration of the project: [hnh-accommodation](https://front-end-smoky-eight.vercel.app/)

## 📝 Description

**Notion** is a Notion-like application built with Next.js 14, React, Convex, Tailwind, Clerk, and EdgeStore. It is a real-time database and Notion-style editor that allows you to create, edit, and delete documents. It also allows you to publish your note to the web.

<details><summary><b>Folder Structure</b></summary>

```bash
hotel-and-homestel-accommodation/
app
├── api
│   └── auth
│       └── [...nextauth]
│           └── route.ts
├── (auth)
│   └── auth
│       ├── confirm
│       │   └── page.tsx
│       ├── error
│       │   └── page.tsx
│       ├── layout.tsx
│       ├── login
│       │   └── page.tsx
│       ├── new-password
│       │   └── page.tsx
│       ├── register
│       │   └── page.tsx
│       └── reset
│           └── page.tsx
├── (dashboard)
│   ├── dashboard
│   │   └── page.tsx
│   └── layout.tsx
├── globals.css
├── layout.tsx
└── (marketing)
    ├── layout.tsx
    └── (routes)
        ├── _components
        │   ├── homePage
        │   │   ├── _components
        │   │   │   ├── cardsCarousel.tsx
        │   │   │   ├── communityCard.tsx
        │   │   │   ├── homepageavatardot.tsx
        │   │   │   └── homepageavatar.tsx
        │   │   ├── connect.tsx
        │   │   ├── hero.tsx
        │   │   ├── Interconection
        │   │   │   ├── constant.ts
        │   │   │   └── intersection.tsx
        │   │   ├── sayhello.tsx
        │   │   └── SoloToSocial
        │   │       ├── constant.ts
        │   │       └── solotosocial.tsx
        │   ├── navbar
        │   │   ├── avatarImage.tsx
        │   │   ├── logo.tsx
        │   │   ├── Navbar.tsx
        │   │   ├── search.tsx
        │   │   └── usermenu.tsx
        │   └── style
        │       ├── community.css
        │       ├── community.css.map
        │       ├── community.scss
        │       ├── connect.css
        │       ├── connect.css.map
        │       ├── connect.scss
        │       ├── intersection.css
        │       ├── intersection.css.map
        │       ├── intersection.scss
        │       ├── sayhello.css
        │       ├── sayhello.css.map
        │       └── sayhello.scss
        └── page.tsx


```
</details>

## 📖 Table of Contents

<details><summary>Table of Contents</summary>

- [Next.js 14 Notion](#nextjs-14-notion)
  - [🌐 Live Demo](#-live-demo)
  - [📝 Description](#-description)
  - [📖 Table of Contents](#-table-of-contents)
  - [✨ Technologies Used](#-technologies-used)
  - [🧰 Get Started](#-get-started)
    - [📋 Prerequisites](#-prerequisites)
    - [⚙️ Installation and Run Locally](#️-installation-and-run-locally)
    - [📜 Scripts](#-scripts)
  - [🔒 Environment Variables](#-environment-variables)
  - [🚀 Deployment](#-deployment)
      - [Deploy to production (manual)](#deploy-to-production-manual)
      - [Deploy on Vercel (recommended)](#deploy-on-vercel-recommended)
      - [Deploy on Netlify](#deploy-on-netlify)
  - [💡 Features](#-features)
  - [🔧 Contributing](#-contributing)
  - [💎 Acknowledgements](#-acknowledgements)
  - [📚 References](#-references)
  - [📞 Contact Us](#-contact-us)
  - [📜 License](#-license)
  - [Contributors](#contributors)

</details>

## ✨ Technologies Used

<details><summary><b>Notion</b> is built using the following technologies:</summary>

- [TypeScript](https://www.typescriptlang.org/): TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
- [Next.js](https://nextjs.org/): Next.js is a React framework for building server-side rendered and statically generated web applications.
- [Tailwind CSS](https://tailwindcss.com/): Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.
- [Convex](https://convex.dev/): Convex is a TypeScript-first ORM for Node.js and the browser.
- [Clerk](https://clerk.dev/): Clerk is a developer-first identity and user management service.
- [ESLint](https://eslint.org/): ESLint is a static code analysis tool for
  identifying problematic patterns found in JavaScript code.
- [Prettier](https://prettier.io/): Prettier is an opinionated code formatter.
- [Shadcn-UI](https://ui.shadcn.com/): Shadcn UI is a React UI library that helps developers rapidly build modern web applications.
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction): Zustand is a small, fast and scalable bearbones state-management solution.
- [BlockNote](https://blocknote.dev/): BlockNote is a Notion-like editor for React.
- [Zod](https://zod.dev/): Zod is a TypeScript-first schema declaration and validation library.
- [Vercel](https://vercel.com/): Vercel is a cloud platform for frontend developers, providing the frameworks, workflows, and infrastructure to build a faster, more personalized Web.

</details><br/>

[![Technologies Used](https://skillicons.dev/icons?i=ts,nextjs,tailwind,vercel)](https://skillicons.dev)

## 🧰 Get Started

To get this project up and running in your development environment, follow these step-by-step instructions.

### 📋 Prerequisites

In order to install and run this project locally, you would need to have the following installed on your local machine.

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/get-npm)https://notion-clone-jade-three.vercel.app
- [Git](https://git-scm.com/downloads)

### ⚙️ Installation and Run Locally

**Step 0:**

Note :bangbang: the application uses Convex for ORM, therefore, you need to create Convex account [here](https://convex.dev/) and sets the `CONVEX_DEPLOY_KEY` and `NEXT_PUBLIC_CONVEX_URL` environment variables in `.env` file.

Note :bangbang: the application uses Clerk for Authentication and User Management, therefore, you need to create Clerk account [here](https://clerk.dev/) and sets the `CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` environment variables in `.env` file.

Note :bangbang: the application uses EdgeStore for file uploads, therefore, you need to create EdgeStore account [here](https://edgestore.dev/) and sets the `EDGE_STORE_ACCESS_KEY` and `EDGE_STORE_SECRET_KEY` environment variables in `.env` file.

Also, you need to create a JWT template in Clerk and define the JWKS Endpoint as a provider inside `convex/auth.config.js` file.

**Step 1:**

Download or clone this repo by using the link below:

```bash
git clone https://github.com/abudusamad/notion-clone.git
```

**Step 2:**

Execute the following command in the root directory of the downloaded repo in order to install dependencies:

```bash
npm install
```

**Step 3:**

Execute the following command in order to run the development server locally:

```bash
npm run dev
```

**Step 4:**

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 📜 Scripts

All scripts are defined in the `package.json` file. Here is a list of all scripts:

| Script          | Action                                      |
| :-------------- | :------------------------------------------ |
| `npm install`   | Installs dependencies                       |
| `npm run dev`   | Starts local dev server at `localhost:3000` |
| `npm run build` | Build your production site to `./dist/`     |
| `npm run start` | Start your production site locally          |
| `npm run lint`  | Run ESLint                                  |

## 🔒 Environment Variables

Environment variables[^6] can be used for configuration. They must be set before running the app.

> [Environment variables](https://en.wikipedia.org/wiki/Environment_variable) are variables that are set in the operating system or shell, typically used to configure programs.

**Notion** uses [Convex](https://appwrite.io), and [Clerk](https://clerk.com) as external services. You need to create an accounts on Convex and Clerk and get the required credentials to run the app.

Create a `.env` file in the root directory of the project and add the following environment variables:

```env
CONVEX_DEPLOY_KEY=<CONVEX_DEPLOY_URL>
NEXT_PUBLIC_CONVEX_URL=<NEXT_PUBLIC_CONVEX_URL>

CLERK_PUBLISHABLE_KEY=<CLERK_PUBLISHABLE_KEY>
CLERK_SECRET_KEY=<CLERK_SECRET_KEY>

EDGE_STORE_ACCESS_KEY=<EDGE_STORE_ACCESS_KEY>
EDGE_STORE_SECRET_KEY=<EDGE_STORE_SECRET_KEY>

DATABASE_URL=<DATABASE_URL>
GOOGLE_CLIENT_ID=<GOOGLE_CLIENT>
GOOGLE_CLIENT_SECRET=<GOOGLE_SECRET>
GITHUB_ID=<GITHUB_ID>
GITHUB_SECRET=<GITHUB_SECRET>
NEXTAUTH_SECRET=<AUTH_SECRET>

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
NEXT_PUBLIC_CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=
```

## 🚀 Deployment

#### Deploy to production (manual)

You can create an optimized production build with the following command:

```bash
npm run build
```

#### Deploy on Vercel (recommended)

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fladunjexa%2Fnextjs14-notion)

#### Deploy on Netlify

You can also deploy this Next.js app with [Netlify](https://www.netlify.com/).

[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ladunjexa/nextjs14-notion)

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 💡 Features

- 🚀 Next.js 14 with server actions
- 🔑 Credentials Provider
- 🌐 OAuth Provider (Social login with Google & GitHub)
- 🔒 Forgot password functionality
- ✉️ Email verification
- 📱 Two factor verification
- 👥 User roles (Admin & User)
- 🔓 Login component (Opens in redirect or modal)
- 📝 Register component
- 🤔 Forgot password component
- ✅ Verification component
- ⚠️ Error component
- 🔘 Login button
- 🚪 Logout button
- 🚧 Role Gate
- 🔍 Exploring next.js middleware
- 📈 Extending & Exploring next-auth session
- 🔄 Exploring next-auth callbacks
- 👤 useCurrentUser hook
- 🛂 useRole hook
- 🧑 currentUser utility
- 👮 currentRole utility
- 🖥️ Example with server component
- 💻 Example with client component
- 👑 Render content for admins using RoleGate component
- 🛡️ Protect API Routes for admins only
- 🔐 Protect Server Actions for admins only
- 📧 Change email with new verification in Settings page
- 🔑 Change password with old password confirmation in Settings page
- 🔔 Enable/disable two-factor auth in Settings page
- 🔄 Change user role in Settings page (for development purposes only)
- Tailwind design
- Tailwind animations and effects
- Full responsiveness
- Credential authentication
- Google authentication
- Github authentication
- Image upload using Cloudinary CDN
- Client form validation and handling using react-hook-form
- Server error handling using react-toast
- Calendars with react-date-range
- Page loading state
- Page empty state
- Booking / Reservation system
- Guest reservation cancellation
- Owner reservation cancellation
- Creation and deletion of properties
- Pricing calculation
- Advanced search algorithm by category, date range, map location, number of guests, rooms and bathrooms
    - For example we will filter out properties that have a reservation in your desired date range to travel
- Favorites system
- Shareable URL filters
    - Lets say you select a category, location and date range, you will be able to share URL with a logged out friend in another browser and they will see the same results
- How to write POST and DELETE routes in route handlers (app/api)
- How to fetch data in server react components by directly accessing database (WITHOUT API! like Magic!)
- How to handle files like error.tsx and loading.tsx which are new Next 13 templating files to unify loading and error handling
- How to handle relations between Server and Child components!

## 🔧 Contributing



Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

To fix a bug or enhance an existing module, follow these steps:

1. Fork the repo
2. Create a new branch (`git checkout -b improve-feature`)
3. Make the appropriate changes in the files
4. Commit your changes (`git commit -am 'Improve feature'`)
5. Push to the branch (`git push origin improve-feature`)
6. Create a Pull Request 🎉


## 💎 Acknowledgements

I'd like to express my gratitude to the following people who helped me with this
project and made it possible:

- [Clerk](https://clerk.dev/)
- [Convex](https://convex.dev/)
- [EdgeStore](https://edgestore.dev/)
- [BlockNote](https://blocknote.dev/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [useHooks TS](https://usehooks-ts.com/)
- [Sonner](https://sonner.emilkowal.ski/)
- [Next Themes](https://ui.shadcn.com/docs/dark-mode/next)
- [Emoji Picker React](https://www.npmjs.com/package/emoji-picker-react)
- [React Dropzone](https://react-dropzone.js.org/)
- [React Textarea Autosize](https://www.npmjs.com/package/react-textarea-autosize)
- [Vercel](https://vercel.com/)



## 📚 References

- [Next.js Documentation](https://nextjs.org/docs)
- [Rea>ct Documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Convex Documentation](https://convex.dev/docs)
- [Clerk Documentation](https://docs.clerk.dev/)
- [EdgeStore Documentation](https://edgestore.dev/docs)
- [BlockNote Documentation](https://blocknote.dev/docs)
- [Zustand Documentation](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [useHooks TS Documentation](https://usehooks-ts.com/)
- [Sonner Documentation](https://sonner.emilkowal.ski/)
- [Next Themes Documentation](https://ui.shadcn.com/docs/dark-mode/next)
- [Emoji Picker React Documentation](https://www.npmjs.com/package/emoji-picker-react)
- [React Dropzone Documentation](https://react-dropzone.js.org/)
- [React Textarea Autosize Documentation](https://www.npmjs.com/package/react-textarea-autosize)
- [Vercel Documentation](https://vercel.com/docs)


## 📞 Contact Us
-[Twitter](https://twitter.com/abudusamad)
-[LinkedIn](https://www.linkedin.com/in/abubakar-samad-0b0b3b1b4/)
-[Email](mailto:abudusamadu.yahoo.com)
-[Portfolio](https://abudusamad.github.io/)


## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

<detail><summary> License</summary>

```md

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
```

</details>


## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):
<details>
<summary>Contributors</summary>

