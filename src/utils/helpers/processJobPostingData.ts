import type { JobPosting } from '../interface/job-posting'

export const processJobPostingData = (result: any): any => {
  const jobPosting: any[] = []

  const tags = result.tags as any[]
  const job_tags = result.job_tags as any[]
  const categories = result.categories as any[]
  const job_categories = result.job_categories as any[]
  const jobs = result.jobs as any[]

  jobs.forEach((job) => {
    const postingTags = job_tags.filter(e => e.job_id === job.id).map(e => e.id)
    const postingCategories = job_categories.filter(e => e.job_id === job.id).map(e => e.id)
    jobPosting.push({
      created_at: job.created_at,
      description: job.description,
      id: job.id,
      title: job.title,
      categories: categories.filter(e => postingCategories.includes(e.id)),
      tags: tags.filter(e => postingTags.includes(e.id)),
    } as JobPosting)
  })

  return jobPosting
}
