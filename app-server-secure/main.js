import { loadFooter } from './fragments/footer.js';
import { loadNav } from './fragments/nav.js';
import { ProductManager } from './modules/products.js';
import { applyFilters } from './modules/filters.js';
import { loadCarrousel } from './fragments/carrousel.js';

document.addEventListener('DOMContentLoaded', () => {
    loadNav();
    loadFooter();
    loadCarrousel();
    setupNavigation();
});

function setupNavigation() {
    const mainContent = document.getElementById('main-content');
    const carrousel = document.getElementById('carrousel');

    document.getElementById('home-link').addEventListener('click', () => {
        mainContent.innerHTML = ''; // Limpiar contenido principal
        carrousel.style.display = 'block'; // Mostrar carrusel
    });

    document.getElementById('products-link').addEventListener('click', () => {
        carrousel.style.display = 'none'; // Ocultar carrusel
        showProducts();
    });

    document.getElementById('about-link').addEventListener('click', () => {
        carrousel.style.display = 'none'; // Ocultar carrusel
        mainContent.innerHTML = '<h1>About Us</h1 class ="with" ><div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat architecto non quod libero aliquid odio, soluta recusandae, aspernatur inventore et ab maiores. Corrupti, tempore ex esse maxime reiciendis quibusdam iure!</p></div>'; // Contenido de About se visualiza al ocultar carouesel
    });
}

function showProducts() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <h1 class="container text-center">Productos</h1>
        <div id="filters"></div>
        <div id="product-list" class="container text-center"></div>
    `;

    const productManager = new ProductManager('products.json');
    productManager.loadProducts()
        .then(products => {
            applyFilters(products);
        })
        .catch(error => console.error('Error loading products:', error));
}

