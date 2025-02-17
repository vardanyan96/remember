import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import {useAuthStore} from "@/store/auth.ts";
import {$url} from "@/helpers/url.ts";

export const useTariffStore = defineStore('tariff', () => {
  const tariffs:any = ref(null)
  const authStore = useAuthStore()

  const $get = async () => {
    await authStore.getUser()
    const res = await axios.get($url.tariff)
    tariffs.value = res.data
  }
  const checkTariff = async (priceId:number) => {
    try{
      const res = await axios.post($url.subscribe,{priceId})
      window.location.href = res.data

    }catch (e) {
      console.log(e)
    }
  }
  return { tariffs, $get, checkTariff }
})
