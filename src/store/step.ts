import { defineStore } from 'pinia'
import { computed, onMounted, reactive, ref } from 'vue'
import { useLangStore } from '@/store/languages.ts'
import _ from 'lodash'

interface Emojis {
  id: number
  list: string[]
}

interface Form {
  learnLang: string
  nativeLang: string
  manyWords: string
  month: string
  time: string
  level: string
  themes: string[] | any
}

export const useStepStore = defineStore('step', () => {
  const langStore = useLangStore()
  const step = ref<number>(1)
  const activeKey: string[] = [
    'learnLang',
    'nativeLang',
    '',
    '',
    '',
    'manyWords',
    'month',
    'time',
    'level',
    'themes',
  ]

  const emojis: Emojis[] = [
    {
      id: 6,
      list: ['✏️', '📄', '📜', '📘', '📚'],
    },
    {
      id: 7,
      list: ['🌑️', '🌓', '🌕', '🌖', '🌍'],
    },
    {
      id: 8,
      list: ['🏅️', '✌️', '🎯', '🌟', '🖐️', '🔥', '🏆'],
    },
    {
      id: 9,
      list: ['🚶️', '🏃️', '🏎️', '🚀'],
    },
    {
      id: 10,
      list: [
        '🔥️',
        '💬️',
        '🌴',
        '💄',
        '💪️',
        '🏢',
        '🍒',
        '🎃',
        '🍁',
        '🛍️',
        '🍽️',
        '🏥',
        '🎮',
        '📱',
        '📅',
        '🌍',
        '💼',
        '⚽',
        '🏡',
        '🐾',
        '🌳',
        '🏛️',
        '🎶',
        '😊',
        '📖',
        '🛫',
        '🎬',
        '🏫',
        '📚',
        '🚗',
        '🌐',
      ],
    },
  ]

  const form = reactive({
    learnLang: '',
    nativeLang: '',
    manyWords: '',
    month: '',
    time: '',
    level: '',
    themes: [],
  } as Form | any)

  onMounted(async () => {
    if (localStorage.getItem('step') && localStorage.getItem('stepForm')) {
      step.value = Number(localStorage.getItem('step') ?? 1)
      const stepForm = JSON.parse(localStorage.getItem('stepForm') || '') || {}
      Object.keys(stepForm).forEach((item) => {
        form[item] = stepForm[item]
      })
    }
    await langStore.$get()
  })

  const activeStepText = computed(() => {
    return langStore.translate[step.value - 1]
  })
  const activeEmojis = computed(() => {
    return _.find(emojis, { id: step.value })
  })

  const $changeForm = (key: string = 'learnLang', value: any) => {
    form[key] = value
  }

  const $prev = () => {
    step.value--
    localStorage.setItem('step', JSON.stringify(step.value))
  }
  const $next = () => {
    step.value++
    localStorage.setItem('step', JSON.stringify(step.value))
  }
  const $skip = () => {
    step.value = 11
    localStorage.setItem('step', JSON.stringify(step.value))
  }
  const $continue = () => {
    $next()
    localStorage.setItem('stepForm', JSON.stringify(form))
  }

  const $getActiveKey = computed(() => {
    return activeKey[step.value - 1] || ''
  })

  return {
    step,
    activeStepText,
    activeEmojis,
    emojis,
    form,
    $getActiveKey,
    $changeForm,
    $continue,
    $prev,
    $next,
    $skip
  }
})
