# CareNest 🏡

A modern, full-featured platform connecting caregivers with care seekers. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🌟 Features

- **User Authentication**

  - Email/Password authentication
  - Google OAuth integration
  - OTP verification
  - Password reset functionality
  - Email verification

- **Care Services**

  - Find qualified caregivers
  - Browse care providers
  - Book care services
  - Companion care
  - Home maker services
  - Transportation services
  - Sitter services

- **User Features**

  - User profiles
  - Saved caregivers
  - Recent bookings
  - Real-time messaging (inbox)
  - Service booking flow

- **Additional Features**
  - Blog section
  - FAQ pages
  - Contact page with floating contact button
  - Location-based services
  - Medicaid information
  - Veterans services
  - Resources section

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components:**
  - [Radix UI](https://www.radix-ui.com/)
  - [Lucide Icons](https://lucide.dev/)
  - Custom components with shadcn/ui
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Real-time Communication:** [Socket.IO](https://socket.io/)
- **Authentication:** [@react-oauth/google](https://www.npmjs.com/package/@react-oauth/google)
- **Forms & Validation:** React Hook Form patterns
- **Date Handling:** [date-fns](https://date-fns.org/), [react-datepicker](https://reactdatepicker.com/)
- **Notifications:** [React Toastify](https://fkhadra.github.io/react-toastify/)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v20 or higher)
- npm, yarn, pnpm, or bun package manager
- Git

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd care-nest
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory and add necessary environment variables:

   ```env
   NEXT_PUBLIC_API_URL=your_api_url
   NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id
   # Add other environment variables as needed
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## 📁 Project Structure

```
care-nest/
├── public/                  # Static assets
│   ├── aboutUs/
│   ├── auth/
│   ├── Blog/
│   └── ...
├── src/
│   ├── app/                # Next.js app router pages
│   │   ├── (auth)/        # Authentication routes
│   │   └── (main)/        # Main application routes
│   ├── components/        # React components
│   │   ├── auth/         # Authentication components
│   │   ├── common/       # Shared components
│   │   ├── careGiver/    # Caregiver-specific components
│   │   ├── ui/           # UI components (shadcn/ui)
│   │   └── ...
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions and types
│   ├── store/            # Redux store and slices
│   └── types/            # TypeScript type definitions
├── components.json       # shadcn/ui configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── next.config.ts        # Next.js configuration
```

## 🎨 Key Features Implementation

### Authentication Flow

The app implements a complete authentication system with:

- Sign up/Sign in pages
- Email verification
- OTP verification
- Password reset flow
- Google OAuth integration

### Booking System

Multi-step booking flow including:

1. Choose care path
2. Enter zip code
3. Browse caregivers
4. Schedule care
5. Confirmation

### Real-time Features

- Socket.IO integration for real-time messaging
- Notification system
- Live updates

## 🔧 Configuration

### Tailwind CSS

Custom configuration with CSS variables for theming. See `tailwind.config.ts` and `globals.css`.

### Image Optimization

Configured remote image patterns for:

- AWS S3 (creative-story bucket)
- Unsplash
- Google/Gmail avatars

## 📱 Responsive Design

The application is fully responsive with:

- Mobile-first approach
- Tablet optimization
- Desktop layouts
- Touch-friendly interactions

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 📞 Contact

For support or inquiries:

- Phone: [(832) 237-2273](tel:8322372273)
- Email: [Contact through website](contact page)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Design inspiration from modern healthcare platforms

---

**Note:** Make sure to configure all environment variables before running the application. Contact the development team for the complete `.env.local` template.
