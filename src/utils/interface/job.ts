import { SalaryType } from "../enums/slary-type"
import { EmployerDetails } from "./employer-details"

export interface Job {
    created_at: string
    updated_at: string
    description: string
    id: number
    title: string
    apply_now_link: string
    apply_now_via_email: string
    posted_by: number
    salary_currency: string
    salary_type: SalaryType
    salary_amount: string
    employerDetails: EmployerDetails
  }
  