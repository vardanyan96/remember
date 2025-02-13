import { defineStore } from 'pinia'
import {onMounted, ref} from 'vue'
import axios from 'axios'
import { useStepStore } from '@/store/step.ts'

interface UserForm {
  email: string
  password: string
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const errors = ref(null)
  const loading = ref(false)
  const token = ref<any|null>(null)
  const stepStore = useStepStore()

  const createUser = async (user: UserForm): Promise<void> => {
    stepStore.$continue()
    try {
      loading.value = true
      errors.value = null
      const res = await axios.post('/public/user', user)
      console.log(res)
      await login(user)
    } catch (e) {
      if (axios.isAxiosError(e)) {
        errors.value = e.response?.data
      } else {
        console.error('Неизвестная ошибка:', e)
      }
    } finally {
      loading.value = false
    }
  }

  const login = async (user: UserForm) => {
    try {
      const res = await axios.post('/public/login', user)
      localStorage.setItem('token', res.data.accessToken)
      token.value = res.data.accessToken
      axios.defaults.headers.common["Authorization"] = `Bearer ${token.value}`;
      setTimeout(() =>{
        stepStore.$continue()
      },100)
    } catch (e) {
      console.error('Неизвестная ошибка:', e)
    }
  }
  const getToken = () => {
    token.value = localStorage.getItem('token') ?? null
    if(token.value)axios.defaults.headers.common["Authorization"] = `Bearer ${token.value}`;
  }
  onMounted(() => {
    getToken()
  })
  return { user, errors, loading, token, createUser, getToken }
})
