function setLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
    
    // 更新内容显示
    document.querySelectorAll('[data-lang]').forEach(element => {
        if (element.getAttribute('data-lang') === lang) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
    
    // 更新按钮状态
    document.querySelectorAll('.lang-switch .btn--primary').forEach(button => {
        if (button.textContent.toLowerCase().includes(lang)) {
            button.style.backgroundColor = '#1a4c80';
        } else {
            button.style.backgroundColor = '#2266aa';
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const lang = localStorage.getItem('preferredLanguage') || 'en';
    setLanguage(lang);
});