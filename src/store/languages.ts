import { defineStore } from 'pinia'
import { ref, onMounted } from 'vue'
import axios from 'axios'
import type { Translate } from '@/helpers/interfaces.ts'
import { $url } from '@/helpers/url.ts'

export const useLangStore = defineStore('lang', () => {
  const lang = ref('en')
  const translate = ref<Translate[] | any>([
    {
      id: 1,
      language: 'en',
      description: {
        id: 1,
        title: 'Choose the language you want to learn',
        subtitle: '',
        buttons: {
          continue: 'continue',
        },
        other_texts: {
          separator: 'More languages:',
        },
        languages: [
          {
            country: 'Arabic',
            image: 'AE',
          },
          {
            country: 'Chinese',
            image: 'CN',
          },
          {
            country: 'English',
            image: 'US',
          },
          {
            country: 'Russian',
            image: 'RU',
          },
          {
            country: 'French',
            image: 'FR',
          },
          {
            country: 'Italian',
            image: 'IT',
          },
          {
            country: 'German',
            image: 'DE',
          },
          {
            country: 'Spanish',
            image: 'ES',
          },
          {
            country: 'Dutch',
            image: 'NL',
          },
          {
            country: 'Bulgarian',
            image: 'BG',
          },
          {
            country: 'Czech',
            image: 'CZ',
          },
          {
            country: 'Danish',
            image: 'DK',
          },
          {
            country: 'Greek',
            image: 'GR',
          },
          {
            country: 'Estonian',
            image: 'EE',
          },
          {
            country: 'Finnish',
            image: 'FI',
          },
          {
            country: 'Lithuanian',
            image: 'LT',
          },
          {
            country: 'Latvian',
            image: 'LV',
          },
          {
            country: 'Norwegian',
            image: 'NO',
          },
          {
            country: 'Polish',
            image: 'PL',
          },
          {
            country: 'Portuguese',
            image: 'BR',
          },
          {
            country: 'Slovak',
            image: 'SK',
          },
          {
            country: 'Swedish',
            image: 'SE',
          },
          {
            country: 'Korean',
            image: 'KR',
          },
          {
            country: 'Japanese',
            image: 'JP',
          },
          {
            country: 'Turkish',
            image: 'TR',
          },
          {
            country: 'Belarusian',
            image: 'BY',
          },
          {
            country: 'Ukrainian',
            image: 'UA',
          },
          {
            country: 'Armenian',
            image: 'AR',
          },
          {
            country: 'Azerbaijani',
            image: 'AZ',
          },
          {
            country: 'Croatian',
            image: 'HR',
          },
          {
            country: 'Filipino',
            image: 'PH',
          },
          {
            country: 'Georgian',
            image: 'GE',
          },
          {
            country: 'Hebrew',
            image: 'IL',
          },
          {
            country: 'Hindi',
            image: 'IN',
          },
          {
            country: 'Indonesian',
            image: 'ID',
          },
          {
            country: 'Kazakh',
            image: 'KZ',
          },
          {
            country: 'Latin',
            image: 'vatican',
          },
          {
            country: 'Mongolian',
            image: 'MG',
          },
          {
            country: 'Myanmar',
            image: 'MN',
          },
          {
            country: 'Punjabi',
            image: 'PUN',
          },
          {
            country: 'Romanian',
            image: 'RO',
          },
          {
            country: 'Serbian',
            image: 'RS',
          },
          {
            country: 'Tajik',
            image: 'TJ',
          },
          {
            country: 'Thai',
            image: 'TH',
          },
          {
            country: 'Urdu',
            image: 'UR',
          },
          {
            country: 'Vietnamese',
            image: 'VN',
          },
          {
            country: 'Uzbek',
            image: 'UZ',
          },
          {
            country: 'Hungarian',
            image: 'HU',
          },
        ],
      },
    },
    {
      id: 2,
      language: 'en',
      description: {
        id: 2,
        title: 'Now pick your native language',
        subtitle: '',
        buttons: {
          continue: 'continue',
        },
        languages: [
          {
            country: 'Arabic',
            image: 'AE',
          },
          {
            country: 'Chinese',
            image: 'CN',
          },
          {
            country: 'English',
            image: 'US',
          },
          {
            country: 'Russian',
            image: 'RU',
          },
          {
            country: 'French',
            image: 'FR',
          },
          {
            country: 'Italian',
            image: 'IT',
          },
          {
            country: 'German',
            image: 'DE',
          },
          {
            country: 'Spanish',
            image: 'ES',
          },
          {
            country: 'Dutch',
            image: 'NL',
          },
          {
            country: 'Bulgarian',
            image: 'BG',
          },
          {
            country: 'Czech',
            image: 'CZ',
          },
          {
            country: 'Danish',
            image: 'DK',
          },
          {
            country: 'Greek',
            image: 'GR',
          },
          {
            country: 'Estonian',
            image: 'EE',
          },
          {
            country: 'Finnish',
            image: 'FI',
          },
          {
            country: 'Lithuanian',
            image: 'LT',
          },
          {
            country: 'Latvian',
            image: 'LV',
          },
          {
            country: 'Norwegian',
            image: 'NO',
          },
          {
            country: 'Polish',
            image: 'PL',
          },
          {
            country: 'Portuguese',
            image: 'BR',
          },
          {
            country: 'Slovak',
            image: 'SK',
          },
          {
            country: 'Swedish',
            image: 'SE',
          },
          {
            country: 'Korean',
            image: 'KR',
          },
          {
            country: 'Japanese',
            image: 'JP',
          },
          {
            country: 'Turkish',
            image: 'TR',
          },
          {
            country: 'Belarusian',
            image: 'BY',
          },
          {
            country: 'Ukrainian',
            image: 'UA',
          },
          {
            country: 'Armenian',
            image: 'AR',
          },
          {
            country: 'Azerbaijani',
            image: 'AZ',
          },
          {
            country: 'Croatian',
            image: 'HR',
          },
          {
            country: 'Filipino',
            image: 'PH',
          },
          {
            country: 'Georgian',
            image: 'GE',
          },
          {
            country: 'Hebrew',
            image: 'IL',
          },
          {
            country: 'Hindi',
            image: 'IN',
          },
          {
            country: 'Indonesian',
            image: 'ID',
          },
          {
            country: 'Kazakh',
            image: 'KZ',
          },
          {
            country: 'Latin',
            image: 'vatican',
          },
          {
            country: 'Mongolian',
            image: 'MG',
          },
          {
            country: 'Myanmar',
            image: 'MN',
          },
          {
            country: 'Punjabi',
            image: 'PUN',
          },
          {
            country: 'Romanian',
            image: 'RO',
          },
          {
            country: 'Serbian',
            image: 'RS',
          },
          {
            country: 'Tajik',
            image: 'TJ',
          },
          {
            country: 'Thai',
            image: 'TH',
          },
          {
            country: 'Urdu',
            image: 'UR',
          },
          {
            country: 'Vietnamese',
            image: 'VN',
          },
          {
            country: 'Uzbek',
            image: 'UZ',
          },
          {
            country: 'Hungarian',
            image: 'HU',
          },
        ],
      },
    },
    {
      id: 3,
      language: 'en',
      description: {
        id: 3,
        title: 'Learn 10 new words a day',
        subtitle: 'Boost your vocabulary in any of 40+ languages by studying just 5 minutes a day.',
        buttons: {
          continue: 'continue',
        },
      },
    },
    {
      id: 4,
      language: 'en',
      description: {
        id: 4,
        title: 'Create your own dictionary',
        subtitle: 'Translate words, create your own word sets, or explore themed collections.',
        buttons: {
          continue: 'continue',
        },
      },
    },
    {
      id: 5,
      language: 'en',
      description: {
        id: 5,
        title: 'Memorise words with flashcards',
        subtitle: 'Improve your speaking, listening, and pronunciation by playing language games.',
        buttons: {
          continue: 'continue',
        },
      },
    },
    {
      id: 6,
      language: 'en',
      description: {
        id: 6,
        title: 'How many words you’d like to learn?',
        subtitle: '',
        buttons: {
          continue: 'continue',
          skip: 'skip',
        },
        answers: ['100', '200', '500', '1000', '2000'],
      },
    },
    {
      id: 7,
      language: 'en',
      description: {
        id: 7,
        title: 'How quick you’d like to learn 500 words?',
        subtitle: '',
        buttons: {
          continue: 'continue',
          skip: 'skip',
        },
        answers: ['1 month', '2 months', '3 months', '6 months', '12 months'],
      },
    },
    {
      id: 8,
      language: 'en',
      description: {
        id: 8,
        title: 'How many times a week you’d like to practice?',
        subtitle: '',
        buttons: {
          continue: 'continue',
          skip: 'skip',
        },
        answers: ['1 time', '2 times', '3 times', '4 times', '5 times', '6 times', '7 times'],
      },
    },
    {
      id: 9,
      language: 'en',
      description: {
        id: 9,
        title: 'Choose your English level',
        subtitle: '',
        buttons: {
          continue: 'continue',
          skip: 'skip',
        },
        answers: ['Beginner', 'Intermediate', 'Advanced', 'Proficient'],
      },
    },
    {
      id: 10,
      language: 'en',
      description: {
        id: 10,
        title: 'Choose themes you’d like to study',
        subtitle: '',
        buttons: {
          continue: 'continue',
          skip: 'skip',
        },
        answers: [
          'Greetings',
          'Travel',
          'Phrasal verbs',
          'Food',
          'Colors',
          'Numbers',
          'Family',
          'Weather',
          'Daily routines',
          'Shopping',
          'Dining room',
          'Health',
          'Hobbies',
          'Technology',
          'Time & dates',
          'Countries',
          'Work',
          'Sports',
          'Around the house',
          'Animals',
          'Nature',
          'Culture',
          'Music',
          'Emotions',
          'Education',
          'Holidays',
          'Cinema',
          'School',
          'Common phrases',
          'Transportation',
          'Common words',
        ],
      },
    },
    {
      id: 11,
      language: 'en',
      description: {
        id: 11,
        title: 'Your personalised plan is ready',
        subtitle: 'Create an account to see your personalised plan.',
        buttons: {
          apple: 'Continue with Apple',
          email: 'Continue with e-mail',
          terms: 'Terms & conditions',
        },
        other_texts: {
          terms_title: 'Creating an account, you accept',
        },
      },
    },
    {
      id: 12,
      language: 'en',
      description: {
        id: 12,
        title: 'Create an account',
        subtitle: '',
        buttons: {
          continue: 'continue',
          terms: 'Terms & conditions',
        },
        other_texts: {
          terms_title: 'Creating an account, you accept',
        },
      },
    },
    {
      id: 13,
      language: 'en',
      description: {
        id: 13,
        title: '',
        subtitle: 'Creating personalised plan...',
      },
    },
    {
      id: 14,
      language: 'en',
      description: {
        id: 14,
        features: [
          {
            title: 'Personalized plan',
            subtitle: 'Get a personalized plan tailored to your level and goals',
          },
          {
            title: 'Combine letters',
            subtitle: 'Combine a word from unassembled letters',
          },
          {
            title: 'Listen',
            subtitle: 'Listen to the dictation and write correct answer',
          },
          {
            title: 'Speak',
            subtitle: 'Pronounce correct answer using voice recognition',
          },
          {
            title: 'Write',
            subtitle: 'Write your answer with the keyboard without hints',
          },
          {
            title: 'Reverse selection',
            subtitle: 'Pick the correct meaning from one of the four different answers',
          },
          {
            title: 'Unlimited energy',
            subtitle: 'Learn more. Skip the queue and practice as much as possible',
          },
          {
            title: 'Unlimited groups',
            subtitle: 'Unlimited words per training',
          },
          {
            title: 'Offline mode',
            subtitle: 'Enjoy practicing wherever you are. Even with no internet connection',
          },
        ],
        buttons: {
          continue: 'continue',
          terms: 'Terms & conditions',
          restore: 'Restore purchases',
        },
        other_texts: {
          terms_title: 'This is auto-renewable subscription. See details in',
          cta_title: 'Choose a subscription plan for after your 3-day free trial.',
          price1_title: 'month',
          price2_title: 'months',
          price3_title: 'lifetime',
        },
      },
    },
    {
      id: 15,
      language: 'en',
      description: {
        id: 15,
        title: 'Thank you',
        subtitle: 'An email confirmation has been sent to %@.',
        buttons: {
          continue: 'download on the appstore',
        },
        other_texts: {
          cta_download: 'Download\\nRemember now.',
          receipt_explanation:
            'An email receipt including the details about your order has been sent to your email address.',
        },
      },
    },
  ])

  const $get = async () => {
    const res = await axios.get(`${$url.screen}/${lang.value}`)
    translate.value = res.data
  }

  onMounted(() => {
    const langCode = navigator.language.split('-')[0].toUpperCase()
    lang.value = langCode === 'es' ? langCode : 'en'
  })

  return { lang, $get, translate }
})
