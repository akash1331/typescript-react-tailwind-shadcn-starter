# TypeScript React Tailwind Shadcn Starter

A modern, production-ready starter template for React applications built with TypeScript, Tailwind CSS, and Shadcn/ui components. Get up and running quickly with a solid foundation that includes essential features like theme management, particle effects, and smooth animations.

## ✨ Features

- ⚡ **Vite** - Lightning-fast development and build tool
- ⚛️ **React 18** - Latest React with modern hooks and features
- 🔷 **TypeScript** - Full type safety and enhanced developer experience
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid styling
- 🧩 **Shadcn/ui** - High-quality, accessible component library
- 🌓 **Theme Toggle** - Built-in dark/light mode with smooth transitions
- ✨ **Particle Effects** - Interactive background animations using TSParticles
- 🎭 **Framer Motion** - Smooth animations and transitions
- 📱 **Responsive Design** - Mobile-first approach with full responsiveness
- 🔧 **ESLint** - Code quality and consistency enforcement
- 📦 **pnpm** - Fast, efficient package management

## 🛠️ Tech Stack

### Core

- **React** 18.3.1 - Modern React with hooks and concurrent features
- **TypeScript** 5.4.5 - Static type checking and enhanced IDE support
- **Vite** 5.2.11 - Next-generation frontend build tool

### Styling & UI

- **Tailwind CSS** 3.4.3 - Utility-first CSS framework
- **Shadcn/ui** - Radix-based component library with Tailwind
- **Tailwind Merge** - Utility for merging Tailwind classes
- **Class Variance Authority** - Type-safe variant API for components

### Animations & Effects

- **Framer Motion** 12.23.9 - Production-ready motion library
- **TSParticles** 3.8.1 - Lightweight particles library

### Icons & Theming

- **Lucide React** 0.378.0 - Beautiful & consistent icon toolkit
- **React Icons** 5.5.0 - Popular icon libraries as React components
- **next-themes** 0.4.6 - Theme management without flash

### Development Tools

- **ESLint** - Code linting and quality enforcement
- **PostCSS** - CSS transformation and optimization
- **pnpm** - Fast, disk space efficient package manager

## 📁 Project Structure

```text
typescript-react-tailwind-shadcn-starter/
├── src/
│   ├── components/
│   │   ├── ThemeToggle.tsx      # Dark/light mode toggle component
│   │   └── utils/
│   │       └── ParticlesBg.tsx  # Interactive particle background
│   ├── css/
│   │   └── styles.css           # Additional custom styles
│   ├── lib/
│   │   └── utils.ts             # Utility functions (cn helper, etc.)
│   ├── assets/
│   │   └── react.svg            # React logo asset
│   ├── App.tsx                  # Main application component
│   ├── main.tsx                 # Application entry point
│   ├── index.css                # Global styles & Tailwind imports
│   └── vite-env.d.ts            # Vite environment types
├── components.json              # Shadcn/ui configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── vite.config.ts              # Vite build configuration
├── tsconfig.json               # TypeScript configuration
├── postcss.config.js           # PostCSS configuration
├── package.json                # Project dependencies & scripts
└── pnpm-lock.yaml              # Lock file for consistent installs
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended) or npm/yarn

### Installation

1. **Use this template**
   
   Click the "Use this template" button on GitHub or clone the repository:

   ```bash
   git clone <repository-url>
   cd typescript-react-tailwind-shadcn-starter
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start the development server**

   ```bash
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` to see the starter template in action.

## 📜 Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build the project for production
- `pnpm preview` - Preview the production build locally
- `pnpm lint` - Run ESLint to check for code issues

## 🎨 Customization

### Adding Shadcn/ui Components

This starter comes pre-configured with Shadcn/ui. Add new components easily:

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add dialog
# ... and many more
```

### Theme Customization

Customize the theme system built with `next-themes`:

- **Colors**: Edit `tailwind.config.js` to modify the color palette
- **CSS Variables**: Update `src/index.css` for custom theme properties
- **Theme Toggle**: Modify `src/components/ThemeToggle.tsx` for custom toggle behavior

### Particle Effects

Customize the particle background in `src/components/utils/ParticlesBg.tsx`:

- Particle density and count
- Color schemes and opacity
- Animation speed and behavior
- Mouse interaction effects

### Project Structure

This starter provides a solid foundation. Common next steps:

- Add routing with React Router
- Implement state management (Zustand, Redux Toolkit)
- Add forms with React Hook Form + Zod validation
- Integrate APIs and data fetching
- Add testing with Vitest and Testing Library

## 🌐 Deployment

### Build for Production

```bash
pnpm build
```

The build artifacts will be stored in the `dist/` directory.

### Deploy to Vercel

1. Push your code to a Git repository
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy your site

### Deploy to Netlify

1. Build the project: `pnpm build`
2. Upload the `dist/` folder to Netlify
3. Or connect your Git repository for automatic deployments

## 🚀 What's Next?

This starter template gives you a solid foundation. Here are some suggested next steps:

### Essential Additions

- **Routing**: Add React Router for navigation
- **State Management**: Implement Zustand or Redux Toolkit
- **Forms**: Add React Hook Form with Zod validation
- **API Integration**: Set up data fetching with TanStack Query
- **Testing**: Configure Vitest and React Testing Library

### UI Enhancements

- Add more Shadcn/ui components as needed
- Implement layout components (Header, Footer, Sidebar)
- Create reusable form components
- Add loading and error states

### Performance & Production

- Configure environment variables
- Set up error boundaries
- Add SEO meta tags
- Implement analytics
- Configure CI/CD pipeline

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ **If this starter template helped you, please give it a star!**
