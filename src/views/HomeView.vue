<script lang="ts" setup>
import { useStepStore } from '@/store/step.ts'
import VStepLearnLang from "@/components/vStepLearnLang.vue";
import VStepNativeLang from "@/components/vStepNativeLang.vue";

const stepStore = useStepStore()

</script>

<template>
  <v-step-learn-lang v-if="stepStore.step === 1" />
  <v-step-native-lang v-if="stepStore.step === 2" />
</template>
