<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

const props = defineProps<{
  progress: number; // Значение в процентах (0 - 100)
  size?: number; // Размер круга (по умолчанию 100px)
  strokeWidth?: number; // Толщина линии (по умолчанию 8px)
  strokeColor?: string; // Цвет прогресса (по умолчанию "limegreen")
  trackColor?: string; // Цвет фона (по умолчанию "lightgray")
}>();

const progressValue = ref(0); // Анимированный процент

// Вычисляем длину окружности
const radius = computed(() => (props.size || 100) / 2 - (props.strokeWidth || 8) / 2);
const circumference = computed(() => 2 * Math.PI * radius.value);
const strokeDashoffset = computed(() =>
  circumference.value - (progressValue.value / 100) * circumference.value
);

// Анимация при монтировании
onMounted(() => {
  let step = 0;
  const interval = setInterval(() => {
    if (step >= props.progress) {
      clearInterval(interval);
    } else {
      step += 1;
      progressValue.value = step;
    }
  }, 10); // Скорость анимации
});
</script>

<template>
  <div class="relative flex items-center justify-center" :style="{ width: `${size}px`, height: `${size}px` }">
    <svg :width="size" :height="size" viewBox="0 0 100 100" class="rotate-[-90deg]">
      <!-- Фоновый круг -->
      <circle cx="50" cy="50" :r="radius" :stroke="trackColor || 'lightgray'" :stroke-width="strokeWidth" fill="none" />

      <!-- Круг прогресса -->
      <circle
        cx="50"
        cy="50"
        :r="radius"
        :stroke="strokeColor || 'limegreen'"
        :stroke-width="strokeWidth"
        fill="none"
        stroke-linecap="round"
        stroke-dasharray="288.2"
        :stroke-dashoffset="strokeDashoffset"
      />
    </svg>

    <!-- Текст в центре -->
    <div class="absolute text-white text-xl progress-number">{{ progressValue }}%</div>
  </div>
</template>
