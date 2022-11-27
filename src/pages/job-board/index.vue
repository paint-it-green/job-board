<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { getJobPostings } from '~/utils'
import '../../styles/job-board.css'

const filterText = ref('')
const select = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
    disabled: true,
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]

const { loading, result } = getJobPostings()
</script>

<template>
  <div class="job-board">
    <div class="filters">
      <el-input v-model="filterText" placeholder="Please input" class="input-with-select">
        <template #prepend>
          <el-select v-model="select" placeholder="Select">
            <el-option
              v-for="item in options" :key="item.value" :label="item.label" :value="item.value"
              :disabled="item.disabled"
            />
          </el-select>
        </template>
        <template #append>
          <el-button :icon="Search" />
        </template>
      </el-input>
    </div>

    <div v-if="loading">
      Loading query...
    </div>
    <div v-else>
      <div class="job-list mt-10">
        <AppJobContainer :jobs="result" />
      </div>
    </div>
  </div>
</template>
