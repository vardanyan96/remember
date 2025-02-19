<script lang="ts" setup>
import VPrev from '@/components/UI/vPrev.vue'
import { useStepStore } from '@/store/step.ts'
import type { Translate } from '@/helpers/interfaces.ts'
import { computed, reactive } from 'vue'
import { useAuthStore } from '@/store/auth.ts'
import {$url} from "@/helpers/url.ts";

const stepStore = useStepStore()
const authStore = useAuthStore()
const texts: Translate | any = stepStore.activeStepText?.description || {}

const form = reactive({
  email: '',
  password: '',
  confirm: true,
})

/**
 * Валидация формы для email и пароля.
 * Проверяет, что email валиден и пароль длиной не меньше 6 символов.
 * Возвращает `true`, если есть ошибка, и `false`, если всё правильно.
 *
 * @returns {boolean} Флаг, показывающий наличие ошибки валидации
 */
const formValidation = computed(() => {
  // if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
  //   return true
  // }

  if (!form.password || form.password.length < 6) {
    return true
  }

  return false
})

const send = () => authStore.createUser(form)
</script>

<template>
  <div class="page-body page-body-full page-body-noscroll">
    <div class="wrapper page-body-wrapper">
      <div class="pt-[50px] page-body-wrapper-inner">
        <v-prev @click.prevent="stepStore.$prev" />
        <div class="info-page">
          <div class="info-page__top info-page__top-start">
            <h1 class="page-title text-center m-auto mt-[16px] mb-[20px]">
              {{ texts.title }}
            </h1>

            <form @submit.prevent="send" class="login-form">
              <div class="login-form-item">
                <input
                  v-model="form.email"
                  type="email"
                  class="login-form-input"
                  :class="{'error': authStore.errors && authStore.errors?.email}"
                  placeholder="E-mail"
                />
              </div>
              <div class="login-form-item">
                <input
                  v-model="form.password"
                  type="password"
                  class="login-form-input"
                  :class="{'error': authStore.errors && authStore.errors?.password}"
                  placeholder="Password"
                />
              </div>
              <template v-if="authStore.errors">
                <span v-for="(item, index) in authStore.errors" :key="index" class="login-form-error">
                  {{ item }}
                </span>
              </template>
              <button
                :class="{ 'disabled-class': formValidation }"
                class="btn btn-white w-full capitalize"
                :disabled="authStore.loading"
                type="submit"
              >
                {{ texts.buttons?.continue }}
              </button>
            </form>
          </div>
          <div class="info-page__bottom">
            <span class="login-info pb-[17px]">
              {{ texts?.other_texts?.terms_title }} <a :href="$url.term"><b> {{ texts.buttons?.terms }}</b></a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
