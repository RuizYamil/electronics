const containerModal = document.getElementsByClassName('container-modal')[0]
const openButton = document.getElementById('button-shopping-cart')
const closeButton = document.getElementById('close-shopping-cart')
const modalShoppingCart = document.getElementsByClassName('modal-shopping-cart')[0]

openButton.addEventListener('click', ()=>{
    containerModal.classList.toggle('modal-active')
})
closeButton.addEventListener('click', ()=>{
    containerModal.classList.toggle('modal-active')
})

containerModal.addEventListener('click', () => {
    closeButton.click()
})
modalShoppingCart.addEventListener('click', (event) => {
    event.stopPropagation()
})