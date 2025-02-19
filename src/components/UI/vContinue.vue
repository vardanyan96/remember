<script lang="ts" setup>
const props = defineProps({
  disabledBtn: {
    type: Boolean,
    default: false,
  },
  text:{
    type:String,
    default:''
  }
})
</script>

<template>

  <div class="page-button">
    <img src="/img/continueSvg.svg" alt="bg">
    <div class="wrapper">
      <div class="page-button__inner">
        <button
          @click.prevent="$emit('continue')"
          class="btn btn-white w-full capitalize"
          :class="{'disabled-class': disabledBtn}"
        >
          {{text}}
        </button>
      </div>
    </div>
  </div>
</template>
