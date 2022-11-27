export interface JobPosting {
    created_at: string,
    description: string,
    id: number,
    title: string,
    categories: JobPostingCategories[],
    tags: JobPostingTags[]
}

export interface JobPostingCategories {
    id: number,
    name: string,
}

export interface JobPostingTags {
    id: number,
    name: string,
}