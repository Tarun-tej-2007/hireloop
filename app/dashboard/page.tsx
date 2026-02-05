import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Briefcase, PlusCircle } from 'lucide-react'

export default async function DashboardPage() {
  const user = await currentUser()

  if (!user) {
    redirect('/sign-in')
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-slate-900">Dashboard</h1>
          <p className="text-slate-600">Manage your jobs and applications</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Link
            href="/post-job"
            className="bg-gradient-to-br from-primary-600 to-indigo-700 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition flex items-center gap-4"
          >
            <PlusCircle className="w-8 h-8" />
            <div>
              <h3 className="text-xl font-semibold">Post a New Job</h3>
              <p className="text-primary-100">Create a job listing</p>
            </div>
          </Link>

          <Link
            href="/jobs"
            className="bg-white border-2 border-primary-600 text-primary-700 p-6 rounded-lg shadow-md hover:bg-primary-50 transition flex items-center gap-4"
          >
            <Briefcase className="w-8 h-8" />
            <div>
              <h3 className="text-xl font-semibold">Browse Jobs</h3>
              <p className="text-primary-700">View all job listings</p>
            </div>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-slate-200">
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">Your Job Postings</h2>
          <div className="text-slate-500 text-center py-8">
            <Briefcase className="w-12 h-12 mx-auto mb-4 text-slate-400" />
            <p>No job postings yet. Create your first job listing!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
