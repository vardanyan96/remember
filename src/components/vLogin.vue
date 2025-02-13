<script lang="ts" setup>
import VPrev from '@/components/UI/vPrev.vue'
import { useStepStore } from '@/store/step.ts'
import type {Translate} from "@/helpers/interfaces.ts";

const stepStore = useStepStore()
const texts: Translate | any = stepStore.activeStepText?.description || {}

const CLIENT_ID = "your.bundle.id"; // Уникальный идентификатор твоего приложения
const REDIRECT_URI = "https://your-backend.com/auth/apple/callback"; // Сюда Apple отправит код
const STATE = "random_string"; // Используй UUID или хэш для безопасности
const SCOPE = "name email";

const handleAppleLogin = () => {
  const url = `https://appleid.apple.com/auth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${SCOPE}&state=${STATE}`;
  window.location.href = url; // Открываем Apple OAuth
};
</script>

<template>
  <div class="page-body page-body-full">
    <div class="wrapper page-body-wrapper">
      <div class="pt-[50px] page-body-wrapper-inner">
        <v-prev @click.prevent="stepStore.$prev" />
        <div class="info-page">
          <div class="info-page__top ">
            <div class="info-page__top-inner">
              <img src="/img/login.svg" alt="login" />
              <h1 class="page-title text-center max-w-[85%] m-auto mt-[16px] mb-[8px]">
                {{ texts.title }}
              </h1>
              <p class="desc ">
                {{ texts?.subtitle }}
              </p>
            </div>
          </div>
          <div class="info-page__bottom">
            <button @click.prevent="handleAppleLogin" class="btn btn-black mb-[21px]">
              <svg
                width="15"
                height="18"
                viewBox="0 0 15 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.2446 2.95328C10.8859 2.18477 11.2077 1.35447 11.2077 0.465217V0.465206C11.2077 0.347262 11.2022 0.228374 11.1892 0.109497C10.7424 0.132897 10.2674 0.269565 9.76526 0.516692C9.262 0.767562 8.847 1.08205 8.5207 1.46027C7.86711 2.20727 7.49907 3.12088 7.49907 3.97456C7.49907 4.09255 7.50657 4.20483 7.5195 4.31151C8.53461 4.39481 9.4707 3.86689 10.2446 2.95328ZM13.6587 15.6851C14.024 15.1594 14.3392 14.5875 14.6055 13.9663C14.7153 13.7029 14.8185 13.4285 14.9163 13.142C14.4653 12.9511 14.0598 12.6822 13.6968 12.3342C12.8957 11.5846 12.4881 10.6405 12.4761 9.50594C12.4631 8.04936 13.1185 6.91394 14.4435 6.10328C13.7033 5.04084 12.5903 4.45112 11.1087 4.33039C10.562 4.28352 9.89461 4.4025 9.10385 4.68984C8.26765 4.99968 7.77439 5.15509 7.62885 5.15509C7.43418 5.15509 6.99015 5.02218 6.29863 4.76008C5.60515 4.49886 5.04711 4.36595 4.62157 4.36595C3.84385 4.37901 3.12168 4.58316 2.45331 4.98377C1.78494 5.38438 1.25091 5.93008 0.849501 6.62187C0.33874 7.48313 0.0837402 8.51089 0.0837402 9.70251C0.0837402 10.7428 0.272871 11.8173 0.650153 12.9269C1.00244 13.9542 1.45211 14.8553 1.99907 15.6324C2.50885 16.3601 2.93439 16.8738 3.27461 17.1734C3.80765 17.6739 4.34167 17.912 4.87744 17.889C5.22972 17.8769 5.69048 17.7551 6.26244 17.5213C6.83352 17.2886 7.36744 17.1734 7.86526 17.1734C8.33994 17.1734 8.85907 17.2886 9.42396 17.5213C9.987 17.7551 10.4707 17.8703 10.8718 17.8703C11.4305 17.8572 11.9522 17.6256 12.4392 17.1734C12.7533 16.8979 13.1609 16.4018 13.6587 15.6851Z"
                  fill="white"
                />
              </svg>
              <span> {{ texts.buttons?.apple}}</span>
            </button>
            <span class="login-go pb-[25px]" @click.prevent="stepStore.$continue()"> {{ texts.buttons?.email }}</span>
            <span class="login-info pb-[17px]">
              {{texts?.other_texts?.terms_title}} <b> {{ texts.buttons?.term }}</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
