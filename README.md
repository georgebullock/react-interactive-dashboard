# REACT INTERACTIVE DASHBOARD

### OVERVIEW 

React Interactive Dashboard is a commenting application. The app will support
two user types: admin users and non-admin users. The only feature for non-admin
users is making comments (which post to a main thread) and deleting their own
comments. Admin users will be able to make comments, delete their own (and other
users) comments, and access an admin dashboard where they can view comment
analytics.

Shoutouts to my friends and former Aperto / IBM iX team leads that are still helping me out with advice and code reviews:
1. [@Sebastian-Fitzner](https://github.com/Sebastian-Fitzner)
1. [@giuseppeminnella](https://github.com/giuseppeminnella)

Seriously, thanks guys!

### THE PROJECT STACK

Bold items are required. All other items are “nice to haves”.

- **HTML** (Structure, semantics)
- **CSS** (Layout, styling, transitions, animations)
- Emotion (CSS in JS library)
- **React** (UI library)
- **React router** (Routing)
- **Redux** (State management)
- Formik (Form handling)
- Redux Form (Form handling)
- TBD Redux Async Library (Async data handling)
- **GraphQL** (Data handling)
- **node.js** (Server)
- **MySQL** (Storage)
- **ESLint** (Linting)
- **Prettier** (Formatting)
- **TypeScript** (Type checking)
- **Jest + React Testing Library** (Unit Testing)
- **Cypress** (Integration and E2E testing)
- **Circle CI** (Continuous integration)

> ⚠️ Warning: The project uses husky and lint-staged to prevent you from
> committing code that doesn't pass validation (i.e. formatting, linting, and
> type checking).

### SETUP IS EASY 👇

##### Step 1:

```bash
git clone git@github.com:georgebullock/react-interactive-dashboard.git
```

##### Step 2:

```bash
yarn install
```

##### Step 3:

```bash
yarn start
```

> ⚠️ Warning: **The project requires node v12.6.0**.

> 💡 Tip: If you're using nvm, you can run `nvm use` to automatically switch to
> v12.6.0.

> 💡 Tip: Check out the `scripts` object (inside the `package.json`) for
> additional commands.

### ADDITIONAL INFORMATION

#### Project Motivation:

I'm doing this project to level up my "back of the frontend", testing (TDD, integration, E2E), and React skills.

#### Project Status:

Active. Work in progress.

#### Project Roadmap:

1. Node server
1. MySQL database
1. Node API
1. Static React app
1. Stateful React app
1. Server communication
1. GraphQL proxy

#### Known Issues:

None that I'm aware of. If you find something feel free to create an issue or send me a pull request.
