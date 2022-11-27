<script lang="ts" setup>
import type { JobPosting } from '~/utils'
import { processJobPostingData } from '~/utils'
import '../styles/app-job-container.css'

const props = defineProps<{
  jobs?: any
}>()

const jobpostings: JobPosting[] = processJobPostingData(props.jobs)
</script>

<template>
  <v-container v-for="jobposting in jobpostings">
    <div class="job container bg-white flex">
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
  </v-container>
</template>
