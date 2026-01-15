<template>
  <header class="top-nav">
    <div class="nav-left">
      <img src="/images/profile.jpg" alt="Profile Photo" class="nav-profile-photo" @error="handleImageError">
      <h1>{{ t('name') || 'Yiyuan Ying' }}</h1>
    </div>

    <nav class="nav-center">
      <ul class="nav-links">
        <li><a href="#about" v-if="isHome" @click.prevent="scrollTo('#about')">{{ t('nav_about') }}</a>
            <a href="#about" v-else @click.prevent="goHomeAndScroll('#about')">{{ t('nav_about') }}</a>
        </li>
        <li><a href="#projects" v-if="isHome" @click.prevent="scrollTo('#projects')">{{ t('nav_projects') }}</a>
            <a href="#projects" v-else @click.prevent="goHomeAndScroll('#projects')">{{ t('nav_projects') }}</a>
        </li>
        <li><a href="#timeline" v-if="isHome" @click.prevent="scrollTo('#timeline')">{{ t('nav_timeline') }}</a>
             <a href="#timeline" v-else @click.prevent="goHomeAndScroll('#timeline')">{{ t('nav_timeline') }}</a>
        </li>
        <li><a href="#year-end-summary" v-if="isHome" @click.prevent="scrollTo('#year-end-summary')">{{ t('nav_summary') }}</a>
            <a href="#year-end-summary" v-else @click.prevent="goHomeAndScroll('#year-end-summary')">{{ t('nav_summary') }}</a>
        </li>
        <li><router-link to="/cv">{{ t('nav_cv') }}</router-link></li>
      </ul>
    </nav>

    <div class="nav-right">
      <button id="lang-toggle" class="btn-text" @click="toggleLang">
        {{ currentLang === 'en' ? '中文' : 'EN' }}
      </button>
      <button id="theme-toggle" class="btn-icon" @click="toggleTheme">
        <i class="fas" :class="isDark ? 'fa-sun' : 'fa-moon'"></i>
      </button>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const props = defineProps(['currentLang', 'isDark', 'translations']);
const emit = defineEmits(['toggle-lang', 'toggle-theme']);
const route = useRoute();
const router = useRouter();

const isHome = computed(() => route.path === '/');

const t = (key) => {
  return props.translations[props.currentLang]?.[key] || key;
};

const toggleLang = () => emit('toggle-lang');
const toggleTheme = () => emit('toggle-theme');

const handleImageError = (e) => {
  e.target.src = 'https://via.placeholder.com/150';
};

const scrollTo = (hash) => {
    // If we are already on home, scroll
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const goHomeAndScroll = async (hash) => {
    await router.push('/');
    setTimeout(() => {
        scrollTo(hash);
    }, 100); // Give time for DOM to update
};
</script>
