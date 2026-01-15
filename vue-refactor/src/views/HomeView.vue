<template>
  <div>
    <!-- About Section -->
    <section id="about">
        <h2>{{ t('intro_title') }}</h2>
        <div class="about-card">
            <div v-html="t('intro_text')"></div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects">
        <h2>{{ t('projects_title') }}</h2>
        
        <div class="projects-container">
            <div class="project-card" v-for="project in projectList" :key="project.id">
                <img :src="project.cardImage" @error="handleImageError" :alt="t(project.titleKey)">
                <h3>{{ t(project.titleKey) }}</h3>
                <p>{{ t(project.descKey) }}</p>
                <router-link :to="'/projects/' + project.id" class="btn-details">{{ t('project_view_details') }}</router-link>
            </div>
        </div>
    </section>

    <!-- Timeline Section -->
    <section id="timeline">
        <h2>{{ t('timeline_title') }}</h2>
        
        <div class="timeline-container">
            <div class="timeline-item" v-for="(item, index) in timelineItems" :key="index">
                <div class="timeline-icon">
                    <i :class="item.icon"></i>
                </div>
                <div class="timeline-content">
                    <span class="timeline-date">{{ t(item.dateKey) }}</span>
                    <router-link v-if="item.link" :to="item.link" style="text-decoration: none;">
                        <h3>{{ t(item.titleKey) }}</h3>
                    </router-link>
                    <h3 v-else>{{ t(item.titleKey) }}</h3>
                    <p>{{ t(item.descKey) }}</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Year-end Summary Section -->
    <section id="year-end-summary">
        <h2>{{ t('year_end_summary_title') || 'Year-end Summary' }}</h2>
        <div style="text-align: center;">
            <img src="/images/2025final.jpg" @error="handleImageError" alt="2025 Year-end Summary" style="max-width: 100%; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
            <p style="margin-top: 10px; margin-bottom: 30px; color: var(--text-secondary); font-size: 0.95rem;">{{ t('year_end_summary_2025_caption') || '2025 Photography Summary' }}</p>

            <img src="/images/2024final.jpg" @error="handleImageError" alt="2024 Year-end Summary" style="max-width: 100%; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
            <p style="margin-top: 10px; color: var(--text-secondary); font-size: 0.95rem;">{{ t('year_end_summary_caption') || '2024 Photography Summary' }}</p>
        </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { projects } from '../data/projects';

const props = defineProps(['currentLang', 'translations']);

const t = (key) => {
  return props.translations[props.currentLang]?.[key] || key;
};

const projectList = computed(() => {
    return Object.keys(projects).map(key => ({
        id: key,
        ...projects[key]
    }));
});

const timelineItems = [
    { dateKey: 'timeline_sustech_enroll_date', titleKey: 'timeline_sustech_enroll_title', descKey: 'timeline_sustech_enroll_desc', icon: 'fas fa-graduation-cap' },
    { dateKey: 'timeline_1_date', titleKey: 'timeline_1_title', descKey: 'timeline_1_desc', icon: 'fas fa-robot', link: '/projects/1' },
    { dateKey: 'timeline_ecust_grad_date', titleKey: 'timeline_ecust_grad_title', descKey: 'timeline_ecust_grad_desc', icon: 'fas fa-graduation-cap' },
    { dateKey: 'timeline_2_date', titleKey: 'timeline_2_title', descKey: 'timeline_2_desc', icon: 'fas fa-robot', link: '/projects/1' },
    { dateKey: 'timeline_3_date', titleKey: 'timeline_3_title', descKey: 'timeline_3_desc', icon: 'fas fa-robot', link: '/projects/2' },
    { dateKey: 'timeline_4_date', titleKey: 'timeline_4_title', descKey: 'timeline_4_desc', icon: 'fas fa-lightbulb', link: '/projects/5' },
    { dateKey: 'timeline_5_date', titleKey: 'timeline_5_title', descKey: 'timeline_5_desc', icon: 'fas fa-cogs', link: '/projects/5' },
    { dateKey: 'timeline_ecust_enroll_date', titleKey: 'timeline_ecust_enroll_title', descKey: 'timeline_ecust_enroll_desc', icon: 'fas fa-graduation-cap' }
];

const handleImageError = (e) => {
  e.target.src = 'https://via.placeholder.com/400x300';
};
</script>
