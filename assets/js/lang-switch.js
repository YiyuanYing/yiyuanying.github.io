function setLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
    document.querySelectorAll('[data-lang]').forEach(element => {
        if (element.getAttribute('data-lang') === lang) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const lang = localStorage.getItem('preferredLanguage') || 'en';
    setLanguage(lang);
});