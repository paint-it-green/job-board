import { SocialMediaLinks } from "./social-media-links"

export interface EmployerDetails {
    name: string
    id: number
    company_background: string
    address: string
    created_at: string
    updated_at: string
    social_media_links_detials: SocialMediaLinks
}
