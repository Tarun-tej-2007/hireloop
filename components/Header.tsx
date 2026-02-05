"use client"

import Link from 'next/link'
import { UserButton, useAuth } from '@clerk/nextjs'
import { Briefcase } from 'lucide-react'

export default function Header() {
  const { userId } = useAuth()

  return (
    <header className="bg-white shadow-sm border-b">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary-600">
            <Briefcase className="w-8 h-8" />
            <span>Hire-Loop</span>
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href="/jobs"
              className="text-gray-700 hover:text-primary-600 font-medium transition"
            >
              Browse Jobs
            </Link>

            {userId ? (
              <>
                <Link
                  href="/post-job"
                  className="text-gray-700 hover:text-primary-600 font-medium transition"
                >
                  Post Job
                </Link>
                <Link
                  href="/dashboard"
                  className="text-gray-700 hover:text-primary-600 font-medium transition"
                >
                  Dashboard
                </Link>
                <UserButton afterSignOutUrl="/" />
              </>
            ) : (
              <>
                <Link
                  href="/sign-in"
                  className="text-gray-700 hover:text-primary-600 font-medium transition"
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-up"
                  className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}
