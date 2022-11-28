<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
import { useMutation } from '@vue/apollo-composable'
import { useUserData } from '@nhost/vue'
import { EMPLOYER_GRAPH } from '../../graphql'

const user = useUserData()
const toast = useToast()
const router = useRouter()

const name = ref('')
const companyBackground = ref('')
const address = ref('')
const facebookLink = ref('')
const linkedinLink = ref('')
const twitterLink = ref('')

const { mutate } = useMutation(EMPLOYER_GRAPH.insert_employers_one)

const handleSubmit = async (event: Event) => {
  event.preventDefault()

  const result = await mutate({
    address: address.value,
    company_background: companyBackground.value,
    name: name.value,
    facebook: facebookLink.value,
    linkedin: linkedinLink.value,
    twitter: twitterLink.value,
    user_id: user.value!.id,
  })
  toast.success('Employer details successfully added!')
  router.push('/')
}
</script>

<template>
  <form @submit="handleSubmit">
    <input v-model="name" placeholder="Company name" class="input"><br>
    <textarea v-model="companyBackground" placeholder="Company background" class="input" /><br>
    <input
      v-model="address"
      placeholder="Address"
      class="input"
    ><br>
    <input
      v-model="facebookLink"
      placeholder="Facebook link"
      class="input"
    ><br>
    <input
      v-model="linkedinLink"
      placeholder="Linkedin link"
      class="input"
    ><br>
    <input
      v-model="twitterLink"
      placeholder="Twitter link"
      class="input"
    ><br>

    <button class="btn-submit" type="submit">
      Create
    </button>
  </form>
</template>
