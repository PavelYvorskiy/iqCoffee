const content = document.querySelectorAll('.machine-content');
content.forEach(el => {
    const btn = el.querySelector('.button-active-setting')
    const list = el.querySelector('.machine-content-description__items')
    btn.addEventListener('click', () => {
        list.classList.toggle('active')
       
    })
})