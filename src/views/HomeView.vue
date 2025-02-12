<script lang="ts" setup>
import { useStepStore } from '@/store/step.ts'
import VStepLearnLang from '@/components/vStepLearnLang.vue'
import VStepNativeLang from '@/components/vStepNativeLang.vue'
import VStepHome from '@/components/vStepHome.vue'
import VStepChek from '@/components/vStepChek.vue'
import VContinue from '@/components/UI/vContinue.vue'
import VLogin from "@/components/vLogin.vue";
import type{ Translate } from '@/helpers/interfaces.ts'
import { computed, watch } from 'vue'
import VLoginForm from "@/components/vLoginForm.vue";

const stepStore = useStepStore()
const texts: Translate | any = stepStore.activeStepText?.description || {}

const disabledBtn = computed(() => {
  if (stepStore.$getActiveKey && stepStore.$getActiveKey.length > 0) {
    return !stepStore.form[stepStore.$getActiveKey]
  }
  return false
})
watch(
  () => stepStore.step,
  () => {
    // Ожидаем обновления DOM перед прокруткой
    const element = document.querySelector('.step-container')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  },
  { deep: true },
)
</script>

<template>
  <div class="step-container">
    <v-step-learn-lang v-if="stepStore.step === 1" />
    <v-step-native-lang v-if="stepStore.step === 2" />
    <v-step-home v-if="stepStore.step === 3" image="/img/hi.svg" />
    <v-step-home v-if="stepStore.step === 4" image="/img/cards.svg" />
    <v-step-home v-if="stepStore.step === 5" image="/img/star.svg" />
    <v-step-chek v-if="stepStore.step === 6" image-key="manyWords" />
    <v-step-chek v-if="stepStore.step === 7" image-key="month" />
    <v-step-chek v-if="stepStore.step === 8" image-key="time" />
    <v-step-chek v-if="stepStore.step === 9" without-image image-key="level" />
    <v-step-chek v-if="stepStore.step === 10" multiple without-image image-key="themes" />
    <v-continue
      :text="texts.buttons.continue"
      @continue="stepStore.$continue()"
      :disabled-btn="disabledBtn"
      v-if="stepStore.step <= 10"
    />
  </div>

  <v-login v-if="stepStore.step === 11" />
  <v-login-form v-if="stepStore.step === 12" />

</template>
