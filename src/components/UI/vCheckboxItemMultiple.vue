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

const change = (code: string) => {
  const findItem = findElement(code)
  if (findItem === -1) stepStore.form[props.imageKey].push(code)
  else stepStore.form[props.imageKey].splice(findItem, 1)
  console.log(stepStore.form[props.imageKey])
}

const findElement = (item: string): number => {
  return stepStore.form[props.imageKey].findIndex((i:string) => i === item)
}
const emojis:string[] = stepStore.activeEmojis?.list || []

</script>

<template>
  <ul class="page-checkbox__list">
    <li v-for="(item, index) in answers" :key="index" class="page-checkbox__item">
      <input
        :id="`answers-${index}`"
        type="checkbox"
        name="answers"
        @change="change(item)"
        :checked="findElement(item) !== -1"
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
