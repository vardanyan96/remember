<script lang="ts" setup>
import { useStepStore } from '@/store/step.ts'
import VLangItem from '@/components/UI/vLangItem.vue'
import VContinue from '@/components/UI/vContinue.vue'
import type { Translate } from '@/helpers/interfaces.ts'
import VHeader from '@/components/UI/vHeader.vue'
import _ from 'lodash'
import { onMounted } from 'vue'
import type{Lang} from "@/helpers/interfaces.ts";

const stepStore = useStepStore()
const texts: Translate | any = stepStore.activeStepText?.description || {}
const countries = _.sortBy(texts.languages || [], 'country')

const change = (code: string) => {
  stepStore.$changeForm('nativeLang', code)
}

onMounted(() => {
  const langCode = navigator.language.split('-')[0].toUpperCase()
  console.log(langCode)
  change(langCode)
  if (texts && langCode){
    const findItem = texts.languages.findIndex((i:Lang) => i.image === langCode)
    if(findItem !== -1) {
        const element = document.querySelector(`.lang-${langCode}`)
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
