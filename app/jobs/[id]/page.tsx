import Link from 'next/link'
import { MapPin, Briefcase, DollarSign, Clock, ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'

// Mock data - in production, this would come from the database
const mockJobs: Record<string, any> = {
  '1': {
    id: '1',
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120k - $180k',
    description: 'We are looking for an experienced Full Stack Developer to join our growing team.',
    postedAt: '2 days ago',
    requirements: [
      '5+ years of experience with React and Node.js',
      'Strong understanding of TypeScript',
      'Experience with PostgreSQL or similar databases',
      'Familiarity with cloud platforms (AWS, GCP, or Azure)',
      'Excellent problem-solving skills',
    ],
    responsibilities: [
      'Design and develop scalable web applications',
      'Collaborate with cross-functional teams',
      'Write clean, maintainable code',
      'Participate in code reviews',
      'Mentor junior developers',
    ],
    benefits: [
      'Competitive salary and equity',
      'Health, dental, and vision insurance',
      'Flexible work schedule',
      '401(k) matching',
      'Professional development budget',
    ],
  },
}

export default function JobDetailPage({ params }: { params: { id: string } }) {
  const job = mockJobs[params.id]

  if (!job) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/jobs"
        className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Jobs
      </Link>

      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="mb-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
              <p className="text-xl text-gray-700">{job.company}</p>
            </div>
            <span className="text-sm text-gray-500">{job.postedAt}</span>
          </div>

          <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              <span>{job.type}</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              <span>{job.salary}</span>
            </div>
          </div>

          <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
            Apply Now
          </button>
        </div>

        <hr className="my-8" />

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Job Description</h2>
            <p className="text-gray-700">{job.description}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Requirements</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {job.requirements.map((req: string, index: number) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Responsibilities</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {job.responsibilities.map((resp: string, index: number) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {job.benefits.map((benefit: string, index: number) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
            Apply for this Position
          </button>
        </div>
      </div>
    </div>
  )
}
