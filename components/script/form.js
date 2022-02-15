const activeFormOrderBtn = document.querySelectorAll("#order")
const formOrder = document.querySelector('.container-form')
activeFormOrderBtn.forEach(elem=>{
   elem.addEventListener('click',()=>{
       formOrder.classList.add('active')
   })
})
const closedFormOrder = document.querySelector('.closed');
closedFormOrder.addEventListener('click',()=>{
    formOrder.classList.remove('active')
})