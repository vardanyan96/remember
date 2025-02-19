import { defineStore } from 'pinia'
import { ref, onMounted } from 'vue'
import axios from 'axios'
import type { Translate } from '@/helpers/interfaces.ts'
import { $url } from '@/helpers/url.ts'
import { useRoute } from 'vue-router'

export const useLangStore = defineStore('lang', () => {
  const route = useRoute()
  console.log(route.query?.lang)
  const lang = ref(route.query?.lang || 'en')
  const translate = ref<Translate[] | any>(null)

  const $get = async () => {
    if (translate.value) return false
    const res = await axios.get(`${$url.screen}/${lang.value}`)
    translate.value = res.data
  }

  onMounted(() => {
    const langCode = navigator.language.split('-')[0].toUpperCase()
    if (langCode === 'es') lang.value = 'es'
  })

  return { lang, $get, translate }
})
