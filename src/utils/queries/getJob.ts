import { gql } from '@apollo/client/core'
import { useQuery } from '@vue/apollo-composable'

export const getJob = (jobId: number) => {
    const GET_JOB = gql`
    query GetJob {
        jobs(where: {id: {_eq: ${jobId}}}) {
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
          employerDetails {
            name
            id
            company_background
            address
            social_media_links_detials {
              facebook
              linkedin
              twitter
              id
            }
          }
        }
        job_categories(where: {job_id: {_eq: ${jobId}}}) {
          job_id
          id
          category_id
          category_details {
            id
            name
          }
        }
        job_tags(where: {job_id: {_eq: ${jobId}}}) {
          id
          job_id
          tag_id
          tag_details {
            id
            name
          }
        }
      }`

    const query = useQuery(GET_JOB)
    return query
}
