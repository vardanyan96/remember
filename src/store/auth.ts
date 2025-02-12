import { defineStore } from 'pinia'
import { ref } from 'vue'
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
  const stepStore = useStepStore()

  const createUser = async (user: UserForm): Promise<void> => {
    try {
      loading.value = true
      errors.value = null
      const res = await axios.post('/user', user)
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
      const res = await axios.post('/login', user)
      localStorage.setItem('token', res.data.accessToken)
      stepStore.$continue()
    } catch (e) {
      console.error('Неизвестная ошибка:', e)
    }
  }
  return { user, errors, loading, createUser }
})
