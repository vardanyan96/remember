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

  onMounted(async () => {
    step.value = +localStorage.getItem('step') || 1
    const stepForm = JSON.parse(localStorage.getItem('stepForm')) || {}
    Object.keys(stepForm).forEach(item=>{
      form[item] = stepForm[item]
    })
    await langStore.$get()
    // form = localStorage.getItem('stepForm')
  })

  const activeStepText = computed(() => {
    return _.find(langStore.translate, { id: step.value })
  })

  const $changeForm = (key: string = 'learnLang', value: any) => {
    form[key] = value
  }

  const $continue = () =>{
    localStorage.setItem('stepForm', JSON.stringify(form))
    step.value++
    localStorage.setItem('step', JSON.stringify(step.value))
  }

  const $prev = () =>{
    localStorage.setItem('step', JSON.stringify(step.value))
    step.value--
  }

  return { step, activeStepText,form, $changeForm , $continue, $prev}
})
