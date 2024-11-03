let currentFilters = {
    name: '',
    priceMin: null,
    priceMax: null,
    category: ''
};
//Form inicial nav para aplicar filtros produtos
export function applyFilters(products) {
    const filtersDiv = document.getElementById('filters');
    filtersDiv.innerHTML = `
        <!-- Contenedor de filtros -->
        <div class="container mt-4">
            <h2 class="mb-4">Filter Products</h2>
            <div class="row g-3">
                <!-- Nombre del filtro -->
                <div class="col-md-6 col-lg-3">
                    <input type="text" id="filter-name" class="form-control" placeholder="Filter by name" value="${currentFilters.name}">
                </div>

                <!-- Precio mínimo -->
                <div class="col-md-6 col-lg-3">
                    <input type="number" id="filter-price-min" class="form-control" placeholder="Min price" value="${currentFilters.priceMin || ''}">
                </div>

                <!-- Precio máximo -->
                <div class="col-md-6 col-lg-3">
                    <input type="number" id="filter-price-max" class="form-control" placeholder="Max price" value="${currentFilters.priceMax || ''}">
                </div>

                <!-- Categoría -->
                <div class="col-md-6 col-lg-3">
                    <select id="filter-category" class="form-select">
                        <option value="">All categories</option>
                        <option value="electronics" ${currentFilters.category === 'electronics' ? 'selected' : ''}>Electronics</option>
                        <option value="clothing" ${currentFilters.category === 'clothing' ? 'selected' : ''}>Clothing</option>
                        <option value="robot" ${currentFilters.category === 'robot' ? 'selected' : ''}>Robot</option>
                    </select>
                </div>

                <!-- Botones de aplicar y limpiar filtros -->
                <div class="col-12 d-flex justify-content-center">
                    <button id="apply-filters" class="btn btn-primary ms-2">Apply Filters</button>
                    <button id="clear-filters" class="btn btn-secondary ms-2">Clear Filters</button>
                </div>
            </div>
        </div>
    `;

    // Agregar evento al botón de aplicar filtros
    document.getElementById('apply-filters').addEventListener('click', () => {
        currentFilters = {
            name: document.getElementById('filter-name').value.toLowerCase(),
            priceMin: parseFloat(document.getElementById('filter-price-min').value) || null,
            priceMax: parseFloat(document.getElementById('filter-price-max').value) || null,
            category: document.getElementById('filter-category').value
        };

        // Aplicar los filtros actuales a los productos
        filterProducts(products, currentFilters);
    });

    // Agregar evento al botón de limpiar filtros
    document.getElementById('clear-filters').addEventListener('click', () => {
        currentFilters = {
            name: '',
            priceMin: null,
            priceMax: null,
            category: ''
        };
        applyFilters(products); // Recargar los filtros
        displayProducts(); // Mostrar todos los productos
    });
}
 // Mostrar filtros por categoria o precio min o max function
function filterProducts(products, filters) {
    const filteredProducts = products.filter(product => {
        const matchesName = filters.name ? product.name.toLowerCase().includes(filters.name) : true;
        const matchesPrice = (filters.priceMin === null || product.price >= filters.priceMin) &&
                             (filters.priceMax === null || product.price <= filters.priceMax);
        const matchesCategory = filters.category ? product.category === filters.category : true;

        return matchesName && matchesPrice && matchesCategory;
    });

    displayProducts(filteredProducts);
}
// Mostrar filtros por name
function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Limpiar el contenedor antes de añadir nuevos productos

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'col-md-3 col-sm-6 mb-4'; // Boostrap responsive generado en js itera un for each sobre el productos.json

        productElement.innerHTML = `
            <div class="card h-100">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text">Price: $${product.price}</p>
                    <p class="card-text">Category: ${product.category}</p>
                    <a href="./modules/products.js" class="btn btn-primary buy-button">Comprar</a>
                </div>
            </div>
        `;
        
        productList.appendChild(productElement);
    });

    // Agregar evento a los botones de comprar después de que se hayan añadido al DOM
    document.querySelectorAll('.buy-button').forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); 
            alert('Debes loguearte');
        });
    });
}

