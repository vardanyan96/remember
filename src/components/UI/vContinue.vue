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
    <svg width="450" height="137" viewBox="0 0 450 137" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0L450 0V40L0 40L0 0Z" fill="url(#paint0_linear_6_807)" />
      <rect y="40" width="450" height="97" fill="#5A81FF" />
      <defs>
        <linearGradient id="paint0_linear_6_807" x1="0" y1="0" x2="0" y2="40" gradientUnits="userSpaceOnUse">
          <stop stop-color="#5B82FF" stop-opacity="0.01" />
          <stop offset="0.745009" stop-color="#5A81FF" />
          <stop offset="1" stop-color="#5A81FF" />
        </linearGradient>
      </defs>
    </svg>
    <div class="wrapper">
      <div class="page-button__inner">
        <button
          @click.prevent="$emit('continue')"
          class="btn btn-white w-full h-[50px] capitalize"
          :class="{'disabled-class': disabledBtn}"
        >
          {{text}}
        </button>
      </div>
    </div>
  </div>
</template>
