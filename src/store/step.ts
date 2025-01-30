import { defineStore } from 'pinia'
import { computed, onMounted, reactive, ref } from 'vue'
import { useLangStore } from '@/store/languages.ts'
import _ from 'lodash'

export const useStepStore = defineStore('step', () => {
  const step = ref<number>(1)
  const langStore = useLangStore()

  const form = reactive({
    learnLang: '',
    nativeLang: '',
  } as any)

  onMounted(async () => await langStore.$get())

  const activeStepText = computed(() => {
    return _.find(langStore.translate, { id: step.value })
  })

  const $changeForm = (key: string, value: any) => {
    // @ts-ignore
    form[key] = value
  }

  const $continue = () =>{
    localStorage.setItem('stepForm', JSON.stringify(form))
    step.value++
  }
  return { step, activeStepText,form, $changeForm , $continue}
})
