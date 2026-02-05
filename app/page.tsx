import Link from 'next/link'
import { Briefcase } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-primary-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Briefcase className="w-16 h-16" />
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Welcome to Hire-Loop
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-slate-100">
            Connect talented professionals with amazing opportunities. 
            Find your next career move or discover the perfect candidate.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/jobs"
              className="bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition"
            >
              Browse Jobs
            </Link>
            <Link
              href="/post-job"
              className="bg-white/10 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition border-2 border-white/60"
            >
              Post a Job
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            Why Choose Hire-Loop?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
              <div className="text-primary-600 text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Fast & Easy</h3>
              <p className="text-slate-600">
                Post jobs and receive applications in minutes. Our streamlined process makes hiring effortless.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
              <div className="text-primary-600 text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Quality Candidates</h3>
              <p className="text-slate-600">
                Connect with pre-screened, qualified professionals ready to make an impact.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
              <div className="text-primary-600 text-4xl mb-4">💼</div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Modern Platform</h3>
              <p className="text-slate-600">
                Built with the latest technology for a seamless experience on any device.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-50 via-indigo-50 to-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Ready to Get Started?</h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Join thousands of companies and job seekers using Hire-Loop to build amazing teams.
          </p>
          <Link
            href="/sign-up"
            className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition inline-block"
          >
            Create Free Account
          </Link>
        </div>
      </section>
    </div>
  )
}
