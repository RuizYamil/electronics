const contenedorProductos = document.querySelector('.container-cards');

stockProductos.forEach((producto) => {
    const div = document.createElement('div');
    div.classList = `${producto.class}`
    div.innerHTML = `
        <img src=${producto.rating} class="rating" alt="rating">
        <img src=${producto.productImg} class="product-img" alt="${producto.alt}">
        <h3>${producto.title}</h3>
        <div class="paragraph-price">
            <p class="discount price">${producto.discountPrice}</p>
            <p class="price">${producto.price}</p>
        </div>
        <div class="btn-add-to-cart">
            <button>Agregar al carrito</button>
        </div>
    `
    contenedorProductos.appendChild(div);
    // div.innerHTML = '<h2>Ofertas Semanales</h2>'
})