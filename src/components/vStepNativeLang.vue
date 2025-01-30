<script lang="ts" setup>
import { useStepStore } from '@/store/step.ts'
import VLangItem from '@/components/UI/vLangItem.vue'
import VContinue from "@/components/UI/vContinue.vue";
import type {Translate} from "@/helpers/interfaces.ts";

const stepStore = useStepStore()
const texts:Translate|any = stepStore.activeStepText?.description || {}

</script>

<template>
  <div class="page-body">
    <div class="wrapper">
      <div v-if="texts" class="pt-[124px]">
        <h1 class="page-title text-center max-w-[80%] m-auto mb-[31px]">{{ texts.title }}</h1>
        <v-lang-item :list="texts.languages" form-key="nativeLang" />
      </div>
    </div>
  </div>
  <v-continue :text="texts.buttons.continue" @continue="stepStore.$continue()" :disabled-btn="!stepStore.form.nativeLang" />
</template>
