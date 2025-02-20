<script lang="ts" setup>
import { onMounted } from 'vue'
import 'vue3-circle-progress/dist/circle-progress.css'
import VCircleProgress from '@/components/UI/vCircleProgress.vue'
import { useStepStore } from '@/store/step.ts'
import type { Translate } from '@/helpers/interfaces.ts'

const stepStore = useStepStore()
const texts: Translate | any = stepStore.activeStepText?.description || {}
onMounted(async () => {
  setTimeout(() =>{
    // stepStore.$continue()
  },3000)
})
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-blue-500">
    <v-circle-progress
      :progress="100"
      :size="110"
      :strokeWidth="8"
      strokeColor="#60db76"
      trackColor="#ffffff1a"
    />
    <p class="mt-[20px] progress-text">{{ texts?.subtitle }}</p>
  </div>
</template>
