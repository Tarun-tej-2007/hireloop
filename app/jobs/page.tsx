import Link from 'next/link'
import { MapPin, Briefcase, DollarSign, Clock } from 'lucide-react'

// Mock data - in production, this would come from the database
const mockJobs = [
  {
    id: '1',
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120k - $180k',
    description: 'We are looking for an experienced Full Stack Developer to join our team.',
    postedAt: '2 days ago',
  },
  {
    id: '2',
    title: 'Product Designer',
    company: 'Design Studio',
    location: 'Remote',
    type: 'Full-time',
    salary: '$90k - $130k',
    description: 'Join our creative team to design beautiful user experiences.',
    postedAt: '1 week ago',
  },
  {
    id: '3',
    title: 'DevOps Engineer',
    company: 'CloudScale',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$110k - $160k',
    description: 'Help us build and maintain our cloud infrastructure.',
    postedAt: '3 days ago',
  },
  {
    id: '4',
    title: 'Frontend Developer',
    company: 'StartupXYZ',
    location: 'Austin, TX',
    type: 'Contract',
    salary: '$80k - $120k',
    description: 'Build responsive and performant web applications.',
    postedAt: '5 days ago',
  },
]

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-slate-900">Browse Jobs</h1>
        <p className="text-slate-600">Discover your next career opportunity</p>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-slate-200">
        <div className="grid md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Job title or keyword"
            className="border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
          />
          <input
            type="text"
            placeholder="Location"
            className="border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
          />
          <button className="bg-primary-600 text-white rounded-lg px-6 py-2 hover:bg-primary-700 transition">
            Search Jobs
          </button>
        </div>
      </div>

      {/* Jobs List */}
      <div className="space-y-4">
        {mockJobs.map((job) => (
          <Link
            key={job.id}
            href={`/jobs/${job.id}`}
            className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition border border-slate-200"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-semibold mb-2 text-slate-900">{job.title}</h2>
                <p className="text-lg text-slate-700 mb-2">{job.company}</p>
              </div>
              <span className="text-sm text-slate-500">{job.postedAt}</span>
            </div>

            <p className="text-slate-600 mb-4">{job.description}</p>

            <div className="flex flex-wrap gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Briefcase className="w-4 h-4" />
                <span>{job.type}</span>
              </div>
              <div className="flex items-center gap-1">
                <DollarSign className="w-4 h-4" />
                <span>{job.salary}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      </div>
    </div>
  )
}
