import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import {useAuthStore} from "@/store/auth.ts";

export const useTariffStore = defineStore('tariff', () => {
  const tariffs = ref(null)
  const authStore = useAuthStore()

  const $get = async () => {
    await authStore.getToken()
    const res = await axios.get(`/user/tariff`)
    console.log(res.data)
  }
  return { tariffs, $get }
})
