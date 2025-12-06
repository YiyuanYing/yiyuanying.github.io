document.addEventListener('DOMContentLoaded', () => {
    // --- Language Toggle Logic ---
    const langToggleBtn = document.getElementById('lang-toggle');
    let currentLang = localStorage.getItem('lang') || 'en';

    // Initialize Language
    updateLanguage(currentLang);

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'zh' : 'en';
            updateLanguage(currentLang);
            localStorage.setItem('lang', currentLang);
        });
    }

    function updateLanguage(lang) {
        // Update all elements with data-i18n attribute
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                if (el.tagName === 'TITLE') {
                    document.title = translations[lang][key];
                } else {
                    el.innerHTML = translations[lang][key];
                }
            }
        });

        // Update button text
        if (langToggleBtn && translations[lang] && translations[lang]['toggle_lang']) {
            langToggleBtn.textContent = translations[lang]['toggle_lang'];
        }

        // Update HTML lang attribute
        document.documentElement.lang = lang;

        // Update CV Viewer (iframe) if it exists
        const cvViewer = document.getElementById('cv-viewer');
        const downloadBtn = document.getElementById('download-cv-btn');
        
        if (cvViewer) {
            // Check if src is already set to avoid reloading on same language
            const currentSrc = cvViewer.getAttribute('src');
            let newSrc = '';
            if (lang === 'zh') {
                newSrc = 'https://yiyuanying.github.io/MyResume/resume_cn.pdf';
            } else {
                newSrc = 'https://yiyuanying.github.io/MyResume/resume_en.pdf';
            }
            
            if (currentSrc !== newSrc) {
                cvViewer.src = newSrc;
            }
        }

        if (downloadBtn) {
             if (lang === 'zh') {
                downloadBtn.href = 'https://yiyuanying.github.io/MyResume/resume_cn.pdf';
            } else {
                downloadBtn.href = 'https://yiyuanying.github.io/MyResume/resume_en.pdf';
            }
        }
    }

    // --- Dark Mode Toggle Logic ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    // Check for saved user preference
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light-mode';

    if (currentTheme === 'dark-mode') {
        document.body.classList.add('dark-mode');
        if (themeToggleBtn) {
            const themeIcon = themeToggleBtn.querySelector('i');
            if (themeIcon) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
        }
    }

    if (themeToggleBtn) {
        const themeIcon = themeToggleBtn.querySelector('i');
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                if (themeIcon) {
                    themeIcon.classList.remove('fa-moon');
                    themeIcon.classList.add('fa-sun');
                }
                localStorage.setItem('theme', 'dark-mode');
            } else {
                if (themeIcon) {
                    themeIcon.classList.remove('fa-sun');
                    themeIcon.classList.add('fa-moon');
                }
                localStorage.setItem('theme', 'light-mode');
            }
        });
    }
});
