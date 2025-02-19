<script lang="ts" setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import type { Translate } from '@/helpers/interfaces.ts'
import { useStepStore } from '@/store/step.ts'
import { useTariffStore } from '@/store/tariffs.ts'
import { onMounted } from 'vue'

const stepStore = useStepStore()
const tariffStore = useTariffStore()

const texts: Translate | any = stepStore.activeStepText?.description || {}
onMounted(async () => await tariffStore.$get())
interface Tariff {
  number: number
  price: string
  old_price?: string
}
const tariff = [
  {
    number: 1,
    price: '£12.49 / mth',
  },
  {
    number: 12,
    price: '£5 / mth',
  },
  {
    number: 0,
    old_price: '£83.99',
    price: '£66.99',
  },
] as Tariff[]
</script>

<template>
  <div class="page-body page-body-full page-body-white">
    <div class="info-page" v-if="texts.features">
      <Carousel :items-to-show="1" :wrap-around="true" :autoplay="7000" :loop="true">
        <Slide v-for="(item, index) in texts.features" class="slider-item" :key="index">
          <h1 class="slider-name mb-[20px]">Remember<span>Pro</span></h1>
          <div class="slider-icon mb-[28px]">
            <img :src="`/img/tariffBg/icon-${index + 1}.svg`" alt="icon" />
          </div>
          <div class="slider-texts">
            <h2 class="slider-title mb-[8px]">{{ item.title }}</h2>
            <h3 class="slider-sub-title">{{ item.subtitle }}</h3>
          </div>
          <div class="slider-bg">
            <img :src="`/img/tariffBg/bg-${index + 1}.svg`" alt="bg" />
          </div>
        </Slide>
        <template #addons>
          <Pagination />
        </template>
      </Carousel>
      <div class="info-page__top info-page__top-start w-full">
        <ul class="price-list mb-[16px]">
          <li
            v-for="(item, index) in tariff"
            :key="index"
            class="price-item"
            :class="{ active: index === 1 }"
          >
            <div v-if="item.number" class="price-item-number mb-[2px]">{{ item.number }}</div>
            <div v-else class="price-item-number mb-[10px]">
              <svg
                width="42"
                height="20"
                viewBox="0 0 42 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.74 11.0406C23.5427 15.2683 27.475 19.6389 32.55 19.6389C37.7598 19.6389 42 15.2326 42 9.81944C42 4.40447 37.7615 0 32.55 0C28.0385 0 24.4317 3.45287 21.014 7.18783C17.5928 3.4493 13.9773 0 9.45 0C4.2385 0 0 4.40447 0 9.81944C0 15.2326 4.2385 19.6389 9.45 19.6389C13.349 19.6389 16.5147 17.0162 18.837 14.731C19.5317 14.0454 19.551 12.9152 18.8808 12.2065C18.2105 11.4977 17.1028 11.478 16.4062 12.1618C13.6605 14.8631 11.5167 16.0682 9.45 16.0682C6.16875 16.0682 3.5 13.2652 3.5 9.81944C3.5 6.37371 6.16875 3.57071 9.45 3.57071C13.0165 3.57071 16.282 7.19855 19.74 11.0406ZM32.5254 16.1039C29.3483 16.1039 26.3962 13.1915 23.3333 9.81946C26.3962 6.4492 29.3483 3.53501 32.5272 3.53501C35.822 3.53501 38.5 6.35403 38.5 9.81946C38.5 13.2849 35.8202 16.1039 32.5254 16.1039Z"
                  fill="#1C1D1E"
                />
              </svg>
            </div>
            <div class="price-item-text">{{ texts?.other_texts[`price${index + 1}_title`] }}</div>
            <div v-if="item.old_price" class="price-item-del-is">{{ item?.old_price }}</div>
            <div class="price-item-is">{{ item?.price }}</div>
          </li>
        </ul>
        <div v-if="tariffStore.tariffs" class="wrapper">
          <div class="price-text mb-[16px]">{{ texts?.other_texts?.cta_title }}</div>
          <button
            @click.prevent="tariffStore?.checkTariff(tariffStore.tariffs[0].id || 0)"
            class="btn btn-blue w-full"
          >
            {{ texts.buttons.continue }}
          </button>
        </div>
      </div>
      <div class="info-page__bottom">
        <a href="#" class="link-restore">{{ texts.buttons.restore }}</a>
        <div class="info-page__bottom-text pb-[15px]">
          {{ texts?.other_texts?.terms_title }} <a href="#">{{ texts.buttons.terms }}</a>
        </div>
      </div>
    </div>
  </div>
</template>
