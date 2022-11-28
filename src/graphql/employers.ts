import { gql } from '@apollo/client/core'

const insert_employers_one = gql`
mutation InsertEmployersOne($address: String = "", $company_background: String = "", $name: String = "", $facebook: String = "", $linkedin: String = "", $twitter: String = "", $user_id: uuid = "") {
  insert_employeers_one(object: {address: $address, company_background: $company_background, name: $name, social_media_links: {data: {facebook: $facebook, linkedin: $linkedin, twitter: $twitter}}, user_id: $user_id}) {
    address
    company_background
    id
    created_at
    name
    social_media_links {
      created_at
      facebook
      id
      linkedin
      twitter
      updated_at
    }
    social_media_links_id
    updated_at
    user_id
  }
}
`

const get_employer_by_user_id = gql`
query GetEmployerByUserId($_eq: uuid = "") {
  employeers(where: {user_id: {_eq: $_eq}}) {
    id
    address
    company_background
    created_at
    name
    social_media_links_id
    updated_at
    user_id
    social_media_links {
      created_at
      facebook
      id
      linkedin
      twitter
      updated_at
    }
  }
}
`

export const EMPLOYER_GRAPH = {
  insert_employers_one,
  get_employer_by_user_id,
}
