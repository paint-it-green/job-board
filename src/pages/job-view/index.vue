<script lang="ts" setup>
import '../../styles/job-view.css'
import { useRouter } from 'vue-router'
import { getJob, Job, JobCategory, JobTag } from '~/utils'
import { watch } from 'vue'
import { SalaryType } from '~/utils/enums/slary-type'
import {
    ArrowLeft
} from '@element-plus/icons-vue'

const router = useRouter()
const baseUrl = window.location.origin + router.currentRoute.value.fullPath
const jobId = (router.currentRoute.value.query as any).jobId

const { loading, result } = getJob(jobId)
const salaryType = SalaryType
let job: Job
let job_categories: JobCategory[]
let job_tags: JobTag[]

watch(() => {
    job = result.value?.jobs[0] as Job
    job_categories = result.value?.job_categories as JobCategory[]
    job_tags = result.value?.job_tags as JobTag[]
}, () => { })

</script>


<template>
    <div v-if="loading">
        Loading Job Details...
    </div>
    <div v-else>
        <div class="navigation mb-5 flex justify-end">
            <el-button type="default" @click="router.push('/')" :icon="ArrowLeft">Back</el-button>
        </div>
        <div class="job-view">
            <div class="description">
                {{ job.description }}
            </div>

            <div class="info">
                <div class="job-details">
                    <div class="categories mb-3">
                        <span class="mb-2"><b> Categories: </b></span>
                        <div v-for="category in job_categories" class="category">
                            <span> {{ category.category.name }}</span>
                        </div>
                    </div>
                    <div class="tags">
                        <span class="mb-2"> <b> Tags: </b></span>
                        <div v-for="tag in job_tags" class="tag">
                            <span> {{ tag.tag.name }} </span>
                        </div>
                    </div>

                    <div class="salary flex flex-col mt-5">
                        <span class="mb-2">
                            <b> {{ salaryType[job.salary_type] }} </b>
                        </span>
                        <span class="curreny mb-2">
                            <b>{{ job.salary_currency }} :</b> {{ job.salary_amount }}
                        </span>
                    </div>

                    <div class="employer flex flex-col">
                        <span>
                            <b>Employer:</b>
                            {{ job.employer.name }}
                        </span>
                        <span>
                            <b>Address:</b>
                            {{ job.employer.company_background }}
                        </span>
                        <span>
                            <b>Company Background:</b>
                            {{ job.employer.address }}
                        </span>
                    </div>
                </div>
                <div v-if="job.employer.social_media_links" class="social-media-links flex flex-col">
                    <span class="title">
                        Social Media Links:
                    </span>

                    <div class="socail-media-icons flex flex-row justify-center">
                         <el-link :href="job.employer.social_media_links.facebook" target="_blank">
                            <img class="mx-1" src=".././images/facebook.webp" alt="facebook">
                        </el-link>
                        <el-link :href="job.employer.social_media_links.twitter" target="_blank">
                            <img class="mx-1" src=".././images/twitter.webp" alt="twitter">
                        </el-link>
                        <el-link :href="job.employer.social_media_links.facebook" target="_blank">
                            <img class="mx-1" src=".././images/linkedin.png" alt="linkedin">
                        </el-link>
                    </div>
                </div>
                <div class="base-url flex flex-col cursor-pointer">
                    <span class="title">
                        Job URL:
                    </span>
                    <span>{{ baseUrl }}</span>
                </div>
                <div v-if="job.apply_now_link !== null || job.apply_now_via_email !== null"
                    class="apply-now flex flex-col cursor-pointer">
                    <span class="title">
                        <b>Apply Now:</b>
                    </span>

                    <el-link v-if="job.apply_now_link !== null" :href="job.apply_now_link" target="_blank">
                        {{ job.apply_now_link }}
                    </el-link>

                    <div v-if="job.apply_now_via_email !== null" class="email mt-5 flex flex-col">
                        <span class="title">
                            Apply via E-mail:
                        </span>
                        <span>{{ job.apply_now_via_email }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  