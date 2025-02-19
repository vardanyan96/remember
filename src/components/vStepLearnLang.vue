<script lang="ts" setup>
import { computed } from 'vue'
import { useStepStore } from '@/store/step.ts'
import _ from 'lodash'
import VLangItem from '@/components/UI/vLangItem.vue'
import VContinue from '@/components/UI/vContinue.vue'
import type { Translate } from '@/helpers/interfaces.ts'
import VHeader from '@/components/UI/vHeader.vue'

const stepStore = useStepStore()
const texts: Translate | any = stepStore.activeStepText?.description || {}
const mainCodes = ['US', 'ES', 'DE']

const learnLang = computed(() => {
  const sortedLanguages = _.sortBy(texts.languages || [], 'country')
  const [main, sea] = _.partition(
    sortedLanguages,
    (lang) => lang && lang.image && mainCodes.includes(lang.image),
  )
  return { main, sea }
})
</script>

<template>
  <v-header :title="texts.title" no-prev />
  <div class="page-body pt-[153px]">
    <div class="wrapper">
      <v-lang-item
        :active-lang="stepStore.form.learnLang"
        class="pb-[15px]"
        :list="learnLang?.main"
        form-key="learnLang"
      />
      <p class="page-text px-[15px] pb-[10px]">{{ texts?.other_texts?.separator }}</p>
      <v-lang-item
        :active-lang="stepStore.form.learnLang"
        :list="learnLang?.sea"
        form-key="learnLang"
      />
    </div>
  </div>
  <v-continue
    :text="texts.buttons.continue"
    @continue="stepStore.$continue()"
    :disabled-btn="!stepStore.form.learnLang"
  />
</template>
