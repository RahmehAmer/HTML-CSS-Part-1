// Sidebar expand/collapse menu logic
window.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebarContainer');
    const buttons = Array.from(sidebar.querySelectorAll('.sidebarButton'));
    buttons.forEach((btn, i) => {
        if (i > 0) btn.style.display = 'none';
    });
    const firstBtn = buttons[0];
    firstBtn.style.cursor = 'pointer';

    firstBtn.addEventListener('click', function() {
        buttons.forEach((btn, i) => {
            if (i > 0) {
                btn.style.display = btn.style.display === 'none' ? '' : 'none';
            }
        });
    });
});
