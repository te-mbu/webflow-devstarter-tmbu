# Webflow Developer Starter

A modern TypeScript starter for building custom code in Webflow projects. This starter kit provides a robust development environment with best practices and tooling for building maintainable, type-safe custom code.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Development Workflow](#development-workflow)
- [Version Management](#version-management)
- [Continuous Integration](#continuous-integration)
- [Best Practices](#best-practices)
- [NPM Access Token Setup](#npm-access-token-setup)
- [CDN Deployment](#cdn-deployment)
- [Git Hooks](#git-hooks)
- [Webflow.push() Usage](#webflowpush-usage)
- [Deploying with jsDelivr CDN](#deploying-with-jsdelivr-cdn)
- [NPM Access Token (for Changesets auto-publish)](#-npm-access-token-for-changesets-auto-publish)
- [MCP Integration (Managed Custom Code Preview)](#-mcp-integration-managed-custom-code-preview)
- [Contributing](#contributing)

## Features

- 🚀 [Vite](https://vitejs.dev/) for blazing-fast development and building
- 📦 [PNPM](https://pnpm.io/) for efficient package management
- 🔷 [TypeScript](https://www.typescriptlang.org/) for type safety
- 🧰 [@finsweet/ts-utils](https://github.com/finsweet/ts-utils) for Webflow-specific utility functions
- 📝 [Changesets](https://github.com/changesets/changesets) for versioning and changelogs
- 🎨 [Prettier](https://prettier.io/) for code formatting
- 🚨 [ESLint](https://eslint.org/) for code linting
- 🔄 GitHub Actions for continuous integration
- 🐶 [Husky](https://typicode.github.io/husky/) for Git hooks

## Project Structure

```
.
├── src/              # Source code
├── tests/            # Test files
├── .github/          # GitHub configuration
├── vite.config.ts    # Vite configuration
├── tsconfig.json     # TypeScript configuration
└── package.json      # Project dependencies and scripts
```

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Start development server:
   ```bash
   pnpm dev
   ```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint errors
- `pnpm format` - Format code with Prettier
- `pnpm check` - Type-check TypeScript files

## Development Workflow

1. Write your TypeScript code in the `src` directory
2. Use `pnpm dev` to start the development server
3. Build your code with `pnpm build`
4. The built files will be in the `dist` directory
5. Upload the built files to Webflow

## Version Management

This project uses [Changesets](https://github.com/changesets/changesets) for version management. To create a new version:

1. Run `pnpm changeset` to create a new changeset
2. Commit the changeset file
3. When ready to release, run `pnpm changeset version`
4. Commit the updated package.json and CHANGELOG.md

## Continuous Integration

The project includes GitHub Actions workflows that automatically:

- Install dependencies
- Run linting
- Build the project

This ensures that all code pushed to the repository maintains quality standards.

## Best Practices

1. Always write type-safe code
2. Use ESLint and Prettier to maintain code quality
3. Create changesets for significant changes
4. Write meaningful commit messages
5. Test your code before pushing

## NPM Access Token Setup

To publish packages to NPM using GitHub Actions, you'll need to set up an NPM Access Token:

1. Create an NPM Access Token:

   - Go to [NPM Account Settings](https://www.npmjs.com/settings/[your-username]/tokens)
   - Click "Generate New Token"
   - Select "Automation" token type
   - Copy the generated token

2. Add the token to GitHub:
   - Go to your repository's Settings
   - Navigate to "Secrets and variables" > "Actions"
   - Click "New repository secret"
   - Name: `NPM_TOKEN`
   - Value: Paste your NPM Access Token
   - Click "Add secret"

## CDN Deployment

You can deploy your built code to a CDN for better performance. Here's how:

1. Build your project:

   ```bash
   pnpm build
   ```

2. Deploy to your preferred CDN:

   - [Netlify](https://www.netlify.com/): Drag and drop the `dist` folder to Netlify's dashboard
   - [Vercel](https://vercel.com/): Connect your repository and set the build command to `pnpm build`
   - [Cloudflare Pages](https://pages.cloudflare.com/): Connect your repository and set the build command to `pnpm build`

3. After deployment, you'll get a CDN URL like:

   ```
   https://your-project.netlify.app/main.js
   ```

4. Add the script to Webflow:
   - Go to your Webflow project settings
   - Navigate to "Custom Code"
   - Add a new script tag:
     ```html
     <script src="https://your-project.netlify.app/main.js"></script>
     ```

## Git Hooks

This project uses Husky to enforce code quality before commits. The following checks run automatically before each commit:

- `pnpm lint`: Ensures code follows ESLint rules
- `pnpm check`: Verifies TypeScript types
- `pnpm format`: Formats code with Prettier

To skip these checks in an emergency, use:

```bash
git commit -m "your message" --no-verify
```

## Webflow.push() Usage

When adding custom code to Webflow projects, it's important to ensure your code runs after Webflow has finished loading. The `Webflow.push()` function provides a safe way to execute your code at the right time.

Example usage:

```ts
Webflow.push(() => {
  // Your code here
  console.log('Hello Webflow!');
});
```

This ensures your code runs after Webflow's core functionality is initialized, preventing potential race conditions and timing issues.

## Deploying with jsDelivr CDN

You can serve your built JavaScript files through jsDelivr's CDN for better performance and reliability. Here's how:

1. Push your `dist/main.js` file to a public GitHub repository
2. Use the following script tag in Webflow:

```html
<script src="https://cdn.jsdelivr.net/gh/USERNAME/REPO@VERSION/dist/main.js"></script>
```

Replace:

- `USERNAME` with your GitHub username
- `REPO` with your repository name
- `VERSION` with your release tag (e.g., v1.0.0)

Add this script in Webflow under Site Settings > Custom Code > Before </body> tag.

## 🔐 NPM Access Token (for Changesets auto-publish)

To enable automatic publishing via Changesets when PRs are merged:

1. Create an NPM Access Token:

   - Go to [npmjs.com](https://www.npmjs.com/)
   - Navigate to Account Settings > Access Tokens
   - Generate a new Automation token
   - Copy the token

2. Add to GitHub Repository Secrets:
   - Go to your repository Settings
   - Navigate to Secrets and Variables > Actions
   - Create a new repository secret
   - Name it `NPM_TOKEN`
   - Paste your NPM token as the value

This setup allows GitHub Actions to automatically publish new versions when Changeset PRs are merged.

## 🧪 MCP Integration (Managed Custom Code Preview)

This project supports Webflow MCP for real-time development without manually copy-pasting JavaScript into Webflow.

### Setup

Install the MCP CLI:

```bash
pnpm add -D @webflow/mcp
```

Start the local development server and MCP:

```bash
pnpm dev
pnpm mcp
```

The latest dist/main.js will be injected into your Webflow site through a secure preview tunnel.

You must be part of the MCP beta program or have access via Cursor Pro or Webflow Enterprise.

Follow .cursor-rules.md conventions for all architecture, file naming, and typing rules.

Optional: Create a webflow/ folder for storing metadata (site ID, page IDs, selectors, notes, etc.) if needed for automation.

### Usage

- `pnpm build` compiles your script
- `pnpm mcp` opens a preview tunnel and injects the script live into Webflow

## Contributing

Follow these best practices when contributing to the project:

1. **Use Feature Branches**

   - Create a new branch for each feature or fix
   - Use descriptive branch names (e.g., `feature/add-animation`, `fix/button-click`)

2. **Document Changes**

   - Run `pnpm changeset` before opening a PR
   - Describe your changes clearly in the changeset
   - Include both technical details and user-facing impacts

3. **Pull Request Process**

   - Open a pull request against the main branch
   - Wait for CI checks to complete
   - Address any review feedback
   - Ensure all tests pass

4. **Release Process**
   - After PR approval and merge, Changesets will create a release PR
   - This PR will include version bumps and changelog updates
   - Merging this PR will trigger automatic publishing

Remember to maintain code quality standards and follow the existing patterns in the codebase.

## 🧠 Cursor AI Usage

This project includes a `.cursor-rules.md` file at the root which defines comprehensive development rules for AI-assisted workflows using Cursor. This ensures that all code generation and modifications maintain consistent quality and structure across the project.

The rules file covers:

- Project architecture and folder organization
- Component structure and naming conventions
- Code style and TypeScript best practices
- DOM targeting and Webflow integration patterns
- Library usage and implementation standards

When working with Cursor AI, reference these rules by mentioning the `.cursor-rules.md` file in your prompts. For example:

> "Please create a new animation module for `[data-reveal]` elements using GSAP, following the conventions in `.cursor-rules.md`."

This helps maintain consistency between manual and AI-assisted contributions, ensuring all code follows the project's established patterns and quality standards.

## License

MIT
