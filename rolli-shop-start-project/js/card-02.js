//Отслеживаем клик на странице 

//Див внутри корзины в который мы добавляем товары 
const cartWrapper = document.querySelector('.cart-wrapper')
console.log(cartWrapper)

window.addEventListener('click', function(event) {
    //Проверяем что клик был совершен по кнопке добавить в корзину
    if (event.target.hasAttribute('data-cart')) {
        console.log('Click on card')
        //находим карточку с товаром внутри которой был совершен клик 
        const card = event.target.closest('.card')

        //Собираем данные с карточки товара и записываем их в единый обьект productInfo

        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title:  card.querySelector('.item-title').innerText,
            itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText
        }
            console.log(productInfo)
        //Проверяем есть ли такой товар в корзине 
        // const itemInCard = cartWrapper.querySelector('[data-id="'+ productInfo.id +'"]')
        const itemInCard = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`)
        console.log(itemInCard)

        //Если элемент есть в корзине  



        console.log(productInfo)

        //Собранные дынные подставим в шаблон корзины 
        
        const cardItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
        <div class="cart-item__top">
            <div class="cart-item__img">
                <img src="${productInfo.imgSrc}" alt="${productInfo.title}">
            </div>
            <div class="cart-item__desc">
                <div class="cart-item__title">${productInfo.title}</div>
                <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}.</div>

                <!-- cart-item__details -->
                <div class="cart-item__details">

                    <div class="items items--small counter-wrapper">
                        <div class="items__control" data-action="minus">-</div>
                        <div class="items__current" data-counter="">${productInfo.counter}</div>
                        <div class="items__control" data-action="plus">+</div>
                    </div>

                    <div class="price">
                        <div class="price__currency">${productInfo.price} ₽</div>
                    </div>

                </div>`

                // Отобразим данные в корзине 
                cartWrapper.insertAdjacentHTML('beforeend', cardItemHTML)

    }
})   