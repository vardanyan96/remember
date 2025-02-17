<script lang="ts" setup>
import type { Translate } from '@/helpers/interfaces.ts'
import { useStepStore } from '@/store/step.ts'
import { onMounted, ref } from 'vue'
import VPrev from '@/components/UI/vPrev.vue'
import {useAuthStore} from "@/store/auth.ts";

const stepStore = useStepStore()
const auth = useAuthStore()
let texts = ref<Translate | any>(null)
onMounted(() => {
  stepStore.step = 15
  texts.value = stepStore.activeStepText?.description || {}
  auth.saveUserInfo()
})

const mailText = (text: string = ''): string => {
  const email = auth.user?.email ||  'example@mail.com'
  return text.replace('%@', `<b>${email}</b>`)
}
const replaceText = (text: string): string => text.replace(/\\n/g, '<br/>')
</script>

<template>
  <div v-if="texts" class="page-body page-body-full">
    <v-prev @click.prevent="stepStore.$prev" />

    <div class="info-page__top">
      <div class="info-page__top-inner">
        <img class="mb-[32px]" src="/img/thanks.svg" alt="thanks" />
        <h2 class="page-title mb-[8px]">{{ texts.title }}</h2>
        <p class="desc mb-[30px]" v-html="mailText(texts?.subtitle)"></p>
        <svg
          class="mb-[30px]"
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.9917 0.112549C7.71387 0.112549 8.19531 0.610596 8.19531 1.35767V10.5715L8.12061 12.3728L9.78906 10.447L11.6567 8.58765C11.8809 8.36353 12.1631 8.21411 12.52 8.21411C13.1675 8.21411 13.6572 8.69556 13.6572 9.37622C13.6572 9.69165 13.5327 9.98218 13.2837 10.2395L7.87988 15.6433C7.65576 15.8757 7.32373 16.0085 6.9917 16.0085C6.66797 16.0085 6.32764 15.8757 6.10352 15.6433L0.708008 10.2395C0.458984 9.98218 0.334473 9.69165 0.334473 9.37622C0.334473 8.69556 0.824219 8.21411 1.47168 8.21411C1.83691 8.21411 2.11914 8.36353 2.33496 8.58765L4.20264 10.447L5.87109 12.3728L5.78809 10.5715V1.35767C5.78809 0.610596 6.27783 0.112549 6.9917 0.112549Z"
            fill="white"
          />
        </svg>
        <h3
          class="page-title mb-[16px]"
          v-html="replaceText(texts?.other_texts?.cta_download)"
        ></h3>

        <a href="#">
          <img src="/img/download.svg" alt="download" />
        </a>
      </div>
    </div>
    <div class="info-page__bottom">
      <div class="info-page__bottom-text pb-[15px] w-full">
        {{ texts?.other_texts?.receipt_explanation }}
      </div>
    </div>
  </div>
</template>
