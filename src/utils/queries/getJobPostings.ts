import { gql } from '@apollo/client/core'
import { useQuery } from '@vue/apollo-composable'

export const getJobPostings = () => {
  const GET_JOB_POSTINGS = gql`
    query GetJobPosting {
        jobs {
          apply_now_link
          apply_now_via_email
          created_at
          description
          id
          posted_by
          salary_currency
          salary_type
          title
          updated_at
          salary_amount
        }
        job_categories {
          job_id
          category_id
          created_at
          id
        }
        categories {
          id
          name
        }
        job_tags {
          id
          job_id
          tag_id
          created_at
          updated_at
        }
        tags {
          id
          name
        }
      }`

  const query = useQuery(GET_JOB_POSTINGS)
  return query
}
