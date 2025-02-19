import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { useStepStore } from '@/store/step.ts'
import { $url } from '@/helpers/url.ts'

interface UserForm {
  email: string
  password: string
}

interface Answer {
  id: number
  text: string
}

interface UserAnswer {
  id: number
  text: string
  answers: Answer[]
}

export const useAuthStore = defineStore('auth', () => {
  const user:any = ref(null)
  const errors = ref<any>(false)
  const loading = ref<boolean>(false)
  const token = ref<any | null>(null)
  const stepStore = useStepStore()

  const createUser = async (user: UserForm): Promise<void> => {
    try {
      loading.value = true
      errors.value = null
      const res = await axios.post($url.user, user)
      await login(user)
      stepStore.$continue()
      console.log(res,'success')
    } catch (e) {
      console.log(e,'error')
      if (axios.isAxiosError(e)) {
        errors.value = true
      } else {
        console.error('Неизвестная ошибка:', e)
      }
    } finally {
      loading.value = false
    }
  }

  const login = async (user: UserForm) => {
    try {
      const res = await axios.post($url.login, user)
      localStorage.setItem('token', res.data.accessToken)
      token.value = res.data.accessToken
      axios.defaults.headers.common['Authorization'] = `Bearer ${token.value}`
      await getUser()
      await saveUserInfo()
    } catch (e) {
      console.error('Неизвестная ошибка:', e)
    }
  }

  const getUser = async () => {
    try {
      token.value = localStorage.getItem('token') ?? null
      if (token.value) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token.value}`
        const res = await axios.get($url.userProfile)
        user.value = res.data
      }
    } catch (e) {
      axios.defaults.headers.common['Authorization'] = null
      if (stepStore.step > 11) {
        stepStore.step = 11
        localStorage.setItem('step', JSON.stringify(stepStore.step))
      }
    }
  }
  const themesArray = (): Answer[] => {
    let array: Answer[] = []
    stepStore.form.themes.forEach((item: string, index: number) => {
      array.push({
        id: index + 1,
        text: 'item',
      })
    })
    return array
  }

  const saveUserInfo = async () => {
    const form: UserAnswer[] = [
      {
        id: 1,
        text: 'languageLearn',
        answers: [
          {
            id: 1,
            text: stepStore.form.learnLang,
          },
        ],
      },
      {
        id: 2,
        text: 'languageNative',
        answers: [
          {
            id: 1,
            text: stepStore.form.nativeLang,
          },
        ],
      },
      {
        id: 3,
        text: 'wordsToLearn',
        answers: [
          {
            id: 1,
            text: stepStore.form.manyWords,
          },
        ],
      },
      {
        id: 4,
        text: 'wordsToLearnTime',
        answers: [
          {
            id: 1,
            text: stepStore.form.month,
          },
        ],
      },
      {
        id: 5,
        text: 'timesPerWeek',
        answers: [
          {
            id: 1,
            text: stepStore.form.time,
          },
        ],
      },
      {
        id: 6,
        text: 'languageLevel',
        answers: [
          {
            id: 1,
            text: stepStore.form.level,
          },
        ],
      },
      {
        id: 7,
        text: 'themesToStudy',
        answers: themesArray(),
      },
    ]
    await axios.post($url.flow, form)
  }

  onMounted(() => getUser())
  return { user, errors, loading, token, createUser, getUser, saveUserInfo }
})
