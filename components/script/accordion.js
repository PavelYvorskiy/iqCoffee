class Accordion {
    constructor(items, activeClass, activeItem) {
      this.items       = items
      this.activeClass = activeClass
      this.activeItem  = activeItem
      if (typeof this.activeItem === 'number') {
        this.items[this.activeItem].classList.add(this.activeClass)
      }
    }
  
    changeActiveItem(newItemIndex) {
      if (newItemIndex === this.activeItem) {
        return
      }
      if (typeof this.activeItem === 'number') {
        this.items[this.activeItem].classList.remove(this.activeClass)
      }
      this.activeItem = newItemIndex
      this.items[this.activeItem].classList.add(this.activeClass)
    }
  }
  const handleItem = (itemIndex) =>{
    return()=>{
       btnActiveAccordion.changeActiveItem(itemIndex)
       visibleListAccordion.changeActiveItem(itemIndex)
    }
  }
  const btnActive   = document.querySelectorAll('.button-active-setting')
  const visibleList     = document.querySelectorAll('.machine-content-description__items')

  const btnActiveAccordion = new Accordion(btnActive , 'active')
  const visibleListAccordion   = new Accordion(visibleList ,'active')

  btnActive.forEach((item,index) =>{
    item.addEventListener('click',handleItem(index))
  })

 /* const handleCoffee = (itemIndex) =>{
    return()=>{
      visibleCoffeeAccordion.changeActiveItem(itemIndex)
       
    }
  }
  const btnActiveCoffee   = document.querySelectorAll('.coffee-card-description')
  const visibleCoffeeAccordion   = new Accordion(btnActiveCoffee,'active')
   
  btnActiveCoffee .forEach((item,index) =>{
    item.addEventListener('click',handleCoffee(index))
  })*/