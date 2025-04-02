# Webflow Developer Starter

A modern TypeScript starter for building custom code in Webflow projects. This starter kit provides a robust development environment with best practices and tooling for building maintainable, type-safe custom code.

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

## License

MIT
