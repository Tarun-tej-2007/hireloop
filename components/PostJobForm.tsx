'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function PostJobForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // In production, this would submit to an API route
    // For now, we'll just simulate a delay
    setTimeout(() => {
      setIsSubmitting(false)
      router.push('/dashboard')
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
          Job Title *
        </label>
        <input
          type="text"
          id="title"
          name="title"
          required
          className="w-full border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
          placeholder="e.g. Senior Full Stack Developer"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
          Company Name *
        </label>
        <input
          type="text"
          id="company"
          name="company"
          required
          className="w-full border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
          placeholder="e.g. TechCorp Inc."
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
            Location *
          </label>
          <input
            type="text"
            id="location"
            name="location"
            required
            className="w-full border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
            placeholder="e.g. San Francisco, CA or Remote"
          />
        </div>

        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
            Job Type *
          </label>
          <select
            id="type"
            name="type"
            required
            className="w-full border border-gray-300 bg-white text-gray-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
          >
            <option value="">Select type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-2">
          Salary Range
        </label>
        <input
          type="text"
          id="salary"
          name="salary"
          className="w-full border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
          placeholder="e.g. $120k - $180k"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
          Job Description *
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={4}
          className="w-full border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
          placeholder="Describe the role and what you're looking for..."
        />
      </div>

      <div>
        <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-2">
          Requirements
        </label>
        <textarea
          id="requirements"
          name="requirements"
          rows={4}
          className="w-full border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
          placeholder="List the requirements (one per line)..."
        />
      </div>

      <div>
        <label htmlFor="responsibilities" className="block text-sm font-medium text-gray-700 mb-2">
          Responsibilities
        </label>
        <textarea
          id="responsibilities"
          name="responsibilities"
          rows={4}
          className="w-full border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
          placeholder="List the key responsibilities (one per line)..."
        />
      </div>

      <div>
        <label htmlFor="benefits" className="block text-sm font-medium text-gray-700 mb-2">
          Benefits
        </label>
        <textarea
          id="benefits"
          name="benefits"
          rows={4}
          className="w-full border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
          placeholder="List the benefits (one per line)..."
        />
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Posting...' : 'Post Job'}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
