import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import PostJobForm from '@/components/PostJobForm'

export default async function PostJobPage() {
  const user = await currentUser()

  if (!user) {
    redirect('/sign-in')
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2 text-slate-900">Post a New Job</h1>
            <p className="text-slate-600">Fill in the details to create your job listing</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 border border-slate-200">
            <PostJobForm />
          </div>
        </div>
      </div>
    </div>
  )
}
