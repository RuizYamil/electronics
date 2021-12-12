// Cart button
const cartIcon = document.querySelector(".btn-shopping-cart");
cartIcon.innerHTML = '<button id="button-shopping-cart"><i class="fas fa-shopping-cart"></i><span id="counter-shopping-cart">0</span></button>';

// Modal Cart
const modalCarts = document.querySelector('.container-modal');
const modalCart = document.createElement('div');
modalCart.classList = "modal-shopping-cart"
modalCart.innerHTML = `
            <h3>Carrito</h3>
            <button id="close-shopping-cart"><i class="fas fa-times-circle"></i></button>
            <div id="container-shopping-cart">
            </div>
            <p class="product-price">Precio total: $<span id="total-price">0</span></p>
            <div class="button-modal">
                <button id="empty-shopping-cart" class="add-button">Vaciar carrito</button>
                <button id="end-purchase" class="add-button">Finalizar compra</button>
            </div>
`    
modalCarts.appendChild(modalCart);

const containerProducts = document.querySelector('.container-cards');
const containerShoppingCart = document.getElementById('container-shopping-cart')

const counterCart = document.getElementById('counter-shopping-cart')
const totalPrice = document.getElementById('total-price')

const emptyButton = document.getElementById('empty-shopping-cart')
const endPurchase = document.getElementById('end-purchase')

// Llamar a MercadoPago
endPurchase.addEventListener('click', () => {
    mercadoPago()
})

// Load storage
document.addEventListener('DOMContentLoaded', () => {
    shoppingCart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCart();
})

// Empty cart
emptyButton.addEventListener('click', () => {
    shoppingCart.length = 0
    localStorage.setItem('cart', JSON.stringify(shoppingCart))
    updateCart()
    Toastify({
        text: "El carrito está vacío",
        duration: 3000,
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
            fontSize: "1.7rem",
          },
        }).showToast();
})

// Stock of products
const showProducts = (array) => {
    containerProducts.innerHTML = ""

    array.forEach((product) => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
            <img src=${product.rating} class="rating" alt="rating">
            <img src=${product.productImg} class="product-img" alt="${product.alt}">
            <h3>${product.title}</h3>
            <div class="paragraph-price">
                <p class="discount price">$${product.discountPrice}</p>
                <p class="price">$${product.price}</p>
            </div>
            <div class="btn-add-to-cart">
                <button id="add${product.id}" class="button-add">Agregar al carrito</button>    
            </div>
        `
        containerProducts.appendChild(div);

        const button = document.getElementById(`add${product.id}`)
        button.addEventListener('click', () => {
            addToCart(product.id)
        })
    })
}
showProducts(stockProducts)

// Add items to cart
const addToCart = (prodId) => {
    const item = stockProducts.find( (prod) => prod.id === prodId)
    localStorage.setItem('cart', JSON.stringify(shoppingCart))
    shoppingCart.push(item)
    updateCart()
    Toastify({
        text: "El producto se ha agregado al carrito",
        duration: 1000,
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
            fontSize: "1.7rem",
          },
        }).showToast();
}

// Remove items from cart
const removeCart = (prodId) => {
    const item = shoppingCart.find( (prod) => prod.id === prodId )
    const indice = shoppingCart.indexOf(item)
    localStorage.setItem('cart', JSON.stringify(shoppingCart))
    shoppingCart.splice(indice, 1)
    updateCart()
}

// Update cart items
const updateCart = () => {
    containerShoppingCart.innerHTML = ""
    localStorage.setItem('cart', JSON.stringify(shoppingCart))
    shoppingCart.forEach( (prod) => {
        const div = document.createElement('div')
        div.className = "productInShoppingCart"
        div.innerHTML = `
                    <p class="product-title-modal"><b>Producto:</b> ${prod.title}</p>
                    <p class="price-modal"><b>Precio:</b> $${prod.price}</p>
                    <button id="remove-cart${prod.id}" class="delete-button"><i class="fas fa-trash-alt"></i></button>
                `
        containerShoppingCart.appendChild(div)

        const remove = document.getElementById(`remove-cart${prod.id}`)
        remove.addEventListener('click', () => {
            removeCart(prod.id)
        })
    })
    counterCart.innerText = shoppingCart.length
    totalPrice.innerText = shoppingCart.reduce((acc, prod) => acc + prod.price, 0)
}

// MercadoPago
const mercadoPago = async () => {

    const cartMP = shoppingCart.map( (prod) => {
        return {
            title: prod.title,
            description: "",
            picture_url: prod.productImg,
            category_id: prod.id,
            quantity: 1,
            currency_id: "ARS",
            unit_price: prod.price
        }
    })

    const resp = await fetch('https://api.mercadopago.com/checkout/preferences', {
        method: 'POST',
        headers: {
            Authorization: 'Bearer TEST-5190265831169154-112123-505bf5ab840ad98ca81b161896e750bb-201471801'
        },
        body: JSON.stringify({
            items: cartMP,
            back_urls: {
                success: window.location.href,
                failure: window.location.href
            }
        })
    })
    const data = await resp.json()
    window.location.replace(data.init_point)
}