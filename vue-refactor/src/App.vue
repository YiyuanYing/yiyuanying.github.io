<template>
  <div :class="{ 'dark-mode': isDark }">
    <NavBar 
      :currentLang="currentLang" 
      :isDark="isDark" 
      :translations="translations"
      @toggle-lang="toggleLang" 
      @toggle-theme="toggleTheme" 
    />
    <main class="main-content">
      <router-view 
        :currentLang="currentLang" 
        :translations="translations"
      ></router-view>
    </main>
    <footer class="site-footer">
        <div class="social-links">
          <a href="https://github.com/YiyuanYing" target="_blank"><i class="fab fa-github"></i></a>
          <a href="mailto:yiyuanying@outlook.com"><i class="fas fa-envelope"></i></a>
          <!-- <a href="https://xhslink.com/m/1fhQURU2O22" target="_blank" title="Xiaohongshu"><i class="fas fa-book" style="color: #ff2442;"></i></a> -->
        </div>
        <div class="footer-copyright">
            &copy; {{ new Date().getFullYear() }} Verso_X | Yiyuan Ying
        </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import NavBar from './components/NavBar.vue';
import { translations } from './data/translations';

const currentLang = ref('en');
const isDark = ref(false);

const toggleLang = () => {
  currentLang.value = currentLang.value === 'en' ? 'zh' : 'en';
  localStorage.setItem('lang', currentLang.value);
  document.documentElement.lang = currentLang.value;
};

const toggleTheme = () => {
  isDark.value = !isDark.value;
  localStorage.setItem('theme', isDark.value ? 'dark-mode' : 'light-mode');
  if (isDark.value) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
};

onMounted(() => {
  const savedLang = localStorage.getItem('lang');
  if (savedLang) {
    currentLang.value = savedLang;
    document.documentElement.lang = savedLang;
  }

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark-mode') {
    isDark.value = true;
    document.body.classList.add('dark-mode');
  }
});
</script>
