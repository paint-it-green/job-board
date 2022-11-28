import { Category } from "./category";

export interface JobCategory {
    job_id: string,
    id: number,
    category_id: string,
    category_details: Category
}
