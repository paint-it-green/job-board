import { Tag } from "./tag";

export interface JobTag {
    job_id: string,
    id: number,
    tag_id: string,
    tag_details: Tag
}
