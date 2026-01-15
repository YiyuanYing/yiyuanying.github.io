<template>
  <div class="cv-container">
      <div class="cv-header">
          <router-link to="/" class="back-btn">
             <i class="fas fa-arrow-left"></i> {{ t('back_home') || 'Back to Home' }}
          </router-link>
          <a :href="pdfUrl" class="download-btn" target="_blank">
             <i class="fas fa-download"></i> {{ t('download_cv') || 'Download PDF' }}
          </a>
      </div>
      <iframe :src="pdfUrl" frameborder="0"></iframe>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps(['currentLang', 'translations']);

const t = (key) => {
  return props.translations[props.currentLang]?.[key] || key;
};

const pdfUrl = computed(() => {
    return props.currentLang === 'zh' 
        ? 'https://yiyuanying.github.io/MyResume/resume_cn.pdf' 
        : 'https://yiyuanying.github.io/MyResume/resume_en.pdf';
});
</script>

<style scoped>
.cv-container {
    max-width: 1000px;
    width: 100%;
    background: var(--card-bg);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    height: 85vh;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
}

.cv-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.back-btn {
    color: var(--accent-color);
    text-decoration: none;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 5px;
}

.download-btn {
    background-color: var(--accent-color);
    color: white;
    padding: 8px 15px;
    border-radius: 5px;
    text-decoration: none;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 5px;
}

iframe {
    flex-grow: 1;
    width: 100%;
    border: none;
    border-radius: 5px;
}
</style>
