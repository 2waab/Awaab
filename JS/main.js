// ==================== FILTERS TABS ====================
const tabs = document.querySelectorAll('[data-target]'), tabContents = document.querySelectorAll('[data-content]')
tabs.forEach(tab => {
    tab.onclick = () => {
        const target = document.querySelector(tab.dataset.target);
        tabContents.forEach(tc => {
            tc.classList.remove('filters__active');
        });
        target.classList.add('filters__active');
        tabs.forEach(t => {
            t.classList.remove('filters-tab-active');
        });
        tab.classList.add('filters-tab-active');
    };
});
// ==================== DARK LIGHT THEME ====================
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'fas fa-sun';
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'ligth';
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'fas fa-moon' : 'fas fa-sun';
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'fas fa-moon' ? 'add' : 'remove'](iconTheme)
};
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});
// ==================== SCROLL REVEAL ANIMATION ====================
