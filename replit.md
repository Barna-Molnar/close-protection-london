# Adam Roszkop Security Website

## Overview

This is a professional security services website for Adam Roszkop Security, a London-based security company specializing in close protection, asset security, and executive protection services. The application is a single-page website featuring a modern, premium design with dark mode support, built to convey trust, authority, and professionalism. The site includes sections for services, company information, and a contact form for client inquiries.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR (Hot Module Replacement)
- Wouter for lightweight client-side routing (single-page application with "/" and 404 routes)

**UI Component System:**
- Shadcn UI component library (New York style variant) for consistent, accessible components
- Radix UI primitives for headless, accessible component foundations
- Tailwind CSS for utility-first styling with custom design tokens
- Class Variance Authority (CVA) for managing component variants

**State Management:**
- TanStack Query (React Query) for server state management and data fetching
- React Hook Form with Zod for form validation and type-safe form handling
- Local component state with React hooks

**Design System:**
- Custom HSL-based color system with support for light and dark themes
- Theme persistence using localStorage with system preference fallback
- Premium professional aesthetic following design guidelines (understated authority, visual restraint)
- Typography using Inter font family from Google Fonts
- Responsive design with mobile-first approach

### Backend Architecture

**Server Framework:**
- Express.js server with TypeScript
- RESTful API architecture with a single `/api/contact` endpoint
- Custom middleware for request logging and error handling
- Development-only Vite middleware integration for HMR

**Data Validation:**
- Zod schemas shared between client and server for type-safe validation
- Centralized schema definitions in `shared/schema.ts`

**Development Features:**
- Separate development and production build processes
- ESBuild for production server bundling
- Custom logging with timestamp formatting
- Runtime error overlay in development (Replit plugin)

### Data Storage

**Current Implementation:**
- In-memory storage (`MemStorage` class) for contact form submissions
- Interface-based storage abstraction (`IStorage`) for future database integration
- Contact submissions stored as array of validated `ContactFormData` objects

**Database Preparation:**
- Drizzle ORM configured with PostgreSQL dialect
- Neon Database serverless driver integrated
- Database connection configured via `DATABASE_URL` environment variable
- Migration setup in place (migrations directory configured)
- Schema definitions ready in `shared/schema.ts`

**Note:** The application is configured to use PostgreSQL via Drizzle ORM but currently uses in-memory storage. Database tables can be created by running `npm run db:push` once a PostgreSQL database is provisioned.

### External Dependencies

**UI & Styling:**
- Tailwind CSS (3.x) - Utility-first CSS framework
- PostCSS with Autoprefixer - CSS processing
- Shadcn UI components - Pre-built accessible components
- Radix UI primitives - Headless UI component library
- Lucide React - Icon library

**Form & Validation:**
- React Hook Form - Form state management
- Zod - Schema validation
- @hookform/resolvers - Form validation integration

**Data Fetching:**
- TanStack Query - Server state management
- Native fetch API for HTTP requests

**Database (Configured):**
- Drizzle ORM - Type-safe ORM
- @neondatabase/serverless - Neon PostgreSQL driver
- drizzle-zod - Schema to Zod conversion

**Development Tools:**
- Vite plugins for Replit integration (cartographer, dev banner, runtime error modal)
- TypeScript with strict mode enabled
- ESBuild for production bundling

**Utilities:**
- date-fns - Date manipulation
- clsx & tailwind-merge - Conditional class merging
- nanoid - Unique ID generation
- cmdk - Command menu component