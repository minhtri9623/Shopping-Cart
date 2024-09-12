import cart from "./cart.js";
import products from "./products.js";


let app = document.getElementById('app');
let temporaryContent = document.getElementById('temporaryContent');

// load temporary content
const loadTemplate = () => {
    fetch('/template.html')
    .then((response) => response.text())
    .then(html => {
        app.innerHTML = html;
        let contentTab = document.getElementById('contentTab');
        contentTab.innerHTML = temporaryContent.innerHTML;
        temporaryContent.innerHTML = null; // clear temporary content after loading
        cart();
        initApp();
    })
}

loadTemplate();

const initApp = () => {
    // load list product
    let listProducts = document.querySelector('.listProduct'); 
    listProducts.innerHTML = null;
    products.forEach((product) => {
        let newProduct = document.createElement('div'); 
        newProduct.classList.add('item');
        newProduct.innerHTML = 
        `
            <a href="/detail.html?id=${product.id}">
                <img src="${product.image}"/>
            </a>
            <h2>${product.name}</h2>
            <div class="price">$${product.price}</div>
            <button class="addCart" data-id=${product.id}>Add to cart</button>
        `
        listProducts.appendChild(newProduct);
    })   
}