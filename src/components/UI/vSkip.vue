<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: '',
  },
})
</script>
<template>
  <button class="page-skip">{{ text }}</button>
</template>
