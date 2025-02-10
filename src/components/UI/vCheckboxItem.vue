<script lang="ts" setup>
import type { PropType } from 'vue'
import { defineProps } from 'vue'
import { useStepStore } from '@/store/step.ts'

const props = defineProps({
  answers: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  imageKey: {
    type: String,
    default: '',
  },

})

const stepStore = useStepStore()
const emojis:string[] = stepStore.activeEmojis?.list || []

const change = (code: string) => {
  stepStore.$changeForm(props?.imageKey || 'learnLang', code)
}


</script>

<template>
  <ul class="page-checkbox__list">
    <li v-for="(item, index) in answers" :key="index" class="page-checkbox__item">
      <input
        :id="`answers-${index}`"
        type="radio"
        name="answers"
        @change="change(item)"
        :checked="stepStore.form[imageKey] === item"
      />
      <label :for="`answers-${index}`" class="page-checkbox__item-label">
        <span class="page-checkbox__item-emoji">{{emojis[index]}}</span>
        <span class="page-checkbox__item-text">{{ item }}</span>
        <span class="page-checkbox__checked">
          <svg
            width="10"
            height="8"
            viewBox="0 0 10 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 3.66667L3.85714 7L9 1"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </label>
    </li>
  </ul>
</template>
