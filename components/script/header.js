
//-----------------ПЛАВНЫЙ СКРОЛЛ-------------------------------//

document.querySelectorAll('a[href^="#"').forEach(link => {

  link.addEventListener('click', function(e) {
      e.preventDefault();
      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);

      const topOffset = document.querySelector('.header').offsetHeight;
  
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});

//-----------------NAVBAR ACTIVE------------------------------//

const btnNavbarActive = document.querySelectorAll('.navbar-content__btn');
const listNavBar = document.querySelectorAll('.navbar-mob');
btnNavbarActive.forEach(el=>{
  el.addEventListener('click',()=>{
    el.classList.toggle('active')
    listNavBar.forEach(elem=>{
      elem.classList.toggle('active')
    })
  })
})
const noActiveNavBar = document.querySelectorAll('.navbar-menu-mob__items')
noActiveNavBar.forEach(el=>{
  el.addEventListener('click',()=>{
      listNavBar.forEach(elem=>{
      elem.classList.remove('active')
      btnNavbarActive.forEach(element=>{
         element.classList.remove('active')
      })
  })
  })

})


 //-----------------LINKS CLASS ACTIVE ON SCROLL------------------------------//
 
 window.addEventListener('scroll',()=>{
  let scrollBar = window.scrollY;
    document.querySelectorAll('.section').forEach((el , i)=>{
      if(el.offsetTop - document.querySelector('.header').clientHeight <=scrollBar){
         document.querySelectorAll('.navbar-menu__link').forEach((el)=>{
              if(el.classList.contains('active')){
                  el.classList.remove('active');
              }
          })
          document.querySelectorAll('.navbar-menu__items')[i].querySelector('.navbar-menu__link').classList.add('active');
      }
    })
})   
