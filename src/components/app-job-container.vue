<script lang="ts" setup>
import type { JobPosting } from '~/utils'
import { processJobPostingData } from '~/utils'
import '../styles/app-job-container.css'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps<{
  jobs?: any
}>()

const jobpostings: JobPosting[] = processJobPostingData(props.jobs)

const viewJob = (jobId: number) => {
  router.push({ path: 'job-view', query: { jobId }})
}
</script>

<template>
  <div class="job container bg-white flex" v-for="jobposting in jobpostings" v-on:click="viewJob(jobposting.id)">
    <div class="left">
      <h3 class="title">
        {{ jobposting.title }}
      </h3>
      <span class="description">{{ jobposting.description }}</span>
      <span class="date">{{ jobposting.created_at }}</span>
    </div>
    <div class="right">
      <div v-for="category in jobposting.categories" class="categories">
        <span>{{ category.name }}</span>
      </div>
      <div v-for="tag in jobposting.tags" class="tags">
        <span>{{ tag.name }}</span>
      </div>
      <div class="visits">
        visit: 999
      </div>
    </div>
  </div>
</template>
