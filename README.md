# BrandVid[logo](/public/logo.svg)

![demo](/public/image/Screenshot%20from%202024-05-29%2021-50-41.png)



## 🌐 Live Demo

Explore the live demonstration of the project: [BrandVid](https://video-platform-sable.vercel.app/)

## 📝 Description

**BrandVid** BrandVid is all about providing a bespoke video hosting platform that emphasizes brand consistency, content control, and a professional user experience. It caters to businesses, educators, and creative professionals who need a reliable and customizable 
solution for hosting and sharing their video content.

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

- [BrandVid](#brandvidlogo)
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

<details><summary><b>BrandVid</b> is built using the following technologies:</summary>

- [TypeScript](https://www.typescriptlang.org/): TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
- [Next.js](https://nextjs.org/): Next.js is a React framework for building server-side rendered and statically generated web applications.
- [Tailwind CSS](https://tailwindcss.com/): Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.
- [Prisma](https://www.prisma.io/): Prisma is a modern database access toolkit that makes it easy to build type-safe, composable database access.
- [React Hook Form](https://react-hook-form.com/): React Hook Form is a performant, flexible and extensible forms with easy-to-use validation.
- [React Query](https://react-query.tanstack.com/): React Query is a data-fetching library for React that helps you fetch, cache, and update data in your React applications.
- [ESLint](https://eslint.org/): ESLint is a static code analysis tool for identifying problematic patterns found in JavaScript code.
- [Prettier](https://prettier.io/): Prettier is an opinionated code formatter.
- [Shadcn-UI](https://ui.shadcn.com/): Shadcn UI is a React UI library that helps developers rapidly build modern web applications.
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction): Zustand is a small, fast and scalable bearbones state-management solution.
- [NextAuth.js](https://next-auth.js.org/): NextAuth.js is a complete open source authentication solution for Next.js applications.
- [useHooks TS](https://usehooks-ts.com/): useHooks TS is a collection of reusable React hooks.
- [NeonDb](https://neondb.dev/): NeonDb is a simple, fast, and lightweight database for your next project.
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

Note: The application uses Prisma for ORM, therefore, you need to create Convex account [here](https://www.prisma.io/)  `.env` file.

Note: The application uses AuthJs for Authentication and User Management, therefore, you need to create Auth account [here](https://www.prisma.io/) and sets the `AUTH_SECRET` environment variables in `.env` file.

Note: The application uses Uploadthing for file uploads, therefore, you need to create Uploadthing account [here](https://uploadthing.com/) and sets the `UPLOADTHING_APP_ID` and `UPLOADTHING_SECRET` environment variables in `.env` file.

Note: The application uses MuxPlayer for image and video preload, therefore, you need to create Cloudinary account [here](https://www.mux.com/player) and sets the `MUX_TOKEN_SECRET`,  and `MUX_TOKEN_ID` environment variables in `.env` file.

Note: The application uses Github and Google for OAuth, therefore, you need to create Github [here](https://github.com/) and Google OAuth account [here](https://console.cloud.google.com/) and sets the `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET`, `GOOGLE_CLIENT_ID`, and `GOOGLE_CLIENT_SECRET` environment variables in `.env` file.

Also, you need to create a JWT template in Clerk and define the JWKS Endpoint as a provider inside `/auth.config.js` file.


**Step 1:**

Download or clone this repo by using the link below:

```bash
git clone https://github.com/abudusamad/VideoPlatform.git
```

**Step 2:**

Execute the following command in the root directory of the downloaded repo in order to install dependencies:

```bash
npm install
```
or install with legacy peer dependencies which fixes with incompatible peer dependencies
```bash
npm install --legacy-peer-deps
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

Environment variables can be used for configuration. They must be set before running the app.

> [Environment variables](https://en.wikipedia.org/wiki/Environment_variable) are variables that are set in the operating system or shell, typically used to configure programs.

**BrandVide** uses . You need to create an accounts on Convex and Clerk and get the required credentials to run the app.

Create a `.env` file in the root directory of the project and add the following environment variables:

```env
AUTH_SECRET=

GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=


NEXT_PUBLIC_URL=http://localhost:3000
RESEND_API_KEY=

MUX_TOKEN_ID=
MUX_TOKEN_SECRET=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
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
- 🔔 Enable/disable two-factor auth in Settings page
- 🔄 Change user role in Settings page (for development purposes only)
- 🙋‍♂️Client form validation and handling using react-hook-form
- ✅❌Server error and success handling using react-toastisfy
- 📝Server form validation and handling using zod
- 🙎‍♀️Admin Can Create, Update, Delete, and View  Videos.🙎‍♀
- Users can only view videos and share the link to other users


## 💎 Acknowledgements

I'd like to express my gratitude to the following people who helped me with this
project and made it possible:

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
- [Zustand Documentation](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [useHooks TS Documentation](https://usehooks-ts.com/)
- [Sonner Documentation](https://sonner.emilkowal.ski/)
- [Next Themes Documentation](https://ui.shadcn.com/docs/dark-mode/next)
- [Emoji Picker React Documentation](https://www.npmjs.com/package/emoji-picker-react)
- [React Dropzone Documentation](https://react-dropzone.js.org/)
- [React Textarea Autosize Documentation](https://www.npmjs.com/package/react-textarea-autosize)
- [Vercel Documentation](https://vercel.com/docs)


## 📞 Contact Us
-[Twitter](https://twitter.com/MascotFord)
-[LinkedIn](https://www.linkedin.com/in/abudu1234/)
-[Email](mailto:abudusamadu.yahoo.com)
-[Github](https://github.com/abudusamad)


## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## Code of Conduct

Please read the [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md) for details on our code of conduct.


## Security Vulnerabilities

Please read the [SECURITY](SECURITY.md) for details on our security policy.

 