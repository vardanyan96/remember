<script lang="ts" setup>
import { defineProps } from 'vue'
import VPrev from '@/components/UI/vPrev.vue'
import { useStepStore } from '@/store/step.ts'
import VSkip from '@/components/UI/vSkip.vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  noPrev: {
    type: Boolean,
    default: false,
  },
  isSkip: {
    type: String,
    default: '',
  },
})
const stepStore = useStepStore()
</script>
<template>
  <div class="page-header">
    <div class="wrapper">
      <v-prev v-if="!noPrev" @click.prevent="stepStore.$prev" />
      <v-skip v-if="isSkip" @click.prevent="stepStore.$next" :text="isSkip" />

      <h1 class="page-title text-center max-w-[70%] m-auto pt-[50px]">{{ title }}</h1>
    </div>
    <svg
      class="page-header__svg"
      width="450"
      height="40"
      viewBox="0 0 450 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M450 40L0 40V0L450 0V40Z"
        fill="url(#paint0_linear_358_1221)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_358_1221"
          x1="450"
          y1="40"
          x2="450"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#5B82FF" stop-opacity="0.01" />
          <stop offset="0.745009" stop-color="#5A81FF" />
          <stop offset="1" stop-color="#5A81FF" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>
