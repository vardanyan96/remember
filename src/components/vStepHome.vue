<script lang="ts" setup>
import { useStepStore } from '@/store/step.ts'
import VLangItem from '@/components/UI/vLangItem.vue'
import VContinue from '@/components/UI/vContinue.vue'
import type { Translate } from '@/helpers/interfaces.ts'
import VPrev from '@/components/UI/vPrev.vue'
const props = defineProps({
  image:{
    type:String,
    default:''
  }
})

const stepStore = useStepStore()
const texts: Translate | any = stepStore.activeStepText?.description || {}
</script>

<template>
  <div class="page-body">
    <div class="wrapper page-body-wrapper">
      <div v-if="texts" class="pt-[50px] page-body-wrapper-inner">
        <v-prev @click.prevent="stepStore.$prev" />
        <div class="info-page">
          <div class="info-page__top">
            <img :src="image" alt="hi">
          </div>
          <div class="info-page__bottom">
            <h1 class="page-title-big text-center max-w-[80%] m-auto mb-[16px]">{{ texts.title }}</h1>
            <p class="desc ">
             {{ texts?.subtitle }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>
