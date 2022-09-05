const footer1 = document.querySelector('.foot')
const footer2 = document.querySelector('.foot_replace')
const share = document.querySelector('#share')
const icons = document.querySelectorAll('.icons')

footer2.style.display = 'none'

share.addEventListener('click', showIcons)
for (let icon of icons) {
    icon.addEventListener('click', footer)
}

function showIcons() {
    if (window.innerWidth < 1200) {
        footer1.style.display = 'none'
        footer2.style.display = 'flex'
    }
}

function footer() {
    if (window.innerWidth < 1200) {
        footer1.style.display = 'flex'
        footer2.style.display = 'none'
    }
}
