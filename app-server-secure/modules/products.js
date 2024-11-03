export class ProductManager {
    constructor(productsFile) {
        this.productsFile = productsFile;
    }

    async loadProducts() {
        try {
            const response = await fetch(this.productsFile);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            console.error('Failed to load products:', error);
            throw error;
        }
    }
}
