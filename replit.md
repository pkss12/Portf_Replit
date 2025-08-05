# Portfolio Website

## Overview

This is a modern portfolio website built for Patrick dos Santos, Analista de Gestão at Era Técnica Engenharia Construções e Serviços LTDA since August 2021. The application is a full-stack TypeScript project featuring a React frontend with a Node.js/Express backend. The site showcases his expertise in Integrated Logistics, Operational Excellence, Process Improvement, and Data Analysis, with a focus on AI applications in logistics.

## User Preferences

Preferred communication style: Simple, everyday language in Portuguese.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **State Management**: TanStack Query for server state and React Context for theme management
- **Animations**: Framer Motion for smooth transitions and scroll-based animations
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API design with JSON responses
- **Storage**: In-memory storage (MemStorage) with interface for future database integration
- **Validation**: Zod schemas for request/response validation
- **Development**: Hot module replacement and error handling middleware

### Data Storage Solutions
- **Current**: In-memory storage using JavaScript Maps for development
- **Schema**: Drizzle ORM schema definitions for PostgreSQL ready for production
- **Database Ready**: Configured for Neon Database (PostgreSQL) with connection pooling
- **Migration Support**: Drizzle Kit for database schema migrations

### Component Architecture
- **Design System**: Modular component library with consistent styling
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Accessibility**: ARIA-compliant components from Radix UI
- **Theme System**: Dark/light mode support with CSS custom properties
- **Motion Design**: Progressive enhancement with Framer Motion animations

### Portfolio Features
- **Hero Section**: Professional introduction with animated elements showcasing current role at Era Técnica
- **About Section**: Educational background including MBA, specializations, and current Microsoft Data Analysis course
- **Experience Timeline**: Detailed current role with specific responsibilities and achievements
- **Skills Showcase**: Technical skills (Excel Advanced, Power BI, VBA, Office Scripts) and process management capabilities  
- **Languages Section**: Multi-language capabilities (Portuguese native, English/Spanish intermediate)
- **Projects Portfolio**: Real work projects including process automation, dashboards, and AI applications in logistics
- **Future Goals**: Academic and professional objectives including AI specialization and maritime logistics research
- **Contact Form**: Functional contact form with São Paulo location and real contact information

## External Dependencies

### Core Framework Dependencies
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight client-side routing
- **framer-motion**: Animation library for React components
- **zod**: Schema validation for forms and API requests

### UI and Styling
- **@radix-ui/***: Accessible, unstyled UI primitives (accordion, dialog, dropdown, etc.)
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant API for component styling
- **lucide-react**: Icon library with consistent design

### Database and Backend
- **drizzle-orm**: TypeScript ORM for PostgreSQL
- **@neondatabase/serverless**: Serverless PostgreSQL connection driver
- **connect-pg-simple**: PostgreSQL session store (configured but not actively used)

### Development Tools
- **vite**: Build tool and development server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production builds
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Replit integration for development

### Form Handling
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Form validation resolvers for Zod integration

### Utilities
- **date-fns**: Date manipulation and formatting
- **clsx** and **tailwind-merge**: Conditional CSS class composition
- **nanoid**: Unique ID generation