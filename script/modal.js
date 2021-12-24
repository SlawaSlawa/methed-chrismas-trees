const buttonsOrder = document.querySelectorAll('.product_order')
const buttonConsultation = document.querySelector('.header__consultation')

const overlayOrder = document.querySelector('.overlay_order')
const order = overlayOrder.querySelector('.modal__order')

const overlayConsultation = document.querySelector('.overlay_consultation')

buttonsOrder.forEach(buttonOrder => {
    buttonOrder.addEventListener('click', () => {
        overlayOrder.classList.add('overlay_active')
        order.value = buttonOrder.dataset.order
    })
})

overlayOrder.addEventListener('click', (evt) => {
    const target = evt.target

    if (target === overlayOrder || target.closest('.modal__close')) {
        overlayOrder.classList.remove('overlay_active')
    }
})

buttonConsultation.addEventListener('click', () => {
    overlayConsultation.classList.add('overlay_active')
})

overlayConsultation.addEventListener('click', (evt) => {
    const target = evt.target

    if (target === overlayConsultation || target.closest('.modal__close')) {
        overlayConsultation.classList.remove('overlay_active')
    }
})