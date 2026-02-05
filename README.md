# Hire-Loop

### A Next.js Job Posting Platform

Hire-Loop is a job posting and talent discovery platform built with **Next.js App Router**.  
This project demonstrates **modern rendering strategies** and **production-ready environment & secrets management practices** used in real-world applications.

---

## 🚀 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Clerk Authentication**
- **PostgreSQL** (Neon)
- **Drizzle ORM**
- **Tailwind CSS**
- **Lucide Icons**

---

## 📋 Features

- 🔐 **Authentication** - Secure user authentication with Clerk
- 💼 **Job Listings** - Browse and search for job opportunities
- ✍️ **Post Jobs** - Authenticated users can create job postings
- 📊 **Dashboard** - Manage your job postings and applications
- 🎨 **Modern UI** - Beautiful, responsive design with Tailwind CSS
- 📱 **Mobile Responsive** - Works seamlessly on all devices

---

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- A Clerk account for authentication
- A Neon (PostgreSQL) database

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd hireloop
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   
   Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```

   Fill in your environment variables:
   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key

   # Database (Neon PostgreSQL)
   DATABASE_URL=your_neon_database_url
   ```

### Getting Your API Keys

#### Clerk Setup
1. Go to [clerk.com](https://clerk.com) and sign up/login
2. Create a new application
3. In the dashboard, go to **API Keys**
4. Copy the **Publishable Key** and **Secret Key**
5. Add them to your `.env` file

#### Neon Database Setup
1. Go to [neon.tech](https://neon.tech) and sign up/login
2. Create a new project
3. Copy the **Connection String**
4. Add it to your `.env` file as `DATABASE_URL`

### Database Setup

Run the database migrations:
```bash
npm run db:push
```

Or generate migrations:
```bash
npm run db:generate
npm run db:migrate
```

---

## 🚀 Running the Application

### Development Mode
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
hireloop/
├── app/                      # Next.js App Router pages
│   ├── api/                  # API routes
│   ├── dashboard/            # Dashboard pages
│   ├── jobs/                 # Job listing pages
│   ├── post-job/             # Post job page
│   ├── sign-in/              # Sign in page
│   ├── sign-up/              # Sign up page
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles
├── components/               # Reusable components
│   ├── Header.tsx            # Navigation header
│   └── PostJobForm.tsx       # Job posting form
├── lib/                      # Utility functions
│   ├── db.ts                 # Database connection
│   └── schema.ts             # Database schema
├── drizzle/                  # Database migrations
├── public/                   # Static assets
├── .env.example              # Environment variables template
├── drizzle.config.ts         # Drizzle ORM configuration
├── next.config.js            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies
```

---

## 🗄️ Database Schema

### Users Table
- User authentication managed by Clerk
- Stores user profile information

### Jobs Table
- Job postings created by users
- Includes title, company, location, salary, requirements, etc.

### Applications Table
- Job applications submitted by users
- Tracks application status

---

## 🎨 Key Pages

- **Home (`/`)** - Landing page with features and call-to-actions
- **Jobs (`/jobs`)** - Browse all job listings
- **Job Detail (`/jobs/[id]`)** - View individual job details
- **Post Job (`/post-job`)** - Create a new job posting (auth required)
- **Dashboard (`/dashboard`)** - Manage your jobs and applications (auth required)
- **Sign In (`/sign-in`)** - User authentication
- **Sign Up (`/sign-up`)** - New user registration

---

## 🔒 Authentication

This app uses **Clerk** for authentication, providing:
- Email/password sign up and sign in
- Social login (Google, GitHub, etc.)
- User management
- Session handling
- Protected routes

---

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add your environment variables in Vercel project settings
4. Deploy!

### Environment Variables for Production

Make sure to set these in your deployment platform:
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `DATABASE_URL`
- `NEXT_PUBLIC_APP_URL` (your production URL)

---

## 📝 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
npm run db:push      # Push schema changes to database
npm run db:generate  # Generate migrations
npm run db:migrate   # Run migrations
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Clerk for seamless authentication
- Neon for serverless PostgreSQL
- Tailwind CSS for beautiful styling

---

## 📧 Support

If you have any questions or need help, please open an issue in the repository.

---

**Built with ❤️ using Next.js**
