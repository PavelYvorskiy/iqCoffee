const btnActiveCoffeeList = document.querySelectorAll('.coffee-card');
btnActiveCoffeeList.forEach(elem=>{
  elem.addEventListener('click',()=>{
      const list = elem.querySelector('.coffee-card-description');
      list.classList.toggle('active')
  })
})