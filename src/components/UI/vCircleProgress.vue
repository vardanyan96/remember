<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

const props = defineProps({
  progress:{
    type:Number,
    default: 0
  },
  size:{
    type:Number,
    default:100
  },
  strokeWidth:{
    type:Number,
  },
  strokeColor:{
    type:String,
  },
  trackColor:{
    type:String,
  }
});

const progressValue = ref(0); // Анимированный процент

// Вычисляем длину окружности
const radius = computed(() => (props.size || 100) / 2 - (props.strokeWidth || 8) / 2);
const circumference = computed(() => 2 * Math.PI * radius.value);
const strokeDashoffset = computed(() =>
  circumference.value - (progressValue.value / 100) * circumference.value
);


const animateProgress = (start: number, end: number, duration: number) => {
  let startTime: number | null = null;

  const step = (timestamp: number) => {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1); // 0 - 1

    // Используем `ease-out` (ускорение в начале, замедление в конце)
    progressValue.value = start + (end - start) * (1 - Math.pow(1 - progress, 3));

    if (elapsed < duration) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

onMounted(() => {
  animateProgress(0, props.progress || 100, 1500); // Длительность 1.5 секунды
});
</script>

<template>
  <div class="relative flex items-center justify-center" :style="{ width: `${size}px`, height: `${size}px` }">
    <svg :width="size" :height="size" :viewBox="`0 0 ${size} ${size}`" class="rotate-[-90deg]">
      <!-- Фоновый круг -->
      <circle :cx="size / 2" :cy="size / 2" :r="radius" :stroke="trackColor || 'lightgray'" :stroke-width="strokeWidth" fill="none" />

      <!-- Круг прогресса -->
      <circle
        :cx="size / 2"
        :cy="size / 2"
        :r="radius"
        :stroke="strokeColor || 'limegreen'"
        :stroke-width="strokeWidth"
        fill="none"
        stroke-linecap="round"
        stroke-dasharray="317"
        :stroke-dashoffset="strokeDashoffset"
      />
    </svg>

    <!-- Текст в центре -->
    <div class="absolute text-white text-xl progress-number">{{ Math.round(progressValue) }}%</div>
  </div>
</template>
