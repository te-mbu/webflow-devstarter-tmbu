# 🚀 Webflow Developer Starter

A minimal and reusable TypeScript starter for integrating custom code with Webflow projects. Features GSAP fade-in animations, modern build tools, and local development setup.

## ✨ Features

- 📦 TypeScript + Vite for modern development
- 🎨 GSAP + ScrollTrigger for smooth fade-in animations
- 🧹 ESLint + Prettier for clean code
- 🔄 Hot Module Replacement during development
- 📱 Production-ready, minified output
- 🧪 Local testing environment

## 🚀 Quick Start

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```
3. Start development server:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```
4. Open `tests/index.html` with Live Server to test locally

## 📦 Building for Production

1. Build the project:
   ```bash
   npm run build
   # or
   pnpm build
   ```
2. The output will be in `dist/main.js`
3. Upload this file to your preferred CDN (Netlify, Vercel, etc.)
4. Add the script to your Webflow site's custom code:
   ```html
   <script src="https://your-cdn.com/main.js"></script>
   ```

## 🎨 Using Fade-In Animations

This starter includes a simple fade-in animation that you can add to any element in your Webflow project.

### How to Use

1. In Webflow, add the `fade-in` class to any element you want to animate:

   ```html
   <!-- Example: Adding fade-in to a heading -->
   <h1 class="heading-style fade-in">Your Heading</h1>

   <!-- Example: Adding fade-in to an image -->
   <img class="image-style fade-in" src="your-image.jpg" />

   <!-- Example: Adding fade-in to a section -->
   <div class="section fade-in">Your content</div>
   ```

2. The animation will automatically trigger when the element comes into view.

### Animation Details

Elements with the `fade-in` class will:

- Start slightly offset upward (30px)
- Start with 0 opacity (invisible)
- Smoothly animate to their natural position
- Fade in to full opacity
- Duration: 1 second
- Easing: Power4 out (smooth acceleration/deceleration)
- Trigger when the element enters the viewport
- Reverse when the element leaves the viewport

## 📝 Development Workflow

1. Build your layout in Webflow
2. Add the `fade-in` class to elements you want to animate
3. Test locally with `pnpm dev`
4. Build with `pnpm build`
5. Upload `dist/main.js` to your CDN
6. Add the script to Webflow's custom code section

## 🧹 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Check code quality
- `pnpm format` - Format code with Prettier

## 📚 Dependencies

- GSAP (with ScrollTrigger)
- TypeScript
- Vite
- ESLint
- Prettier

## 🤝 Contributing

Feel free to submit issues and enhancement requests!
