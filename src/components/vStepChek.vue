<script lang="ts" setup>
import { useStepStore } from '@/store/step.ts'
import VContinue from '@/components/UI/vContinue.vue'
import type {Lang, Translate} from '@/helpers/interfaces.ts'
import VPrev from '@/components/UI/vPrev.vue'
import VCheckboxItem from '@/components/UI/vCheckboxItem.vue'
import VCheckboxItemMultiple from '@/components/UI/vCheckboxItemMultiple.vue'
import VSkip from '@/components/UI/vSkip.vue'
import VHeader from '@/components/UI/vHeader.vue'
import {useLangStore} from "@/store/languages.ts";

const props = defineProps({
  image: {
    type: String,
    default: '',
  },
  imageKey: {
    type: String,
    default: '',
  },
  withoutImage: {
    type: Boolean,
    default: false,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
})

const stepStore = useStepStore()
const langStore = useLangStore()
const texts: Translate | any = stepStore.activeStepText?.description || {}

const changeTitle = (title:string) =>{
  const item = langStore.translate[0].description.languages.find((i:Lang) =>  i.image === stepStore.form.learnLang)
  const lang = item.country
  return  title.replace(/%lang%/, lang);
}
</script>

<template>
  <v-header v-if="withoutImage" :title="changeTitle(texts.title)" title-class="max-w-[65%]" :is-skip="texts.buttons.skip" />

  <div class="page-body" :class="{ 'pt-[90px]': withoutImage }">
    <div class="wrapper page-body-wrapper">
      <div v-if="texts" class="pt-[50px] page-body-wrapper-inner">
        <v-prev v-if="!withoutImage" @click.prevent="stepStore.$prev" />
        <v-skip v-if="!withoutImage" @click.prevent="stepStore.$skip" :text="texts.buttons.skip" />
        <div class="page-checkbox">
          <div v-if="!withoutImage" class="page-checkbox__image">
            <img :src="`/img/${imageKey}/Bitmap.svg`" alt="page-checkbox" />
          </div>
          <div class="info-page__bottom">
            <h1 v-if="!withoutImage" class="page-title text-center max-w-[85%] m-auto mb-[16px]">
              {{ texts.title }}
            </h1>

            <v-checkbox-item v-if="!multiple" :image-key="imageKey" :answers="texts.answers" />
            <v-checkbox-item-multiple v-else :image-key="imageKey" :answers="texts.answers" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <v-continue
    :text="texts.buttons.continue"
    @continue="stepStore.$continue()"
    :disabled-btn="
      !stepStore.form[imageKey] || (imageKey === 'themes' && stepStore.form.themes.length === 0)
    "
  />
</template>
