<script lang="ts" setup>
import { useStepStore } from '@/store/step.ts'
import VLangItem from '@/components/UI/vLangItem.vue'
import VContinue from '@/components/UI/vContinue.vue'
import type { Translate, Lang } from '@/helpers/interfaces.ts'
import VHeader from '@/components/UI/vHeader.vue'
import _ from 'lodash'
import { onMounted } from 'vue'

const stepStore = useStepStore()
const texts: Translate | any = stepStore.activeStepText?.description || {}
const countries = _.sortBy(
  (texts.languages || []).filter((lang:Lang) => lang.image !== stepStore.form.learnLang),
  'country'
)

const change = (code: string) => {
  stepStore.$changeForm('nativeLang', code)
}

onMounted(() => {
  const langCode = navigator.language.split('-')[0].toUpperCase()
  console.log(langCode)
  if (texts && langCode){
    const findItem = countries.findIndex((i:Lang) => i.image === langCode)
    console.log(findItem)
    if(findItem !== -1) {
        const element = document.querySelector(`.lang-${langCode}`)
      change(langCode)
        if (element) {
          const rect = element.getBoundingClientRect()
          window.scrollTo({
            top: window.pageYOffset + rect.top - 150,
            behavior: 'smooth',
          })
      }
    }
  }
})

</script>

<template>
  <v-header :title="texts.title" />
  <div class="page-body pt-[153px]">
    <div class="wrapper">
      <pre>{{stepStore.form.nativeLang}}</pre>
      <v-lang-item
        :active-lang="stepStore.form.nativeLang"
        :list="countries"
        form-key="nativeLang"
      />
    </div>
  </div>
  <v-continue
    :text="texts.buttons.continue"
    @continue="stepStore.$continue()"
    :disabled-btn="!stepStore.form.nativeLang"
  />
</template>
