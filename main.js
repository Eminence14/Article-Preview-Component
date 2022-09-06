const footer1 = document.querySelector('.foot')
const footer2 = document.querySelector('.foot_replace')
const footDesktop = document.querySelector('.foot_replace3')
const share = document.querySelector('#share')
const icons = document.querySelectorAll('.icons')
const svgArrow = document.querySelector('#arrow')

footer2.style.display = 'none'
footDesktop.style.display = 'none'

if (window.innerWidth < 1200) {
    svgArrow.style.display = 'none'
}

share.addEventListener('click', showIcons)
for (let icon of icons) {
    icon.addEventListener('click', footer)
}

function showIcons() {
    if (window.innerWidth < 1200) {
        footer1.style.display = 'none'
        footer2.style.display = 'flex'
    }
    if (window.innerWidth > 1200) {
        footer2.style.display = 'none'
        footDesktop.style.display = 'flex'
    }
}

function footer() {
    if (window.innerWidth < 1200) {
        footer1.style.display = 'flex'
        footer2.style.display = 'none'
    }
}
