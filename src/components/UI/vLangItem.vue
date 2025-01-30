<script lang="ts" setup>
import { useStepStore } from '@/store/step.ts'
import type{ Lang } from '@/helpers/interfaces.ts'
import type { PropType } from 'vue'
import {  defineProps } from 'vue'

const props = defineProps({
  list: {
    type: Array as PropType<Lang[]>,
    default: () => [],
  },
  formKey: {
    type: String,
    default: '',
  },
})
const stepStore = useStepStore()

const change = (code:string) => {
  stepStore.$changeForm(props.formKey, code)
}
</script>

<template>
  <ul class="language-list">
    <li v-for="item in list" :key="item.image" class="language-item">
      <input :id="`lang-${item.image}`" type="radio" name="lang" @change="change(item.image)" />
      <label :for="`lang-${item.image}`" class="language-item-label">
        <img class="language-img" :src="`/img/flags/${item.image}.svg`" alt="" />
        <span class="language-text">{{ item.country }}</span>
        <span class="language-checked">
          <svg
            width="13"
            height="11"
            viewBox="0 0 13 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 5.72596L4.70196 9L11.5 2"
              stroke="white"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </label>
    </li>
  </ul>
</template>
