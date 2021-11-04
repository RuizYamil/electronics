const containerProducts = document.querySelector('.container-cards');
const containerShoppingCart = document.getElementById('container-shopping-cart')

const counterCart = document.getElementById('counter-shopping-cart')
const totalPrice = document.getElementById('total-price')

const emptyButton = document.getElementById('empty-shopping-cart')

const shoppingCart = []

// Empty cart
emptyButton.addEventListener('click', () => {
    shoppingCart.length = 0
    updateCart()
})

// Stock of products
const showProducts = (array) => {
    containerProducts.innerHTML = ""

    array.forEach((product) => {
        const div = document.createElement('div');
        div.classList = `${product.class}`
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
    shoppingCart.push(item)
    updateCart()
}

// Remove items from cart
const removeCart = (prodId) => {
    const item = shoppingCart.find( (prod) => prod.id === prodId )
    const indice = shoppingCart.indexOf(item)
    shoppingCart.splice(indice, 1)
    updateCart()
}

// Update cart items
const updateCart = () => {
    containerShoppingCart.innerHTML = ""

    shoppingCart.forEach( (prod) => {
        const div = document.createElement('div')
        div.className = "productInShoppingCart"
        div.innerHTML = `
                    <p class="product-title-modal">Producto: ${prod.title}</p>
                    <p class="price-modal">Precio: $${prod.price}</p>
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