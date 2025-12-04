document.addEventListener('DOMContentLoaded', () => {
    // --- Language Toggle Logic ---
    const langToggleBtn = document.getElementById('lang-toggle');
    let currentLang = localStorage.getItem('lang') || 'en';

    // 初始化语言
    updateLanguage(currentLang);

    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'zh' : 'en';
        updateLanguage(currentLang);
        localStorage.setItem('lang', currentLang);
    });

    function updateLanguage(lang) {
        // 更新所有带有 data-i18n 属性的元素
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // 更新按钮文字
        if (translations[lang] && translations[lang]['toggle_lang']) {
            langToggleBtn.textContent = translations[lang]['toggle_lang'];
        }

        // 更新 HTML lang 属性
        document.documentElement.lang = lang;

        // Update CV Link
        const cvLink = document.querySelector('a[data-i18n="nav_cv"]');
        if (cvLink) {
            if (lang === 'zh') {
                cvLink.href = 'https://yiyuanying.github.io/MyResume/resume_cn.pdf';
                cvLink.target = '_blank'; // Open in new tab
            } else {
                cvLink.href = 'https://yiyuanying.github.io/MyResume/resume_en.pdf';
                cvLink.target = '_blank'; // Open in new tab
            }
        }
    }

    // --- Dark Mode Toggle Logic ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('i');
    
    // Check for saved user preference, if any, on load of the website
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

    if (currentTheme) {
        if (currentTheme === 'dark-mode') {
            document.body.classList.add('dark-mode');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    }

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light-mode');
        }
    });
});
