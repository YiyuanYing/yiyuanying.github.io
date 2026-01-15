<template>
  <div class="project-detail-container" v-if="project">
    <router-link to="/#projects" class="back-btn">
        <i class="fas fa-arrow-left"></i> <span>{{ t('back_to_projects') || 'Back' }}</span>
    </router-link>
    
    <h2>{{ t(project.titleKey) }}</h2>
    
    <img v-if="project.mainImage" :src="project.mainImage" @error="handleImageError" alt="Project Image" class="project-detail-img">
    
    <div class="project-content">
        <div v-html="t(project.detailKey)"></div>
    </div>

    <!-- Dynamic Layout -->
    <div v-for="(block, index) in project.layout" :key="index">
        
        <!-- Image Row -->
        <div v-if="block.type === 'image-row'" class="project-images-row" :class="block.class">
            <div class="project-image-item" v-for="(img, imgIndex) in block.items" :key="imgIndex">
                <img :src="img.src" @error="handleImageError" alt="Project Detail Image">
                <p class="image-caption" v-if="img.captionKey">{{ t(img.captionKey) }}</p>
            </div>
        </div>

        <!-- PDF -->
        <div v-else-if="block.type === 'pdf'" style="margin: 30px 0; text-align: center; height: 800px;">
             <iframe :src="block.src" style="width: 100%; height: 100%; border: none; border-radius: 8px;"></iframe>
        </div>

        <!-- Buttons -->
        <div v-else-if="block.type === 'buttons'" style="text-align: center; margin-top: 40px; display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
             <a v-for="(btn, btnIndex) in block.items" :key="btnIndex" :href="btn.url" target="_blank" class="btn-details">
                <i :class="btn.icon"></i> <span>{{ t(btn.labelKey) }}</span>
             </a>
        </div>

    </div>

  </div>
  <div v-else class="project-detail-container">
      <p>Project not found.</p>
      <router-link to="/">Back Home</router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { projects } from '../data/projects';

const props = defineProps(['currentLang', 'translations']);
const route = useRoute();

const t = (key) => {
  return props.translations[props.currentLang]?.[key] || key;
};

const project = computed(() => {
    return projects[route.params.id];
});

const handleImageError = (e) => {
  e.target.src = 'https://via.placeholder.com/800x500';
};
</script>

<style scoped>
.project-detail-container {
    max-width: 1000px;
    width: 100%;
    background: var(--card-bg);
    padding: 40px;
    border-radius: 16px;
    box-shadow: var(--shadow-lg);
    border: 1px solid var(--border-color);
    animation: fadeInUp 0.6s ease forwards;
    margin: 0 auto;
}

.project-detail-img {
    width: 100%;
    max-height: 620px;
    object-fit: cover;
    border-radius: 12px;
    margin-bottom: 30px;
    box-shadow: var(--shadow-md);
}

.back-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 25px;
    color: var(--text-secondary);
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    padding: 8px 16px;
    border-radius: 20px;
    background: var(--bg-color);
}

.back-btn:hover {
    color: var(--accent-color);
    transform: translateX(-5px);
    background: rgba(49, 130, 206, 0.1);
}

.project-detail-container h2 {
    text-align: center;
    margin-bottom: 20px;
    display: block;
}

/* Images Row */
.project-images-row {
    display: flex;
    gap: 20px;
    margin: 30px 0;
    justify-content: center;
    flex-wrap: wrap;
}

.project-images-row.column-layout {
    flex-direction: column; 
    align-items: center;
}

.project-image-item {
    flex: 1;
    min-width: 300px;
    text-align: center;
}

.project-images-row.column-layout .project-image-item {
    width: 100%;
    max-width: 900px;
    flex: none;
}

.project-image-item img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 10px;
    border: 1px solid var(--border-color);
}

.image-caption {
    font-size: 0.9rem;
    color: var(--text-color);
    font-weight: 500;
}
</style>
