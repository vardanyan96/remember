<script lang="ts" setup>
import { useStepStore } from '@/store/step.ts'
import VStepLearnLang from '@/components/vStepLearnLang.vue'
import VStepNativeLang from '@/components/vStepNativeLang.vue'
import VStepHome from '@/components/vStepHome.vue'

const stepStore = useStepStore()
</script>

<template>
  <v-step-learn-lang v-if="stepStore.step === 1" />
  <v-step-native-lang v-if="stepStore.step === 2" />
  <v-step-home v-if="stepStore.step === 3" image="/img/hi.png" />
  <v-step-home v-if="stepStore.step === 4" image="/img/cards.png" />
  <v-step-home v-if="stepStore.step === 5" image="/img/star.png" />
</template>
